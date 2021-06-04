from flask import Blueprint, jsonify, request
from app.models import User, db
from app.forms import SignUpForm
# from flask_login import login_required

user_routes = Blueprint('users', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field}: {error}")
    return errorMessages


#############* GET ALL USERS #############
# @login_required
@user_routes.route('/')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


#############* GET ONE USER #############
# @login_required
@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()

#############* EDIT USER INFO #############
@user_routes.route("/<int:id>", methods=["PUT"])
def edit_user(id):
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        user_to_update = User.query.get(id)
        user_to_update.name = data['name'] #* Might have to give this a None value to account for nullability
        user_to_update.username = data['username']
        user_to_update.email = data['email']
        user_to_update.password = data['password']

        db.session.add(user_to_update)

        db.session.commit()

        return user_to_update.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
