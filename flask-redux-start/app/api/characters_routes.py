from flask import Blueprint, request
from app.models import Character, User, db
from app.forms import AddCharForm


characters_routes = Blueprint('characters', __name__, url_prefix="/api/characters")


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field}: {error}")
    return errorMessages


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



####################! ADD CHARACTER TO USER ####################
@characters_routes.route("/<int:id>/add-card", methods=["POST"])
def add_to_user(id):
    form = AddCharForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        userId = data["userId"]
        user = User.query.get(userId)
        character = Character.query.get(id)

        character.users.append(user)

        db.session.commit()

        return character.to_dict_users()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
