#!/bin/bash

rm output/*
cp -r environment/**/* output/
mkdir -p output

for file in src/*.md; do
    fbname=$(basename "$file" .md)
    pandoc -f markdown -t html --template environment/basicContent.html --mathjax -o "output/$fbname.html" "$file"
done