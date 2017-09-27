require 'rails_helper'

feature "Users can comment on games", js: true do
  let!(:user) {FactoryGirl.create(:user)}

  scenario "User can comment on a game" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on game.link
    click_on comment.form
    fill_in comment.field
    expect(page).to have_button("Comment", disabled: false)
  end

  scenario "User cannot comment on a game without filling out form" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    click_on game.link
    click_on comment.form
    expect(page).to have_button("Comment", disabled: true)
  end

  scenario "Visitor (non-logged in user) cannot click on the comment button" do
    visit root_path

    click_on game.link

    #need to figure out what kinda form I'm going to use and what disable to test
    expect(page).to have_button("Comment", disabled: true)
  end
end
