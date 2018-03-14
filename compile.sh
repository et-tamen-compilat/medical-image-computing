#!/bin/bash

if [ ! -d src ]; then
  echo "Are you sure you're running this in the correct directory?"
  exit 1
fi

mkdir -p output
rm -r output/*
mkdir -p output/content-images
cp -r environment/** output/
cp -r images/** output/content-images/
mkdir -p output

for file in src/content/*.md; do
    fbname=$(basename "$file" .md)
    echo "Compiling $fbname.md to $fbname.html"
    pandoc -f markdown -t html --toc --toc-depth 2 --template templates/content.html -o "output/$fbname.html" --mathjax "$file"  
done

for file in src/personal/*.md; do
    fbname=$(basename "$file" .md)
    echo "Compiling $fbname.md to $fbname.html"
    pandoc -f markdown -t html --template templates/personal.html --mathjax -o "output/$fbname.html" "$file"  
done
