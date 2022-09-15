from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from redis_om import get_redis_connection,HashModel
from starlette.requests import Request
import requests


app = FastAPI()

app.add_middleware( 
    CORSMiddleware,
    allow_origins = ['http://localhost:3000'],
    allow_methods = ['*'],
    allow_headers = ['*']
)

# This should be a different database

redis = get_redis_connection(
    host="redis-14262.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    port=14262,
    password="Hybjimmu8vQad2LyhFeapT6RCyXul8N7",
    decode_responses=True
)

class Order(HashModel):
    product_id: str
    price: float
    fee: float
    total: float
    quantity:int
    status:str #pending, completed, refunded

    class Meta:
        database = redis


@app.post('/orders')
async def create(request: Request): #sending id and quantity
    body = await request.json()

    req = requests.get('http://localhost:8000/products/%s' % body['id'])

    product = req.json()

    order = Order(
        product_id = body['id'],
        price = product['price'],
        fee = 0.2* product['price'],
        total = 1.2*product['price'],
        quantity = body['quantity'],
        status = 'pending'
    )

    order.save()
    return order
