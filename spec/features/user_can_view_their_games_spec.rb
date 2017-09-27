require 'rails_helper'

feature "User can view their games", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "User can see a link to their games" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Menu"

    expect(page).to have_link("My Games")
  end

  scenario "Visitor (non-logged in user) does not see a link to their games" do
    visit root_path

    expect(page).to_not have_link("Menu")
    expect(page).to have_link("Log In/Sign Up")
  end

  scenario "User can visit a page with all their games" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Menu"
    click_on "My Games"
    expect(page).to have_content("Games list")
    # expect(page).to have_content("Games list") uncomment once factory set up
  end

  scenario "User can view the details of a game from the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Menu"
    click_on "My Games"
    click_on game.link
    # expect(page).to have_content("game date, game video, ect") uncomment once factory set up
  end

  scenario "User can see game by click the link on the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Menu"
    click_on "My Games"
    click_on "Go To"
    # expect(page).to have_content(game.username) uncomment once factory set up
  end
end
