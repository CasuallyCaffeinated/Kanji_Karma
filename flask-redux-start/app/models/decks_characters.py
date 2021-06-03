from .db import db

decks_characters = db.Table (
  "decks_characters",
  db.Column (
    "decksId",
    db.Integer,
    db.ForeignKey("decks.id"),
    primary_key=True
  ),
  db.Column (
    "charactersId",
    db.Integer,
    db.ForeignKey("characters.id"),
    primary_key=True
  )
)
