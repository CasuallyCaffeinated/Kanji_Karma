from flask import Blueprint
from app.models import Character


search_routes = Blueprint('searches', __name__, url_prefix="/api/search")


####################! GET FOR ONE ####################
@search_routes.route("<string:query>")
def find_one(query):
        searched = Character.query.filter \
        (Character.kanjiCharacter == query) \
        .first()

        return searched.to_dict() 
