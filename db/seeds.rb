Card.destroy_all
User.destroy_all

User.create(email: "test@test.com", password: "password", password_confirmation: "password")

Card.create(catagory: "Opener", body: "O1 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Opener", body: "O2 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Opener", body: "O3 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Opener", body: "O4 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Closer", body: "C1 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Closer", body: "C2 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Closer", body: "C3 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Closer", body: "C4 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Question", body: "Q1 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Question", body: "Q2 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Question", body: "Q3 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Question", body: "Q4 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Personal", body: "P1 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Personal", body: "P2 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Personal", body: "P3 - Placeholder for testing purposes, this will be real propmts later")
Card.create(catagory: "Personal", body: "P4 - Placeholder for testing purposes, this will be real propmts later")
