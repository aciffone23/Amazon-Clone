class User < ApplicationRecord
    has_secure_password

    validates :name, :email, :session_token, presence: true, uniqueness: true
    validates :name, length: {in: 3..30}
    validate :first_and_last_name_present
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :email, length: {in: 3..255}
    validates :password, length: { minimum: 6 }, allow_nil: true
    validate :password_length, on: :create


    before_validation :ensure_session_token
    
    has_one :cart
    has_many :products, through: :carts



    def password_length
        if password.present? && password.length < 6
            errors.add(:password, 'must be at least 6 characters long')
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    def first_and_last_name_present
        names = name.split(' ')
        if names.size < 2
          errors.add(:name, 'must include both a first name and a last name')
        end
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        # has_secure_password gives us the authenticate method
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end