from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from photomosaics import create_photomosaics
from fastapi.responses import FileResponse
from io import BytesIO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return "Server is running"


@app.post("/upload")
async def uploadImage(image: UploadFile):
    request_object_content = await image.read()
    output_path = create_photomosaics(BytesIO(request_object_content))
    return FileResponse(output_path)
