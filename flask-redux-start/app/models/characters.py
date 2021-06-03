from .db import db
from .users_characters import users_characters
from .decks_characters import decks_characters

#things to do:

class Character(db.Model):

    __tablename__ = "characters"

    id = db.Column(db.Integer, primary_key=True)
    kanjiCharacter = db.Column(db.String(20), nullable=False)
    grade = db.Column(db.Integer)
    strokeCount = db.Column(db.Integer)
    meanings = db.Column(db.String(750))
    kunReadings = db.Column(db.String(750))
    onReadings = db.Column(db.String(750))
    nameReadings = db.Column(db.String(750))
    jlpt = db.Column(db.Integer)
    unicode = db.Column(db.String(100), nullable=False)
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

    def to_dict(self):
        return {
            "id": self.id,
            "kanjiCharacter": self.kanjiCharacter,
            "grade": self.grade,
            "strokeCount": self.strokeCount,
            "meanings": self.meanings,
            "kunReadings": self.kunReadings,
            "onReadings": self.onReadings,
            "nameReadings": self.nameReadings,
            "jlpt": self.jlpt,
            "unicode": self.unicode,
            "heisigEn": self.heisigEn
        }

    def to_dict_users(self):
        return {
            "id": self.id,
            "kanjiCharacter": self.kanjiCharacter,
            "grade": self.grade,
            "strokeCount": self.strokeCount,
            "meanings": self.meanings,
            "kunReadings": self.kunReadings,
            "onReadings": self.onReadings,
            "nameReadings": self.nameReadings,
            "jlpt": self.jlpt,
            "unicode": self.unicode,
            "heisigEn": self.heisigEn,
            "users": [user.to_dict() for user in self.users]
        }

    def to_dict_decks(self):
        return {
            "id": self.id,
            "kanjiCharacter": self.kanjiCharacter,
            "grade": self.grade,
            "strokeCount": self.strokeCount,
            "meanings": self.meanings,
            "kunReadings": self.kunReadings,
            "onReadings": self.onReadings,
            "nameReadings": self.nameReadings,
            "jlpt": self.jlpt,
            "unicode": self.unicode,
            "heisigEn": self.heisigEn,
            "decks": [deck.to_dict() for deck in self.decks]
        }
