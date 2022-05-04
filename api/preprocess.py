import os
import json
from pickletools import optimize
from PIL import Image
from PIL.Image import Image as ImgType
from utilities import average_RGB, SOURCE_IMG_CROPPED_SIZE


def create_cache(source_images_folder):
    """
    Crop all source images into squares, then
    create RGB data file for all cropped images
    """
    cropped_images_folder = create_cropped_folder(source_images_folder)
    cache_path = "./Data/" + os.path.basename(cropped_images_folder) + "-cache.json"

    if not os.path.exists(cache_path):
        cache_dict = cache_average_RGB_for_folder(cropped_images_folder)
        with open(cache_path, "w") as f:
            f.write(json.dumps(cache_dict, indent=2))
        print(f"Cached average RGB for source folder: {source_images_folder}")
    else:
        print(cache_path + " existed")
    return cache_path


def create_cropped_folder(source_images_folder):
    """ 
    Square cropping all source images in a folder, and save to different folder 
    """
    cropped_images_folder = "./SourceImages/" + \
        os.path.basename(source_images_folder) + "-cropped-resized"
    if not os.path.exists(cropped_images_folder):
        os.makedirs(cropped_images_folder)
        print("Created " + cropped_images_folder)
        for image_file in os.listdir(source_images_folder):
            if image_file.endswith(".jpg"):
                sourceIm = Image.open(source_images_folder + "/" + image_file)
                crop_and_resize(sourceIm, cropped_images_folder)
    else:
        print(cropped_images_folder + " existed")

    return cropped_images_folder


def crop_and_resize(image: ImgType, destination_folder, square_size=SOURCE_IMG_CROPPED_SIZE):
    """Crop images into square, with square side = min(width, height)"""
    width, height = image.size
    file_name = os.path.basename(image.filename)[0:-4] + "_cropped.jpg"
    file_path = os.path.join(destination_folder, file_name)
    if width > height:
        side = height
        x = int((width - height) / 2)
        image = image.crop((x, 0, x + side, side))
    elif width < height:
        side = width
        x = int((height - width) / 2)
        image = image.crop((0, x, side, x + side))

    image = image.resize((square_size, square_size))
    image.save(file_path, optimize=True)

    # print("Saved " + file_path)


def cache_average_RGB_for_folder(source_folder_path):
    cache = {}
    for image_path in os.listdir(source_folder_path):
        if image_path.endswith(".jpg"):
            image_full_path = os.path.join(source_folder_path, image_path)
            RGB_tuple = average_RGB(Image.open(image_full_path))
            # Need to make the keys into string else won't be able to store into JSON
            cache[str(RGB_tuple)] = image_path

    return cache


if __name__ == "__main__":
    source_folder = "./SourceImages/cat999"
    create_cache(source_folder)

    source_folder = "./SourceImages/dog1000"
    create_cache(source_folder)

    source_folder = "./SourceImages/cat-dog-40"
    create_cache(source_folder)
