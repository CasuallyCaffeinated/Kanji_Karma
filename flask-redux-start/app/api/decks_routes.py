from flask import Blueprint
from app.models import db, Deck, User, Character
# from app.forms import NewDeckForm

decks_routes = Blueprint('decks', __name__, url_prefix="/api/decks")

@decks_routes.route("/") #"/api/messages/"
def decks():
    decks = Deck.query.all()
    return {"decks": [deck.to_dict() for deck in decks]}

@decks_routes.route("/<int:id>")
def deck(id):
    deck = Deck.query.get(id)
    return deck.to_dict()


