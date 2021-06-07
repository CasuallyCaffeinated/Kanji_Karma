# Welcome to Kanji Karma
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

## Description
**Kanji Karma（漢字カルマ)** is a full-stack appllication designed to help you better **search for, save and study all of the Jōyō Kanji （常用漢字)**, or the chinese characters found in Japanese. Coupled with that will be a location on the website to help you quickly look up and **study Japanese Hiragana（ひらがな), and Katakana（カタカナ)**, as well as **basic phrases** you'll need if you ever want to **visit Japan**. This will include vocabulary or sentences you might hear in everyday scenarios -- **Introducing yourself, restaurant vocabulary etc.** Help better immerse yourself in Japanese with the help of **Kanji Karma**! 

## Technologies Used
### Frontend
* JavaScript
* React / Redux
* Chakra-UI
* CSS
* Font Awesome
* Hosted live on Heroku
### Backend
* Python
* Flask
* Flask-Migrate
* PostgreSQL database
* Alembic
* SQLAlchemy

### Key Features
* User authentication is handled using Werkzeug's Security Helpers for password hashing.
* Grants access to features like creating Kanji character learning cards to logged in users.
* Designed around a relational database schema, which allows users to create an account, search for a variety of Kanji characters saved on the database, save them to their own profile, view them or delete them.
* Makes use of AJAX / API Routes to render elements such as reading, creating and removing Kanji character learning cards.
* Includes csrf attack protection and performs front-end and back-end validation on forms.
