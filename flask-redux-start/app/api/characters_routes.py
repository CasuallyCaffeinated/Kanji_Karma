from flask import Blueprint
from app.models import Character


characters_routes = Blueprint('characters', __name__, url_prefix="/api/characters")


####################! GET ALL CHARACTERS ####################
@characters_routes.route("/")
def characters():
    characters = Character.query.all()
    return {"characters": [character.to_dict() for character in characters]}



####################! GET A CHARACTER ####################
@characters_routes.route("/<int:id>")
def character(id):
    character = Character.query.get(id)
    return character.to_dict()
