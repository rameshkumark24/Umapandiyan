import requests
from PIL import Image
from io import BytesIO
import os

url = "https://i.postimg.cc/RFZTXg00/Professional-Lettermark-Logo-with-U.png"
response = requests.get(url)

if response.status_code == 200:
    img = Image.open(BytesIO(response.content))
    # Resize to width 100px, keeping aspect ratio
    w_percent = (100 / float(img.size[0]))
    h_size = int((float(img.size[1]) * float(w_percent)))
    img = img.resize((100, h_size), Image.Resampling.LANCZOS)
    
    output_path = "public/logo-small.png"
    img.save(output_path, optimize=True)
    print(f"Logo saved to {output_path}")
else:
    print("Failed to download image")
