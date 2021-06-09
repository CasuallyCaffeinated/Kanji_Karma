from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, NumberRange



class RemoveCharFromUserForm(FlaskForm):
    cardId = IntegerField("characterId", validators=[DataRequired(),
    NumberRange(min=1, max=2136, message="Kanji index in out of range! Could not find that kanji.")])

"""
#? This file might not actually be needed now that I
#? thought about it just a bit. To return if that changes.
"""
