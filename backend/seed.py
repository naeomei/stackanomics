"""Load the same starting reviews everyone shares.

Run once after starting the Docker DB:  python seed.py
Safe to re-run — it only inserts when the reviews table is empty.

These are REVIEWS, not films. No movie is stored: films come live from the
public Studio Ghibli API (https://ghibliapi.vercel.app/films), and each review
just points at one by its real film UUID (film_id). Several films have more
than one review so "all reviews for a movie" has a real list to show.
"""

from app.database import Base, SessionLocal, engine
from app.models import Review

# Make sure the table exists even if the API hasn't been started yet.
Base.metadata.create_all(bind=engine)

# Real Studio Ghibli API film UUIDs, named here only so it's readable.
CASTLE_IN_THE_SKY = "2baf70d1-42bb-4437-b551-e5fed5a87abe"
TOTORO = "58611129-2dbc-4a81-a72f-77ddfc1b1b49"
KIKI = "ea660b10-85c4-4ae3-8a5f-41cea3648e3e"
MONONOKE = "0440483e-ca0e-4120-8c50-4c8cd9b965d6"
SPIRITED_AWAY = "dc2e6bd1-8156-4886-adff-b39e6043af0c"
HOWLS = "cd3d059c-09f4-4ff3-8d63-bc765a5184fa"
PONYO = "758bf02e-3122-46e0-884e-67cf83df1786"
WIND_RISES = "67405111-37a5-438f-81cc-4666af60c800"

SEED_REVIEWS = [
    # Spirited Away — 3 reviews
    Review(
        film_id=SPIRITED_AWAY,
        reviewer="Mia",
        rating=5,
        title="A masterpiece, obviously",
        body="The bathhouse is the best world Miyazaki ever built. Watch it "
        "once a year, notice something new every time.",
    ),
    Review(
        film_id=SPIRITED_AWAY,
        reviewer="Devon",
        rating=4,
        title="The bathhouse never gets old",
        body="No-Face is one of the great movie characters. Drops a star only "
        "because the train stretch drags a little.",
    ),
    Review(
        film_id=SPIRITED_AWAY,
        reviewer="Quinn",
        rating=3,
        title="Beautiful but I got lost",
        body="Gorgeous to look at, though the dream logic lost me halfway "
        "through. Still glad I watched it.",
    ),
    # Princess Mononoke — 2 reviews
    Review(
        film_id=MONONOKE,
        reviewer="Alex",
        rating=5,
        title="No clean villains",
        body="The most morally complex thing Ghibli ever made. Iron Town vs. "
        "the forest and nobody is fully right.",
    ),
    Review(
        film_id=MONONOKE,
        reviewer="Priya",
        rating=4,
        title="Heavy for a 'kids' movie",
        body="Way darker than people expect. The scale of it is incredible, "
        "even if it's a lot to take in at once.",
    ),
    # My Neighbor Totoro — 2 reviews
    Review(
        film_id=TOTORO,
        reviewer="Sam",
        rating=5,
        title="Comfort in a forest spirit",
        body="Nothing really happens and that's the point. The catbus alone "
        "earns the fifth star.",
    ),
    Review(
        film_id=TOTORO,
        reviewer="Leo",
        rating=5,
        title="The catbus deserves a statue",
        body="Pure warmth from start to finish. The kind of movie you put on "
        "when the world is too much.",
    ),
    # Howl's Moving Castle — 2 reviews
    Review(
        film_id=HOWLS,
        reviewer="Riley",
        rating=4,
        title="Style over story (in a good way)",
        body="The plot wanders but the castle, Calcifer, and Howl's whole "
        "vibe carry it. Calcifer deserves his own movie.",
    ),
    Review(
        film_id=HOWLS,
        reviewer="Tess",
        rating=2,
        title="Gorgeous but the plot lost me",
        body="Stunning animation, but the second half stops making sense. "
        "Wanted to love it more than I did.",
    ),
    # Castle in the Sky — 2 reviews
    Review(
        film_id=CASTLE_IN_THE_SKY,
        reviewer="Naomi",
        rating=5,
        title="The one that started it all",
        body="Laputa is pure adventure — airships, ruins, and a score that "
        "never lets go. Still my favorite Ghibli opener.",
    ),
    Review(
        film_id=CASTLE_IN_THE_SKY,
        reviewer="Marco",
        rating=4,
        title="Airships and adventure",
        body="Classic adventure that holds up decades later. The villains are "
        "a little flat but the world makes up for it.",
    ),
    # Kiki's Delivery Service — 2 reviews
    Review(
        film_id=KIKI,
        reviewer="Jordan",
        rating=4,
        title="Growing up, on a broom",
        body="A gentle story about burnout before anyone called it that. "
        "Loses a star only because the ending feels rushed.",
    ),
    Review(
        film_id=KIKI,
        reviewer="Nadia",
        rating=3,
        title="Sweet but slow in the middle",
        body="Lovely vibes and a great cat, but the pacing sags before the "
        "finale picks it back up.",
    ),
    # Ponyo — 1 review
    Review(
        film_id=PONYO,
        reviewer="Kai",
        rating=4,
        title="Chaos in the best way",
        body="Feels hand-drawn in the most joyful way. The ocean scenes are "
        "worth the price of admission alone.",
    ),
    # The Wind Rises — 1 review
    Review(
        film_id=WIND_RISES,
        reviewer="Owen",
        rating=3,
        title="Ambitious, a little cold",
        body="Beautiful and clearly personal for Miyazaki, but it kept me at "
        "arm's length emotionally.",
    ),
]


def main() -> None:
    db = SessionLocal()
    try:
        existing = db.query(Review).count()
        if existing:
            print(f"Reviews table already has {existing} row(s); skipping seed.")
            return
        db.add_all(SEED_REVIEWS)
        db.commit()
        print(f"Seeded {len(SEED_REVIEWS)} reviews across 8 films.")
    finally:
        db.close()


if __name__ == "__main__":
    main()
