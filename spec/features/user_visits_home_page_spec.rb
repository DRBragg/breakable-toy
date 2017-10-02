require 'rails_helper'

feature "User visits home page", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "Visitor (non-logged in user) sees links to sign up or sign in" do
    visit root_path

    expect(page).to have_content("LOG IN/SIGN UP")
    expect(page).to_not have_content("SIGN OUT")
  end

  scenario "Visitor (non-logged in user) can see sign up form when clicking on sign up" do
    visit root_path
    click_on "Log In/Sign Up"
    click_on "Sign Up"

    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_content("Password Confirmation")
    expect(page).to have_button("Sign Up", disabled: true)
  end

  scenario "Visitor (non-logged in user) sees log in form when clicking on log in" do
    visit root_path
    click_on "Log In/Sign Up"

    expect(page).to have_content("Email")
    expect(page).to have_content("Password")
    expect(page).to have_button("Log In", disabled: true)
  end

  scenario "Logged in user sees link to sign out" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    expect(page).to have_content("SIGN OUT")
    expect(page).to_not have_content("LOG IN/SIGN UP")
  end

  scenario "Logged in user sees menu" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click

    expect(page).to have_link("Home")
    expect(page).to have_link("New Game")
    expect(page).to have_link("My Games")
  end
end
