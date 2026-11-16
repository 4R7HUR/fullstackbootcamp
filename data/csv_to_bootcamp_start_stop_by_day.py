#!/usr/bin/env python3

import csv
import json
import sys
from pathlib import Path


# Variables
INPUT_FILE = Path(sys.argv[1])
OUTPUT_FILE = Path("bootcamp_start_stop_by_day.js")
VARIABLE_NAME = "bootcamp_start_stop_by_day"


# Convert CSV to JavaScript
with INPUT_FILE.open(
    "r",
    newline="",
    encoding="cp1252"
) as csv_file:

    reader = csv.DictReader(csv_file)

    content = []

    for row in reader:

        # Ignore completely empty rows
        if not any(value.strip() for value in row.values()):
            continue

        content.append({
            "day": row["Day"].strip(),
            "day_title": row["DAY_TITLE"].strip(),
            "start_end_lesson": row["START_END_LESSON"].strip(),
            "start_section": row["START_SECTION"].strip(),
            "start_lesson": row["START_LESSON"].strip(),
            "end_section": row["END_SECTION"].strip(),
            "end_lesson": row["END_LESSON"].strip()
        })


# Convert to formatted JSON
json_data = json.dumps(
    content,
    indent=4,
    ensure_ascii=False
)


# Build JavaScript
javascript = (
    f"const {VARIABLE_NAME} = "
    f"{json_data};\n"
)


# Write JavaScript
with OUTPUT_FILE.open(
    "w",
    encoding="utf-8"
) as javascript_file:

    javascript_file.write(javascript)


# Summary
print()
print("Done.")
print(f"Days:   {len(content)}")
print(f"Output: {OUTPUT_FILE}")