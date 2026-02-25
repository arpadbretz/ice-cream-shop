#!/bin/bash
urls=(
  "https://images.unsplash.com/photo-1557142046-c704a28073fc"
  "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
  "https://images.unsplash.com/photo-1570197781417-0a5f8b2d41a3"
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
  "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5"
  "https://images.unsplash.com/photo-1563805042-7684c8e9e533"
  "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662"
  "https://images.unsplash.com/photo-1563805042-7684c8e9e533"
)
for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$status $url"
done
