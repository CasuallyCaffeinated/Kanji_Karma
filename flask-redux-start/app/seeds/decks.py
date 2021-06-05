from app.models import db, Deck


def seed_decks():

    food_vocab = Deck(deckName="Food vocab", category="Food", userId=1)
    db.session.add(food_vocab)

    weather_vocab = Deck(deckName="Weather vocab", category="Weather", userId=2)
    db.session.add(weather_vocab)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
