# Node Skeleton

## Project Setup

Poll Master is a simple, single-page AJAX based polling app that uses jQuery, HTML5 and CSS3. Data is stored using postreSQL

<img width="1280" alt="screen shot 2017-10-02 at 2 10 45 pm" src="https://user-images.githubusercontent.com/29167930/31097394-6448b4c8-a77c-11e7-89a5-0adff7491dc6.png">

Getting Started

Clone this repository. Install dependencies using the npm install command. Start the web server using the npm run local command. The app will be served at http://localhost:8080/. Go to http://localhost:8080/ in your browser.

You will have to set up postgresQL and migrate & seed using knex.  

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

    "body-parser": "^1.15.2",
    "clipboard": "^1.7.1",
    "cookie-session": "^1.3.2",
    "dotenv": "^2.0.0",
    "ejs": "^2.4.1",
    "express": "^4.13.4",
    "knex": "^0.11.7",
    "knex-logger": "^0.1.0",
    "mailgun-js": "latest",
    "morgan": "^1.7.0",
    "node-sass-middleware": "^0.9.8",
    "pg": "^6.0.2"
  
  "devDependencies": 
    "nodemon": "^1.12.1",
    "sqlite3": "^3.1.4"
    
    ## More Screen Shots
    
    <img width="1280" alt="screen shot 2017-10-02 at 2 11 38 pm" src="https://user-images.githubusercontent.com/29167930/31097396-66f976a8-a77c-11e7-9279-f9db622c0f67.png">
    
    <img width="1279" alt="screen shot 2017-10-02 at 2 13 17 pm" src="https://user-images.githubusercontent.com/29167930/31097398-69ba529a-a77c-11e7-893d-ec71aaf3b2c0.png">
    
    <img width="1280" alt="screen shot 2017-10-02 at 2 13 32 pm" src="https://user-images.githubusercontent.com/29167930/31097407-70a23104-a77c-11e7-9c7d-dc8e9a53baef.png">
    
    <img width="1280" alt="screen shot 2017-10-02 at 2 13 46 pm" src="https://user-images.githubusercontent.com/29167930/31097413-758d0b76-a77c-11e7-8b09-4abd2c60c45b.png">
    
    <img width="1280" alt="screen shot 2017-10-02 at 2 14 12 pm" src="https://user-images.githubusercontent.com/29167930/31097424-7a78fb22-a77c-11e7-80a6-1318abdfbd34.png">
    
    <img width="1280" alt="screen shot 2017-10-02 at 2 14 35 pm" src="https://user-images.githubusercontent.com/29167930/31097429-7fee1254-a77c-11e7-9a6b-423e2bcb63bb.png">
    
    poll history view
