"""Draws the app icons into site/. Run from anywhere: python tools/make_icons.py

Needs Pillow. An abstract rambutan: a red fruit ringed by curved, pointed
spikes with green tips, on a yellow background. No text, so no fonts are
needed. The "any" icons have rounded corners; the maskable icon is full-bleed
with the fruit kept inside the central safe area so Android can crop it to
any shape.
"""
import math
from pathlib import Path

from PIL import Image, ImageDraw

YELLOW = (255, 190, 41, 255)
RED = (226, 55, 68, 255)
DARK_RED = (168, 28, 48, 255)
OUTLINE = (141, 21, 58, 255)
GREEN = (46, 158, 79, 255)
DARK_GREEN = (0, 83, 78, 255)
SHINE = (255, 139, 139, 255)
CHEEK = (255, 154, 162, 255)
INK = (43, 26, 18, 255)
WHITE = (255, 255, 255, 255)
SCALE = 4  # draw 4x larger, then shrink, for smooth edges

SITE = Path(__file__).resolve().parent.parent / "site"


def spike(d, cx, cy, angle, r_base, r_tip, width, curl, color, t_from=0.0):
    """A curved, pointed spike pointing outwards at `angle`; draws from t_from to the tip."""
    ca, sa = math.cos(angle), math.sin(angle)
    left, right = [], []
    steps = 24
    for i in range(steps + 1):
        t = t_from + (1 - t_from) * i / steps
        radius = r_base + (r_tip - r_base) * t
        sideways = curl * (r_tip - r_base) * t * t  # bends the tip sideways
        x = cx + ca * radius - sa * sideways
        y = cy + sa * radius + ca * sideways
        half = width * (1 - t) ** 0.85 / 2
        left.append((x - sa * half, y + ca * half))
        right.append((x + sa * half, y - ca * half))
    d.polygon(left + right[::-1], fill=color)


def draw_icon(size, maskable):
    s = size * SCALE
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if maskable:
        d.rectangle([0, 0, s, s], fill=YELLOW)
        r = 0.185 * s  # body radius; spikes stay inside the safe circle
    else:
        d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(0.18 * s), fill=YELLOW)
        r = 0.225 * s

    cx, cy = s / 2, s / 2 + 0.01 * s

    # two rings of spikes: short and dark behind, long and red in front
    count = 22
    for ring, (reach, width, color, offset) in enumerate([(0.62, 0.34, DARK_RED, 0.5), (0.9, 0.36, RED, 0.0)]):
        for i in range(count):
            a = 2 * math.pi * (i + offset) / count
            r_tip = r * (1 + reach)
            spike(d, cx, cy, a, r * 0.7, r_tip, r * width, 0.22, color)
            spike(d, cx, cy, a, r * 0.7, r_tip, r * width, 0.22, GREEN, t_from=0.62)

    # body
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=RED)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=OUTLINE, width=int(0.045 * r))

    # one bold highlight arc for a hint of roundness
    d.arc([cx - r * 0.72, cy - r * 0.72, cx + r * 0.72, cy + r * 0.72], start=205, end=250, fill=SHINE, width=int(0.09 * r))

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
