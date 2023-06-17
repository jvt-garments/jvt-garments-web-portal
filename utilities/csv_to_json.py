import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Read the CSV file
    with open(csv_file_path, 'r') as csv_file:
        # Assuming the first row of the CSV file contains the column headers
        csv_reader = csv.DictReader(csv_file)
        # Convert CSV rows into a Python list of dictionaries
        data = list(csv_reader)

    # Write the data to a JSON file
    with open(json_file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

# Specify the paths of the CSV and JSON files
csv_file_path = 'output.csv'
json_file_path = 'output.json'

# Convert CSV to JSON
csv_to_json(csv_file_path, json_file_path)
