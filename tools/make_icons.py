"""Draws the app icons into site/. Run from anywhere: python tools/make_icons.py

Needs Pillow. A cartoon rambutan with a happy face on a yellow background.
No text, so no fonts are needed. The "any" icons have rounded corners; the
maskable icon is full-bleed with the fruit kept inside the central safe area
so Android can crop it to any shape.
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


def line(d, p0, p1, width, color):
    """A straight line with round ends."""
    d.line([p0, p1], fill=color, width=int(width))
    r = width / 2
    for x, y in (p0, p1):
        d.ellipse([x - r, y - r, x + r, y + r], fill=color)


def leaf(d, base, tip, width, color):
    """A pointed leaf shape from base to tip."""
    dx, dy = tip[0] - base[0], tip[1] - base[1]
    length = math.hypot(dx, dy)
    nx, ny = -dy / length, dx / length
    upper, lower = [], []
    for i in range(25):
        t = i / 24
        off = width * math.sin(math.pi * t) * (1 - 0.35 * t)
        x, y = base[0] + dx * t, base[1] + dy * t
        upper.append((x + nx * off, y + ny * off))
        lower.append((x - nx * off, y - ny * off))
    d.polygon(upper + lower[::-1], fill=color)


def draw_icon(size, maskable):
    s = size * SCALE
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    if maskable:
        d.rectangle([0, 0, s, s], fill=YELLOW)
        r = 0.215 * s  # body radius; spikes and leaf stay inside the safe circle
    else:
        d.rounded_rectangle([0, 0, s - 1, s - 1], radius=int(0.18 * s), fill=YELLOW)
        r = 0.255 * s

    cx, cy = s / 2, s / 2 + 0.035 * s

    # hairs: red like the fruit, with green tips, behind the body
    count = 36
    for i in range(count):
        a = 2 * math.pi * i / count
        reach = (0.36 if i % 2 else 0.28) * r  # alternate long and short hairs
        ca, sa = math.cos(a), math.sin(a)
        base = (cx + ca * r * 0.8, cy + sa * r * 0.8)
        mid = (cx + ca * (r + reach * 0.6), cy + sa * (r + reach * 0.6))
        tip = (cx + ca * (r + reach), cy + sa * (r + reach))
        line(d, base, mid, 0.15 * r, DARK_RED if i % 2 else RED)
        line(d, mid, tip, 0.15 * r, GREEN)

    # body with outline
    ring = 0.035 * r
    d.ellipse([cx - r - ring, cy - r - ring, cx + r + ring, cy + r + ring], fill=OUTLINE)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=RED)

    # shine
    d.arc([cx - r * 0.78, cy - r * 0.78, cx + r * 0.78, cy + r * 0.78], start=200, end=245, fill=SHINE, width=int(0.07 * r))

    # little stem and leaf on top
    line(d, (cx, cy - r * 0.95), (cx + 0.03 * r, cy - r * 1.3), 0.11 * r, DARK_GREEN)
    leaf(d, (cx + 0.03 * r, cy - r * 1.24), (cx + 0.55 * r, cy - r * 1.5), 0.17 * r, GREEN)

    # face
    for sx in (-1, 1):
        ex, ey = cx + sx * 0.33 * r, cy - 0.1 * r
        d.ellipse([ex - 0.17 * r, ey - 0.21 * r, ex + 0.17 * r, ey + 0.21 * r], fill=WHITE)
        px, py = ex + sx * 0.02 * r, ey + 0.03 * r
        d.ellipse([px - 0.1 * r, py - 0.12 * r, px + 0.1 * r, py + 0.12 * r], fill=INK)
        d.ellipse([px - 0.06 * r, py - 0.1 * r, px, py - 0.02 * r], fill=WHITE)
        cheek_x = cx + sx * 0.52 * r
        d.ellipse([cheek_x - 0.13 * r, cy + 0.2 * r, cheek_x + 0.13 * r, cy + 0.36 * r], fill=CHEEK)
    d.arc([cx - 0.28 * r, cy + 0.02 * r, cx + 0.28 * r, cy + 0.5 * r], start=20, end=160, fill=INK, width=int(0.08 * r))

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
