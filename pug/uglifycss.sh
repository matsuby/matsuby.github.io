#!/bin/bash

for css in `find . -name '*.css' | grep -v .min.css`
do
 uglifycss --cute-comments $css > ${css%.*}.min.css
done
