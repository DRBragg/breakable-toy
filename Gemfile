source 'https://rubygems.org/'

ruby '2.4.0'

gem 'rails', '~> 5.1.3'
gem 'react_on_rails', '~> 9.0.1'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'nokogiri'
gem 'jquery-rails'
gem 'bootstrap-sass', '~> 3.3.7'
gem 'bootstrap_form'
gem 'inky-rb', require: 'inky'
gem 'premailer-rails'
gem 'webpacker', '~> 3.0'
gem 'carrierwave', '~> 1.0'
gem "fog-aws"
gem 'devise'
gem 'simple_token_authentication', '~> 1.0'

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem "capybara-screenshot"
  gem "chromedriver-helper"
  gem "database_cleaner"
  gem "generator_spec"
  gem "rspec-retry"
  gem "selenium-webdriver", "<3.0.0"
end


group :development, :test do
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda'
  gem 'valid_attribute'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'phantomjs', :require => 'phantomjs/poltergeist'
  gem 'poltergeist'
  gem 'email_spec'
  gem 'mailcatcher'

end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'mini_racer', platforms: :ruby
