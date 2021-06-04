from flask.app import Flask
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
# from wtforms.validators import DataRequired


# class AddCharForm(FlaskForm):
#     kanjiCharacter = StringField('kanjiCharacter', validators=[DataRequired()])
#     grade = IntegerField('grade')
#     strokeCount = IntegerField('strokeCount')
#     meanings = StringField('meanings')
#     kunReadings = StringField('kunReadings')
#     onReadings = StringField('onReadings')
#     nameReadings = StringField('nameReadings')
#     jlpt = IntegerField('jlpt')
#     unicode = StringField('unicode', validators=[DataRequired()])
#     heisigEn = StringField('heisigEn')

class AddCharForm(FlaskForm):
    userId = IntegerField('userId')
