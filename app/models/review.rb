class Review < ApplicationRecord
    belongs_to :user 
    belongs_to :product

    validates :title, presence: true
    validates :body, presence: true
    validate :rating_greater_than_zero

    def rating_greater_than_zero
        if rating.present? && rating <= 0
        errors.add(:rating, "must be greater than 0")
        end
    end

end
