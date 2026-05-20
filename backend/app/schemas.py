from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class ReviewBase(BaseModel):
    film_id: str = Field(..., description="Ghibli film UUID this review is about")
    reviewer: str = Field(..., min_length=1, max_length=100)
    rating: int = Field(..., ge=1, le=5, description="1-5 stars")
    title: str = Field(..., min_length=1, max_length=200)
    body: str = Field(..., min_length=1)


class ReviewCreate(ReviewBase):
    """Body for POST /reviews."""


class ReviewUpdate(BaseModel):
    """Body for PUT /reviews/{id}. Every field optional → partial updates allowed."""

    film_id: Optional[str] = None
    reviewer: Optional[str] = Field(default=None, min_length=1, max_length=100)
    rating: Optional[int] = Field(default=None, ge=1, le=5)
    title: Optional[str] = Field(default=None, min_length=1, max_length=200)
    body: Optional[str] = Field(default=None, min_length=1)


class ReviewOut(ReviewBase):
    """What the API returns for a review."""

    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
