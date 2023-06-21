#!/bin/bash

# Directory path
directory="/mnt/c/Users/Y/Downloads/X"

# CSV file name
csv_file="output.csv"

# Create the CSV file and add the header
echo "filename,code,price,category" > "$csv_file"

# Iterate over directories
for dir in "$directory"/*/; do
    # Check if the item is a directory
    if [ -d "$dir" ]; then

        # Iterate over the files in the directory
        for file in "$dir"/*; do
            # Check if the item is a file
            if [ -f "$file" ]; then
                # Extract filename, size, and date modified
                filename=$(basename "$file")
                code=""
                price="12.99"
            category=$(basename "$(dirname "$file")")   
                # Append the data to the CSV file
                echo "$filename,$code,$price,$category" >> "$csv_file"
            fi
        done

        # Extract directory name
        dir_name=$(basename "$dir")
        
        # Print directory name
        echo "$dir_name"
    fi
done

echo "CSV file generated: $csv_file"

