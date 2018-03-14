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

function compile {
    for file in src/$1/*.md; do
        fbname=$(basename "$file" .md)
        echo "Compiling $fbname.md to $fbname.html"
        pandoc -f markdown+raw_html+link_attributes+fenced_divs -t html --toc --toc-depth 2 --template templates/$1.html -o "output/$fbname.html" --mathjax "$file"  
    done
}

compile "content" "content"
compile "personal" "personal"
