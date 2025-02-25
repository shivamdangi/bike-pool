from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PG(BaseModel):
    id: int
    name: str
    address: str

class BikePost(BaseModel):
    ownerName: str
    contactNumber: str
    destination: str
    charges: str

pgs = [
    PG(id=1, name="Windsor Elite Coliving PG", address="P Janardhan Reddy Nagar, Gachibowli, Hyderabad"),
    PG(id=2, name="Stanza Living - Munich House", address="P Janardhan Reddy Nagar, Gachibowli, Hyderabad"),
]

bike_posts: Dict[int, List[BikePost]] = {
    1: [
        BikePost(ownerName="John Doe", contactNumber="1234567890", destination="Office A", charges="100"),
    ],
    2: [],
}

@app.get("/api/pgs", response_model=List[PG])
def get_pgs():
    return pgs

@app.get("/api/pgs/{pg_id}/bike-posts", response_model=List[BikePost])
def get_bike_posts(pg_id: int):
    if pg_id not in bike_posts:
        raise HTTPException(status_code=404, detail="PG not found")
    return bike_posts[pg_id]

@app.post("/api/pgs/{pg_id}/bike-posts", response_model=BikePost)
def create_bike_post(pg_id: int, bike_post: BikePost):
    if pg_id not in bike_posts:
        raise HTTPException(status_code=404, detail="PG not found")
    bike_posts[pg_id].append(bike_post)
    return bike_post