module DriverRegistration
  def self.register_selenium_chrome
    return if @selenium_chrome_registered
    Capybara.register_driver :selenium_chrome do |app|
      switches = %w(use-fake-ui-for-media-stream=2 use-fake-device-for-media-stream)
      Capybara::Selenium::Driver.new(app, { browser: :chrome, clear_session_storage: true, switches: switches })
    end
    Capybara::Screenshot.register_driver(:selenium_chrome) do |js_driver, path|
      js_driver.browser.save_screenshot(path)
    end
    @selenium_chrome_registered = true
  end

  def self.register_selenium_firefox
    return if @selenium_firefox_registered
    Capybara.register_driver :selenium_firefox do |app|
      Capybara::Selenium::Driver.new(app, browser: :firefox)
    end
    Capybara::Screenshot.register_driver(:selenium_firefox) do |js_driver, path|
      js_driver.browser.save_screenshot(path)
    end
    @selenium_firefox_registered = true
  end
end
