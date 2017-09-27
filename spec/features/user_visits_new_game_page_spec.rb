require 'rails_helper'

feature "User visits new game page", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "User can see link for new game" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Menu"
    expect(page).to have_link("New Game")
  end

  scenario "Visitor (non-logged in user) does not see link for new game" do
    visit root_path

    expect(page).to have_link("Log In/Sign Up")
    expect(page).to_not have_link("Menu")
  end

  scenario "User can go to new game page" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    visit new_game_path
    expect(page).to have_content("Start a New Game")
  end

  scenario "Visitor (non-logged in user) can not go to new game page" do
    visit root_path

    visit new_game_path

    expect(page).to have_content("Please log in to play a new game!")
  end

  scenario "User can start a new game" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    visit new_game_path

    click_on "Start"

    expect(page).to have_content("Recording")
    # expect(page).to have_content("Card 1 catagory, card 1 body")
  end
end
