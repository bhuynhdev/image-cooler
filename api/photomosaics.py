import os
import json
from PIL import Image
from utilities import average_RGB, RGB_tuple_to_str


def create_photomosaics(inputFile, source_folder, pixelation_step=10, sourceIm_size=100):
    inputIm = Image.open(inputFile)

    width, height = inputIm.size
    expansion = int(sourceIm_size / pixelation_step)
    output = Image.new("RGB", (width * expansion, height * expansion))

    cache_path = "./Data/" + os.path.basename(source_folder) + "-cropped-cache.json"

    if not os.path.exists(cache_path):
        print("ERROR, cache path not exist")
        return

    for x in range(0, width, pixelation_step):
        for y in range(0, height, pixelation_step):
            # Crop into smaller components square
            small_image = inputIm.crop(
                (x, y, x + pixelation_step, y + pixelation_step))

            # Average RGB of component square
            aveRGB = average_RGB(small_image)

            # Find source image that match the component square's color
            source_image_path = find_closest_image(aveRGB, cache_path)

            # Resize then paste the source image found onto output
            source_image = Image.open("./SourceImages/" + source_image_path)
            source_image_resized = source_image.resize(
                (sourceIm_size, sourceIm_size))
            output.paste(source_image_resized, (x * expansion, y * expansion))
            # print("Pasted " + source_image_path)

    if output.size[0] > 8000:
        output = output.resize((8000, 8000))

    output_path = ("./Output/" +
                   os.path.basename("result.jpg")[0:-4] +
                   "-mosaics-" +
                   os.path.basename(source_folder)[0:-12] +
                   ".jpg")
    output.save(output_path)
    return output_path


def find_closest_image(input_RGBtuple, cache_path):
    min_dist = 9999
    min_filename = ""
    with open(cache_path, "r") as data:
        cache = json.load(data)
        cache_key = RGB_tuple_to_str(input_RGBtuple)
        if cache_key in cache:
            return os.path.basename(cache_path)[0:-11] + "/" + cache[cache_key]
        # Else, find the closest matching file, and write it into the cache_dict
        R, G, B = input_RGBtuple
        for RGB_key in cache:
            # Slicing to remove surrounding () brackets
            RGB_tuple = RGB_key[1:-1]
            R_data, G_data, B_data = (int(x) for x in RGB_tuple.split(","))
            # Pythagoreans color distance
            color_dist = ((R - R_data)**2 +
                          (G - G_data)**2 +
                          (B - B_data)**2) ** 0.5
            if color_dist < min_dist:
                min_dist = color_dist
                min_filename = cache[RGB_key]
        cache[RGB_tuple_to_str(input_RGBtuple)] = min_filename

    # Re-fresh the cache
    with open(cache_path, "w") as data:
        data.write(json.dumps(cache))
    # Return file path of the closest match
    return os.path.basename(cache_path)[0:-11] + "/" + min_filename


if __name__ == "__main__":
    source_folder = "./SourceImages/dog1000"
    create_photomosaics("input2.jpg", source_folder)
