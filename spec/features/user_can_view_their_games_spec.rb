require 'rails_helper'

feature "User can view their games", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "User can see a link to their games" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    expect(page).to have_link("My Games")
  end

  scenario "Visitor (non-logged in user) does not see a link to their games" do
    visit root_path

    expect(page).to_not have_link("My Games")
    expect(page).to have_link("Log In")
  end

  scenario "User can visit a page with all their games" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "My Games"
    expect(page).to have_content("Games list")
    # expect(page).to have_content("Games list") uncomment once factory set up
  end

  scenario "User can view the details of a game from the games list" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "My Games"
    click_on game.link
    # expect(page).to have_content("game date, game video, ect") uncomment once factory set up
  end

  scenario "User can see comments on a game from the games list" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "My Games"
    click_on game.link
    # expect(page).to have_content("game comments") uncomment once factory set up
  end
end
