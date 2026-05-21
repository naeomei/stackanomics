from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import extract

from .. import models, schemas
from ..database import get_db

router = APIRouter(prefix="/reviews", tags=["reviews"])



@router.get("/test", response_model=list[schemas.ReviewOut])
def get_review_page_limit(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    query = db.query(models.Review).offset(skip).limit(limit).all()
    return query

@router.get("/test/{movie_id}", response_model=list[schemas.ReviewOut])
def get_review_by_movie_page(movie_id: str, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    query = db.query(models.Review).filter(extract('film_id',models.Review) == movie_id).offset(skip).limit(limit).all()
    return query

@router.get("/movie/{movie_id}", response_model=list[schemas.ReviewOut])
def get_review_by_movie(movie_id: str, db: Session = Depends(get_db)):
    query = db.query(models.Review).filter(extract('film_id',models.Review) == movie_id).all()
    return query

@router.get("/{review_id}", response_model=schemas.ReviewOut)
def get_review_by_id(review_id: int, db: Session = Depends(get_db)):
    review = db.get(models.Review, review_id)

    if review is None:
        raise HTTPException(status_code=404, detail="Review not found")
    
    return review


@router.post("", response_model=schemas.ReviewOut, status_code=status.HTTP_201_CREATED)
def create_review(payload: schemas.ReviewCreate, db: Session = Depends(get_db)):
    """Create a new review."""
    review = models.Review(**payload.model_dump())
    db.add(review)
    db.commit()
    db.refresh(review)
    return review


@router.put("/{review_id}", response_model=schemas.ReviewOut)
def update_review(review_id: int, payload: schemas.ReviewUpdate, db: Session = Depends(get_db)):
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
