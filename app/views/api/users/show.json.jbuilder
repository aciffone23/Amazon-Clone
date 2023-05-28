json.user do
        json.extract! @user, :email, :id, :name, :created_at
end