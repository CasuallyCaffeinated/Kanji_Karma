from app.models import db, Character
import requests
import json


def seed_characters():

    response = requests.get('https://kanjiapi.dev/v1/kanji/grade-1')
    characters = response.json()

    for character in characters:

        char_res = requests.get(f"https://kanjiapi.dev/v1/kanji/{character}")
        character_data = char_res.json()

        meanings = character_data["meanings"]
        if len(meanings) == 0:
            meanings = None
        else:
            meanings = ",".join(character_data["meanings"])

        kun_readings = character_data['kun_readings']
        if len(kun_readings) == 0:
            kun_readings = None
        else:
            kun_readings =  ",".join(character_data["kun_readings"])

        on_readings = character_data['on_readings']
        if len(on_readings) == 0:
            on_readings = None
        else:
            on_readings =  ",".join(character_data["on_readings"])

        name_readings = character_data['name_readings']
        if len(name_readings) == 0:
            name_readings = None
        else:
            name_readings =  ",".join(character_data["name_readings"])

        new_character = Character (
            kanjiCharacter=character,
            grade=character_data["grade"],
            strokeCount=character_data["stroke_count"],
            meanings=meanings,
            kunReadings=kun_readings,
            onReadings=on_readings,
            nameReadings=name_readings,
            jlpt=character_data["jlpt"],
            unicode=character_data["unicode"],
            heisigEn=character_data["heisig_en"]
        )
        db.session.add(new_character)
    db.session.commit()


def undo_characters():
    db.session.execute('TRUNCATE characters RESTART IDENTITY CASCADE;')
    db.session.commit()
