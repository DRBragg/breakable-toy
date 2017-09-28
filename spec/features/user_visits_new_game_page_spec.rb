require 'rails_helper'

feature "User visits new game page", js: true do
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

  scenario "User can see link for new game" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    expect(page).to have_link("New Game")
  end

  scenario "Visitor (non-logged in user) does not see link for new game" do
    visit root_path

    expect(page).to have_content("LOG IN/SIGN UP")
    expect(page).to_not have_content("Sign Out")
  end

  scenario "User can go to new game page" do
    visit root_path
    click_on "Log In/Sign Up"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "New Game"

    expect(page).to have_content("New Game")
    expect(page).to have_button("Start")
  end

  # scenario "Visitor (non-logged in user) can not go to new game page" do
  #   visit root_path
  #
  #   page.driver.browser.action.key_down(:shift).click(last_element.native).key_up(:shift).performvisit new_user_video_path
  #
  #   expect(page).to have_content("Please log in to play a new game!")
  # end

  scenario "User can start a new game" do
    visit root_path
    click_on "Log In"

    fill_in 'Email', with: user.email
    fill_in 'password', with: user.password
    click_button "Log In"

    find(:css, "path[d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z']").click
    click_on "New Game"

    page.driver.browser.action.key_down(:shift).click(last_element.native).key_up(:shift).performvisit new_user_video_path

    click_on "Start"

    expect(page).to have_content("Recording")
  end
end
