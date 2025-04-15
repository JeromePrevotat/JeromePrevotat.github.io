from PIL import Image
import os

LOC = "./img/clients/"
if __name__ == "__main__":
    for f in os.listdir(LOC):
        if f.endswith(".png"):
            img = Image.open(LOC+f)
            img.save(LOC + f.replace(".png", ".webp"))
        if f.endswith(".jpg"):
            img = Image.open(LOC+f)
            img.save(LOC + f.replace(".jpg", ".webp"))