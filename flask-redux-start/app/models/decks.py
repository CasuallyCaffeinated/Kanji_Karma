from .db import db


class Deck(db.Model):

    __tablename__ = "decks"

    id = db.Column(db.Integer, primary_key=True)
    deckName = db.Column(db.String(30), nullable=False)
    category = db.Column(db.String(40))
    usersId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    users = db.relationship("User", back_populates="decks")


    def to_dict(self):
        return {
      "id": self.id,
      "deckName": self.deckName,
      "category": self.category
    }

    def to_dict_users(self):
        return {
       "id": self.id,
      "deckName": self.deckName,
      "category": self.category,
      "users": [user.to_dict() for user in self.users]
    }

    
