from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/reviews", tags=["reviews"])


# ---------------------------------------------------------------------------
# GET endpoints (get_all_reviews, get_review_by_id) are owned by the frontend
# teammate. Add them here so they share this router/prefix.
# ---------------------------------------------------------------------------


@router.post("", response_model=schemas.ReviewOut, status_code=status.HTTP_201_CREATED)
def create_review(payload: schemas.ReviewCreate, db: Session = Depends(get_db)):
    """Create a new review."""
    review = models.Review(**payload.model_dump())
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@router.put("/{review_id}", response_model=schemas.ReviewOut)
def update_review(
    review_id: int, payload: schemas.ReviewUpdate, db: Session = Depends(get_db)
):
    """Update an existing review. Only the fields provided are changed."""
    review = db.get(models.Review, review_id)
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(review, field, value)

    db.commit()
    db.refresh(review)
    return review


@router.delete("/{review_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_review(review_id: int, db: Session = Depends(get_db)):
    """Delete a review."""
    review = db.get(models.Review, review_id)
    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")

    db.delete(review)
    db.commit()
    return None
