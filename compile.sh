#!/bin/bash

if [ ! -d src ]; then
  echo "Are you sure you're running this in the correct directory?"
  exit 1
fi

mkdir -p output
rm -r output/*
cp -r environment/** output/
mkdir -p output

for file in src/*.md; do
    fbname=$(basename "$file" .md)
    echo "Compiling $fbname.md to $fbname.html"
    pandoc -f markdown -t html --template environment/basicContent.html --mathjax -o "output/$fbname.html" "$file"
done
