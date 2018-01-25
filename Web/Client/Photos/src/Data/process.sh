# command parameters
input=$1
target=$2

# config
sizes=(x150 x300 1280x1280^\> 1920x1920^\> 2560x2560^\> 3840x3840^\>)
photos_folder="Photos"

echo "remove old $photos_folder"
rm -rf "$target/$photos_folder"
mkdir "$target/$photos_folder"

echo "create size-folders"
for size in ${sizes[*]}
do
    size=${size//>}
    size=${size//^}
    mkdir -p "$target/$photos_folder/$size"
done

# iterate all files
for file in `find $input -maxdepth 1 -type f`
do
    echo "Resizing $file"
    path="$target/$photos_folder"
    name=${file##*/}
    name=${name%.*}
    #extension=${file##*.}

    for size in ${sizes[*]}
    do
        fn_size=${size//>}
        fn_size=${fn_size//^}
        convert $file -auto-orient -resize $size -quality 94 "$path/$fn_size/$name.jpg"
    done
done

echo "Create files list"
ls "$target/$photos_folder/${sizes[0]}" > "$target/$photos_folder/files.txt"
