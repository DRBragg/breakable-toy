require 'rails_helper'

feature "Users can comment on games", js: true do
  let!(:user) {FactoryGirl.create(:user)}
  let!(:game) {FactoryGirl.create(:game, user: user)}
  let!(:deck) {FactoryGirl.create(:deck, game: game)}

  scenario "User can comment on a game" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Watch This Game"
    click_on "Comment on this game"
    fill_in "Comment", with: "this is a comment"

    expect(page).to have_button("Add a Comment", disabled: false)
  end

  scenario "User cannot comment on a game without filling out form" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Watch This Game"
    click_on "Comment on this game"

    expect(page).to have_button("Comment", disabled: true)
  end

  scenario "Visitor (non-logged in user) cannot click on the comment button" do
    visit root_path

    click_on "Watch This Game"
    click_on "Comment on this game"

    #need to figure out what kinda form I'm going to use and what disable to test
    expect(page).to have_button("Comment", disabled: true)
  end
end
