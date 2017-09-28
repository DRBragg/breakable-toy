Card.destroy_all
User.destroy_all
Game.destroy_all
Deck.destroy_all

Card.create(catagory: "Opener", body: "Express interest and gratitue to your interviewers.")
Card.create(catagory: "Opener", body: "Comment on the weather in your introduction.")
Card.create(catagory: "Opener", body: "Mention a connection to the company.")
Card.create(catagory: "Opener", body: "Relate an experience to your interviewers.")
Card.create(catagory: "Question", body: "What was the last book you read for fun?")
Card.create(catagory: "Question", body: "If you had a choice between two superpowers - being invisible or flying - which would you choose?")
Card.create(catagory: "Question", body: "Why do you want to work for this company?")
Card.create(catagory: "Question", body: "Discribe the color yellow to someone who's blind.")
Card.create(catagory: "Personal", body: "Talk about something you need to improve upon.")
Card.create(catagory: "Personal", body: "Talk about your best trait.")
Card.create(catagory: "Personal", body: "How do you handle conflict?")
Card.create(catagory: "Personal", body: "Are you a leader or a follower?")
Card.create(catagory: "Closer", body: "While closing, ask your interviewers how well they think you fit to their company.")
Card.create(catagory: "Closer", body: "While closing, ask your interviewers what the next steps in the hiring process are.")
Card.create(catagory: "Closer", body: "While closing, ask your interviewers if they feel you could be successful here.")
Card.create(catagory: "Closer", body: "While closing, ask your interviewers how you compare to other candidates.")

User.create(email: 'DRBragg@email.com', username: 'DRBragg', password: 'password', password_confirmation: 'password', admin: true)
User.create(email: 'Vanessa@email.com', username: 'Vanessa', password: 'password', password_confirmation: 'password')
User.create(email: 'Jennings@email.com', username: 'Jennings', password: 'password', password_confirmation: 'password')
User.create(email: 'MarkyMark@email.com', username: 'MarkyMark', password: 'password', password_confirmation: 'password')
