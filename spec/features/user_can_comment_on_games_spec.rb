require 'rails_helper'

feature "Users can comment on games", js: true do
  let!(:user) {FactoryGirl.create(:user)}
  let!(:game) {FactoryGirl.create(:game, user: user)}
  let!(:deck1) {FactoryGirl.create(:deck, game: game)}
  let!(:deck2) {FactoryGirl.create(:deck, game: game)}
  let!(:deck3) {FactoryGirl.create(:deck, game: game)}
  let!(:deck4) {FactoryGirl.create(:deck, game: game)}

  scenario "Users must fill out the comment field to comment" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Watch This Game"
    click_on "Comment on this game"
    fill_in "Comment", with: "this is a comment"

    expect(page).to have_button("Add Comment", disabled: false)
  end

  scenario "User can comment on a game" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Watch This Game"
    click_on "Comment on this game"
    fill_in "Comment", with: "this is a comment"

    click_on "Add Comment"

    expect(page).to have_content("this is a comment")
  end

  scenario "User cannot comment on a game without filling out form" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on "Watch This Game"
    click_on "Comment on this game"

    expect(page).to have_button("Add Comment", disabled: true)
  end

  scenario "Visitor (non-logged in user) cannot comment" do
    visit root_path

    click_on "Watch This Game"
    click_on "Comment on this game"

    expect(page).to have_content("Please Sign in to comment")
  end
end
