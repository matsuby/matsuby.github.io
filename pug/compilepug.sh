#!/bin/bash

for pug in `find . -name '*.pug'`
do
 pug --pretty $pug
done
