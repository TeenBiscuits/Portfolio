#!/usr/bin/env bash
# Regenerates the optimized site previews in src/assets/previews/
# from the raw recordings in src/assets/ (PE.mov, PC.mov, BLOG.mov, CV.png, REALORAI.png).
#
# Requires: ffmpeg + cwebp (brew install ffmpeg webp)
# Usage:    pnpm previews
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=src/assets/previews
mkdir -p "$OUT"

# Videos: original aspect ratio preserved (no cropping), 800px wide, 30fps,
# no audio → mp4 (H.264, universal) + webm (VP9) + webp poster
# $1 = source name (PE|PC|BLOG), $2 = poster timestamp in seconds (~40% through the clip)
encode_video() {
  local src="src/assets/$1.mov"
  local name
  name="$(echo "$1" | tr '[:upper:]' '[:lower:]')"
  ffmpeg -hide_banner -loglevel error -y -i "$src" -vf "scale=800:-2,fps=30" \
    -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -an "$OUT/$name.mp4"
  ffmpeg -hide_banner -loglevel error -y -i "$src" -vf "scale=800:-2,fps=30" \
    -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -an "$OUT/$name.webm"
  ffmpeg -hide_banner -loglevel error -y -ss "$2" -i "$src" -frames:v 1 -vf "scale=800:-2" \
    -f image2pipe -vcodec png - | cwebp -quiet -q 82 -o "$OUT/$name-poster.webp" -- -
}

encode_video PE 3.7
encode_video PC 1.7
encode_video BLOG 3.1

# Static images → optimized webp, original aspect ratio preserved
ffmpeg -hide_banner -loglevel error -y -i src/assets/CV.png -vf "scale=800:-2" \
  -frames:v 1 -f image2pipe -vcodec png - | cwebp -quiet -q 85 -o "$OUT/cv.webp" -- -
ffmpeg -hide_banner -loglevel error -y -i src/assets/REALORAI.png -vf "scale=800:-2" \
  -frames:v 1 -f image2pipe -vcodec png - | cwebp -quiet -q 85 -o "$OUT/realorai.webp" -- -

ls -lh "$OUT"
