"""Draws the app icons into site/. Run from anywhere: python tools/make_icons.py

Needs Pillow. A yellow speech bubble with three dots on a maroon background.
No text, so no fonts are needed. The "any" icons have rounded corners; the
maskable icon is full-bleed with the bubble kept inside the central safe area
so Android can crop it to any shape.
"""
from pathlib import Path

from PIL import Image, ImageDraw

MAROON = (141, 21, 58, 255)
YELLOW = (255, 190, 41, 255)
SCALE = 4  # draw 4x larger, then shrink, for smooth edges

SITE = Path(__file__).resolve().parent.parent / "site"


def draw_icon(size, maskable):
    s = size * SCALE
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if maskable:
        d.rectangle([0, 0, s, s], fill=MAROON)
        k = 0.28 * s  # half the bubble width; keeps it inside the safe circle
    else:
        d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(0.18 * s), fill=MAROON)
        k = 0.34 * s

    cx = s / 2
    cy = s / 2 - 0.075 * k  # centre the bubble and its tail as one shape
    top, bottom = cy - 0.8 * k, cy + 0.45 * k

    d.rounded_rectangle([cx - k, top, cx + k, bottom], radius=int(0.4 * k), fill=YELLOW)
    d.polygon(
        [(cx - 0.55 * k, bottom - 2), (cx - 0.1 * k, bottom - 2), (cx - 0.6 * k, cy + 0.95 * k)],
        fill=YELLOW,
    )

    dot_y = (top + bottom) / 2
    r = 0.12 * k
    for dx in (-0.5, 0, 0.5):
        x = cx + dx * k
        d.ellipse([x - r, dot_y - r, x + r, dot_y + r], fill=MAROON)

    return img.resize((size, size), Image.LANCZOS)


def main():
    for name, size, maskable in [
        ("icon-192.png", 192, False),
        ("icon-512.png", 512, False),
        ("icon-maskable-512.png", 512, True),
    ]:
        draw_icon(size, maskable).save(SITE / name, optimize=True)
        print("wrote", SITE / name)


if __name__ == "__main__":
    main()
