from io import BytesIO

from fastapi import FastAPI, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from photomosaics import create_photomosaics

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return "Server is running"


source_type_to_folder_name = {
    "cat": "cat999",
    "dog": "dog1000",
    "anime": "danborou-anime-0007"
}


@app.post("/upload")
async def uploadImage(image: UploadFile, src_type: str = Form(default="cat")):
    print(f"Received {image.filename} with {src_type=}")
    source_folder = "./SourceImages/" + source_type_to_folder_name[src_type]
    request_object_content = await image.read()
    output_path = create_photomosaics(BytesIO(request_object_content), source_folder)
    return FileResponse(output_path)
