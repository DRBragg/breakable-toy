require 'rails_helper'

feature "Visitors are redirected", js: true do
  4.times do
    FactoryGirl.create(:card, :catagory => "Opener")
  end

  4.times do
    FactoryGirl.create(:card, :catagory => "Question")
  end

  4.times do
    FactoryGirl.create(:card, :catagory => "Personal")
  end

  4.times do
    FactoryGirl.create(:card, :catagory => "Closer")
  end

  let!(:user) {FactoryGirl.create(:user)}
  let!(:user2) {FactoryGirl.create(:user)}

  scenario "Visitor (non-logged in user) is redirected when trying to start a new game" do
    visit new_user_video_path(user)

    expect(page).to have_content("You must be logged in to make a new game")

    click_on "Ok"

    expect(page).to have_content("Recorded Games")
  end

  scenario "Visitor (non-logged in user) is redirected when trying to view a games list" do
    visit user_path(user)

    expect(page).to have_content("You are not the owner of this page")
    click_on "Ok"

    expect(page).to have_content("Recorded Games")
  end

  scenario "User is redirected when trying to view someone elses games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    visit user_path(user2)

    expect(page).to have_content("You are not the owner of this page")
    click_on "Ok"

    expect(page).to have_content("Recorded Games")
  end
end
