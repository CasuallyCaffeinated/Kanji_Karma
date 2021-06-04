from flask import Blueprint
from app.models import Character


search_routes = Blueprint('searches', __name__, url_prefix="/api/search")


####################* SEARCH ONE ####################
@search_routes.route("/<string:query>")
def find_one(query):
        searched = Character.query.filter \
        (Character.kanjiCharacter == query) \
        .first()

        return searched.to_dict()

####################* SEARCH MEANINGS ####################
@search_routes.route("/<string:query>/words")
def find_meanings(query):
    meanings = Character.query.filter \
    (Character.meanings.ilike(f"{query}%")) \
    .all()

    return {"search_results": [meaning.to_dict() for meaning in meanings]}
