#!/usr/bin/env bash
# Generates optimized site previews in src/assets/previews/ from raw
# recordings in src/assets/. Each source file is named SITENAME-THEME.ext
# (e.g. PE-DARK.mov, PC-LIGHT.mov) and produces dark/light variant outputs.
#
# Requires: ffmpeg + cwebp (brew install ffmpeg webp)
# Usage:    pnpm previews
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=src/assets/previews
SRC=src/assets
mkdir -p "$OUT"

# Videos: preserve original aspect ratio, 800px wide, 30fps, no audio.
# $1 = source basename without extension (e.g. PE-DARK)
# $2 = poster timestamp in seconds
encode_video() {
  local src="$SRC/$1.mov"
  if [ ! -f "$src" ]; then
    echo "  ⚠  Skipping $1 (no source at $src)"
    return
  fi
  local name
  name="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
  echo "  →  $name"
  ffmpeg -hide_banner -loglevel error -y -i "$src" -vf "scale=800:-2,fps=30" \
    -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -an "$OUT/$name.mp4"
  ffmpeg -hide_banner -loglevel error -y -i "$src" -vf "scale=800:-2,fps=30" \
    -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -an "$OUT/$name.webm"
  ffmpeg -hide_banner -loglevel error -y -ss "$2" -i "$src" -frames:v 1 -vf "scale=800:-2" \
    -f image2pipe -vcodec png - | cwebp -quiet -q 82 -o "$OUT/$name-poster.webp" -- -
}

# Static images: scale to 800px wide, convert to webp
# $1 = source basename without extension (e.g. CV-DARK)
encode_image() {
  local src="$SRC/$1.png"
  if [ ! -f "$src" ]; then
    echo "  ⚠  Skipping $1 (no source at $src)"
    return
  fi
  local name
  name="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
  echo "  →  $name"
  ffmpeg -hide_banner -loglevel error -y -i "$src" -vf "scale=800:-2" \
    -frames:v 1 -f image2pipe -vcodec png - | cwebp -quiet -q 85 -o "$OUT/$name.webp" -- -
}

echo "🎬  Generating previews..."

# PE: light (existing) + dark (new)
encode_video PE-DARK 3.7

# PC: dark (existing) + light (new)
encode_video PC-LIGHT 1.7

# Blog: light (existing) + dark (new)
encode_video BLOG-DARK 3.1

# CV: light (existing) + dark (new)
encode_image CV-DARK

# RealOrAI: light only (keep existing if source missing)
encode_image REALORAI

echo ""
echo "📁  Output:"
ls -lh "$OUT"
