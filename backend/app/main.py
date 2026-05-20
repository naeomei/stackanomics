from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models  # noqa: F401  (registers the model before create_all)
from .database import Base, engine
from .routers import reviews

# Create tables on startup (simple approach for the course project; no migrations).
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Stackanomics Reviews API")

# Allow the Vite dev server to call this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reviews.router)


@app.get("/")
def health():
    return {"status": "ok"}
