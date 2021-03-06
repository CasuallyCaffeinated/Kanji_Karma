from werkzeug.utils import validate_arguments
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Length, NumberRange

class NewDeckForm(FlaskForm):
    deckName = StringField("deckName", validators=[DataRequired(),
    Length(min=1, max=25, message="The deck's name must be between 1 to 25 characters long.")])
    category = StringField("category")
    userId = IntegerField("userId", validators=[DataRequired()])
    submit = SubmitField("submit")

class AddToDeck(FlaskForm):
    characterId = IntegerField("characterId", validators=[DataRequired(),
    NumberRange(min=1, max=2136, message="Kanji index in out of range! Could not find that kanji.")])
    # This might throw an error if I don't have a Submit field? check in the future

class RemoveFromDeck(FlaskForm):
    characterId = IntegerField("characterId", validators=[DataRequired(),
    NumberRange(min=1, max=2136, message="Kanji index in out of range! Could not find that kanji.")])

