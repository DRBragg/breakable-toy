require 'rails_helper'

feature "User can view their games", js: true do
  let!(:user) {FactoryGirl.create(:user)}
  let!(:game) {FactoryGirl.create(:game, user: user)}

  scenario "User can see a link to their games" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click

    expect(page).to have_link("My Games")
  end

  scenario "Visitor (non-logged in user) does not see a link to their games" do
    visit root_path

    expect(page).to have_content("LOG IN/SIGN UP")
  end

  scenario "User can visit a page with all their games" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"

    expect(page).to have_content("My Games")
  end

  scenario "User can view the details of a game from the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"
    # click_on "expand"
    #
    # expect(page). have_content("Game")
  end

  scenario "User can see game by click the link on the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"
    click_on "Go To"
    # expect(page).to have_content(game.username) uncomment once factory set up
  end
end
