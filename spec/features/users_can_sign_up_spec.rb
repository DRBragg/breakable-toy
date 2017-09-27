require 'rails_helper'

feature "Users can sign up for an account", js: true do
  scenario "Visitor sees sign up form when clicking on sign up" do
    visit root_path
    click_on "Log In/Sign Up"
    click_on "Sign Up"

    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password Confirmation")
    expect(page).to have_button("Sign Up", disabled: true)
  end

  scenario "Visitor fill in form" do
    visit root_path
    click_on "Log In/Sign Up"
    click_on "Sign Up"

    fill_in 'Email', with: 'user@email.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'

    expect(page).to have_button("Sign Up", disabled: false)
  end

  scenario "Visitor can sign up with form" do
    visit root_path
    click_on "Log In/Sign Up"
    click_on "Sign Up"

    fill_in 'Email', with: 'user@email.com'
    fill_in 'user_password', with: 'password'
    fill_in 'Password Confirmation', with: 'password'
    click_on 'Sign Up'

    expect(page).to have_link("Sign Out")
  end

  scenario "Visitor cannot sign up with form not filled out" do
    visit root_path
    click_on "Log in/Sign Up"
    click_on "Sign Up"

    expect(page).to have_button("Sign Up", disabled: false)
  end
end
