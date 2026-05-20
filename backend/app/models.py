from datetime import datetime

from sqlalchemy import DateTime, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from .database import Base


class Review(Base):
    """A user-written review of a Studio Ghibli film.

    The film itself lives in the public Ghibli API; we only store the review
    and link back to the film by its Ghibli UUID (film_id).
    """

    __tablename__ = "reviews"

    id: Mapped[int] = mapped_column(primary_key=True)
    film_id: Mapped[str] = mapped_column(String, index=True)
    reviewer: Mapped[str] = mapped_column(String(100))
    rating: Mapped[int] = mapped_column(Integer)  # 1-5 stars (validated in schemas)
    title: Mapped[str] = mapped_column(String(200))
    body: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
