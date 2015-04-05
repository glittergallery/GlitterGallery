FactoryGirl.define do
  sequence :username do |n|
    "sarupbanskota#{n}"
  end

  sequence :email do |n|
    "sbanskota08#{n}@gmail.com"
  end

  factory :user do
    email
    username
    password 'secret12345'
  end

  factory :fb_user, class: User do
    email 'sbanskota08@gmail.com'
    username 'sarupbanskota'
    password 'secret12345'
  end
end
