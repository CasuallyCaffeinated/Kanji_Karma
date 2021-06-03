from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


# @login_required
@user_routes.route('/')
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


# @login_required
@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()
