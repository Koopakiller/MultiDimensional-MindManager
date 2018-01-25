sizes=(150x150 300x300 1280x1280 1920x1920 2560x2560 3840x3840)
for size in ${sizes[*]}
do
    mkdir -p "./$1/Photos/$size"
done

for file in `find ./$1/Photos -maxdepth 1 -type f`
do
    path=${file%/*}
    name=${file##*/}
    name=${name%.*}
    extension=${file##*.}
    echo "Resizing $file"
    for size in ${sizes[*]}
    do
        convert $file -resize $size^\> -quality 94 "$path/$size/$name.$extension"
    done
done
