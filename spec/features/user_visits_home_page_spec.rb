require 'rails_helper'

feature "User visits home page", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "Visitor (non-logged in user) sees links to sign up or sign in" do
    visit root_path

    expect(page).to have_link("Log In")
    expect(page).to have_link("Sign Up")
    expect(page).to_not have_link("Sign Out")
  end

  scenario "Visitor (non-logged in user) sees sign up form when clicking on sign up" do
    visit root_path
    click_on "Sign Up"

    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password Confirmation")
    expect(page).to have_button("Sign Up", disabled: true)
  end

  scenario "Visitor (non-logged in user) sees log in form when clicking on log in" do
    visit root_path
    click_on "Log In"

    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_button("Log In", disabled: true)
  end

  scenario "Logged in user sees link to sign out" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    expect(page).to have_link("Sign Out")
    expect(page).to_not have_link("Log In")
    expect(page).to_not have_link("Sign Up")
  end
end
