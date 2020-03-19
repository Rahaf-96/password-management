# password-management

<h3>How To Run this project: </h3>
<ol>
<li>clone repo.</li>
<li>in terminal: npm i</li>
  <li>in terminal write the following commands: </li>
- psql <br>
- create database users_info; <br>
- create user human with superuser password '123'; <br>
- grant all privileges on database user_info to human; 
<li>create .env file in the project directory locally. Write inside it the following:</li>
	DATABASE_URL = postgres://human:123@localhost:5432/users_info
<li>to create the tables in your local db go back to terminal and write: node src/models/database/db_build.js</li>
<li>in the terminal : npm start</li>
<li>open localhost:3000 and the project will run.</li>
</ol>
