from app.models import db, Deck


def seed_decks():

    food_vocab = Deck(deckName="Food", category="Food vocabulary", userId=1)
    db.session.add(food_vocab)

    music_vocab = Deck(deckName="Music", category="Music vocabulary", userId=1)
    db.session.add(music_vocab)

    weather_vocab = Deck(deckName="Weather", category="Weather", userId=2)
    db.session.add(weather_vocab)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
