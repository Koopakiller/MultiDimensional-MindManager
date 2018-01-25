#!/bin/bash

function process {
    echo "Processing $1"
    ls $1 > "$1/../files.txt"
}

if [ $# -eq 0 ]
then
    for dir in `find . -type d`
    do
        if [[ $dir =~ ^.*Photos$ ]]; then
            process $dir
        fi
    done
else
    for dir in "$@"
    do
        process "./$dir/Photos"
    done
fi