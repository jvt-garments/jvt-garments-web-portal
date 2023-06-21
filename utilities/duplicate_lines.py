def find_duplicate_lines(filename):
    lines_seen = set()
    duplicate_lines = []

    with open(filename, 'r') as file:
        for line in file:
            if line in lines_seen:
                duplicate_lines.append(line.strip())
            else:
                lines_seen.add(line)

    return duplicate_lines

# Usage example
filename = 'output_images.txt'  # Replace with your file name or path
duplicates = find_duplicate_lines(filename)

if duplicates:
    print("Duplicate lines found:")
    for line in duplicates:
        print(line)
else:
    print("No duplicate lines found.")

