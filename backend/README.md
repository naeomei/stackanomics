# Backend — Stackanomics Reviews API

FastAPI + SQLAlchemy + Postgres. The database runs in Docker, so everyone on
the team gets an identical Postgres without installing it by hand.

## Setup (one time)

From the **repo root**, start the database:

```bash
docker compose up -d
```

This runs Postgres in a container, reachable at `localhost:5433`. (Port 5433,
not 5432, so it never clashes with a Postgres you might already have running.)

Then, from this `backend/` directory:

```bash
python -m venv .venv          # if you don't already have one
source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env          # points DATABASE_URL at the Docker database
python seed.py                # load the same starting reviews everyone shares
```

## Run the API

```bash
uvicorn app.main:app --reload
```

API at http://localhost:8000 (interactive docs at `/docs`).

## Notes

- **Same starting data, not live-synced.** `seed.py` loads a fixed set of
  reviews from the repo, so everyone starts identical. Reviews you add while
  the app runs stay in *your* container — they aren't shared with teammates.
  To re-share, update `seed.py` and have everyone re-seed.
- `seed.py` is safe to re-run: it only inserts when the table is empty.
- Stop the database with `docker compose down`. Reset it completely (wipe all
  data) with `docker compose down -v`, then `docker compose up -d` and re-seed.
- **Never commit `.env`** — it's gitignored. `.env.example` is the template.
