from .db import db
from .decks_characters import decks_characters

class Deck(db.Model):

    __tablename__ = "decks"

    id = db.Column(db.Integer, primary_key=True)
    deckName = db.Column(db.String(30), nullable=False)
    category = db.Column(db.String(40))
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    #? Many-to-one relationship between decks and users
    user = db.relationship("User", back_populates="decks", uselist=False)

      #? Many-to-many relationship between Decks and Kanji Characters
    characters = db.relationship (
        "Character",
        secondary=decks_characters,
        back_populates="decks"
    )


    def to_dict(self):
        return {
      "id": self.id,
      "deckName": self.deckName,
      "category": self.category
    }

    def to_dict_user(self):
        return {
       "id": self.id,
       "deckName": self.deckName,
       "category": self.category,
       "user": self.user.to_dict()
    }

    def to_dict_characters(self):
        return {
            "id": self.id,
            "deckName": self.deckName,
            "category": self.category,
            "characters": [character.to_dict() for character in self.characters]
        }
