from PIL import Image

def resize_image(image_path, max_width=640,max_height=480):
    img = Image.open(image_path)
    if img.width > max_width or img.height > max_height:
        img = img.resize((max_width,max_height), Image.LANCZOS)
        img.save(image_path)