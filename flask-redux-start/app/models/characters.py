from .db import db
from .users_characters import users_characters
from .decks_characters import decks_characters

#things to do:

class Character(db.Model):

    __tablename__ = "characters"

    id = db.Column(db.Integer, primary_key=True)
    kanjiCharacter = db.Column(db.String(20), nullable=False)
    grade = db.Column(db.Integer),
    strokeCount = db.Column(db.Integer, nullable=False),
    meanings = db.Column(db.String(750)),
    kunReadings = db.Column(db.String(750)),
    onReadings = db.Column(db.String(750)),
    nameReadings = db.Column(db.String(750)),
    jlpt = db.Column(db.Integer),
    unicode = db.Column(db.String(100), nullable=False),
    heisigEn = db.Column(db.String(250))

    #? Many-to-many relationship between Kanji Characters and Users
    users = db.relationship (
        "User",
        secondary=users_characters,
        back_populates="characters"
    )

    #? Many-to-many relationship between Kanji Characters and Decks
    decks = db.relationship (
        "Deck",
        secondary=decks_characters,
        back_populates="characters"
    )
