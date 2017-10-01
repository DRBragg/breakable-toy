require 'rails_helper'

feature "User can view their games", js: true do
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
  let!(:game) {FactoryGirl.create(:game, user: user)}
  let!(:deck1) {FactoryGirl.create(:deck, game: game)}
  let!(:deck2) {FactoryGirl.create(:deck, game: game)}
  let!(:deck3) {FactoryGirl.create(:deck, game: game)}
  let!(:deck4) {FactoryGirl.create(:deck, game: game)}


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

    visit user_path(user)

    expect(page).to have_content("You are not the owner of this page")
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
    expect(page).to have_content("My Video")
  end

  scenario "User can view the details of a game from the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"

    expect(page).to have_content("GO TO")
    expect(page).to have_content("DELETE")
  end

  scenario "User can delete their games from the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"
    click_on "Delete"

    expect(page).to have_content("Are you sure you want to delete this game?")
  end

  scenario "User can see game by click the link on the games list" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "My Games"
    click_on "Go to"
    expect(page).to have_content(user.username)
    expect(page).to have_content(game.vid)
    expect(page).to_not have_content("My Games")
  end
end
