from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .users_characters import users_characters



class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(60))
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  # One-to-many relationship between Users and Decks (of cards)
  decks = db.relationship("Deck", back_populates="users")

  #? Many-to-many relationship between Users and Kanji Characters.
  characters = db.relationship (
    "Character",
    secondary=users_characters,
    back_populates="users"
  )


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "username": self.username,
      "email": self.email
    }

  def to_dict_decks(self):
    return {
      "id": self.id,
      "name": self.name,
      "username": self.username,
      "email": self.email,
      "decks": [deck.to_dict() for deck in self.decks]
    }

  def to_dict_decks(self):
    return {
      "id": self.id,
      "name": self.name,
      "username": self.username,
      "email": self.email,
      "characters": [character.to_dict() for character in self.characters]
    }
