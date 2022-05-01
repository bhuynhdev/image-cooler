from PIL import Image


def RGB_tuple_to_str(RGB_tuple):
    """Round each R,G,B value to the nearest 10 then return the string representation"""
    rounded_tuple = (int(round(val, -1)) for val in RGB_tuple)
    return str(tuple(rounded_tuple))


def average_RGB(image: Image.Image):
    """ 
    Calculate the average Red, Green, Blue of a whole image
    Temporarily convert to RGB mode if image is not already RGB
    """
    if image.mode != "RGB":
        image = image.convert("RGB")

    width, height = image.size
    pixel_count = width * height
    sumR = sumG = sumB = 0
    for x in range(width):
        for y in range(height):
            sumR = sumR + image.getpixel((x, y))[0]
            sumG = sumG + image.getpixel((x, y))[1]
            sumB = sumB + image.getpixel((x, y))[2]

    final_red = int(round(sumR / pixel_count, -1))  # Round to the nearest 10
    final_green = int(round(sumG / pixel_count, -1))
    final_blue = int(round(sumB / pixel_count, -1))

    return (final_red, final_green, final_blue)


# def pixelate(image, step):
#     """
#     Divide original image into smaller images, and
#     fill small images with the average_RGB color, to create pixelate effect
#     """
#     width, height = image.size
#     temp = image.copy()

#     for x in range(0, width, step):
#         for y in range(0, height, step):
#             # Crop into smaller image
#             small_image = temp.crop((x, y, x + step, y + step))

#             # Get a mono-color copy with color = average_RGB(small_image)
#             one_color = fill_image(small_image, average_RGB(small_image))

#             # Paste the mono-color copy onto the spot
#             temp.paste(one_color, (x, y))

#     temp.save("pixelated.jpg")
#     return temp


# def fill_image(image, RGB_tuple):
#     """Returns a one-color image, same dimension as original"""
#     return Image.new('RGB', image.size, RGB_tuple)
