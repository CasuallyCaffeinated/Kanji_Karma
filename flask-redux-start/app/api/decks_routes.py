from flask import Blueprint, request
from app.models import db, Deck, User, Character
from app.forms import NewDeckForm

decks_routes = Blueprint('decks', __name__, url_prefix="/api/decks")


############* GET ALL DECKS ##########
@decks_routes.route("/") #"/api/messages/"
def decks():
    decks = Deck.query.all()
    return {"decks": [deck.to_dict() for deck in decks]}

############* GET ONE ##########
@decks_routes.route("/<int:id>")
def deck(id):
    deck = Deck.query.get(id)
    return deck.to_dict()

############* POST NEW DECK ##########
@decks_routes.route("/", methods=["POST"])
def create_new_deck():
    def create_new_deck():
        form = NewDeckForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            data = form.data
            newDeck = Deck (
                deckName=data['deckName'],
                category=data['category'],
                userId=data["userId"]
            )
