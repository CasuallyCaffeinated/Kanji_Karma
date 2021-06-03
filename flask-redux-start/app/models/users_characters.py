from .db import db

users_characters = db.Table (
  "users_characters",
  db.Column (
    "usersId",
    db.Integer,
    db.ForeignKey("users.id"),
    primary_key=True
  ),
  db.Column (
    "charactersId",
    db.Integer,
    db.ForeignKey("characters.id"),
    primary_key=True
  )
)
