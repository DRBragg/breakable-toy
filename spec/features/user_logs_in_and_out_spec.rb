require 'rails_helper'

feature "User can log in and out", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "User can log in" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password

    expect(page).to have_button("Log In", disabled: false)
    click_button "Log In"

    expect(page).to have_content("SIGN OUT")
    expect(page).to_not have_content("LOG IN/SIGN UP")
  end

  scenario "User cannot log in with bad info" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: "WrongPassword"

    expect(page).to have_button("Log In", disabled: false)
    click_button "Log In"

    expect(page).to have_content("Wrong Email/Password!")
  end

  scenario "User can sign out" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    expect(page).to have_content("SIGN OUT")
    expect(page).to_not have_content("LOG IN/SIGN UP")
    click_on "Sign Out"

    expect(page).to have_content("LOG IN/SIGN UP")
    expect(page).to_not have_content("SIGN OUT")
  end
end
