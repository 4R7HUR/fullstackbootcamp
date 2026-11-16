#!/usr/bin/env python3

import csv
import json
import sys
from pathlib import Path


# Variables
INPUT_FILE = Path(sys.argv[1])
OUTPUT_FILE = Path("bootcamp_content.js")
VARIABLE_NAME = "bootcamp_content"


def csv_to_js(input_file, output_file):
    """Convert the flat CSV structure into a nested JavaScript object."""

    sections = []

    with input_file.open(
        "r",
        newline="",
        encoding="cp1252"
    ) as csv_file:

        reader = csv.DictReader(csv_file)

        for row in reader:

            # Ignore completely empty rows
            if not any(value.strip() for value in row.values()):
                continue

            section_title = row["SECTION_TITLE"].strip()
            lesson_title = row["LESSON_TITLE"].strip()
            challenge_title = row["CHALLENGE_TITLE"].strip()

            # Find or create the section
            section = next(
                (
                    item
                    for item in sections
                    if item["title"] == section_title
                ),
                None
            )

            if section is None:
                section = {
                    "number": len(sections) + 1,
                    "title": section_title,
                    "lessons": []
                }

                sections.append(section)

                print(
                    f"Section {section['number']}: "
                    f"{section_title}"
                )

            # Find or create the lesson
            lesson = next(
                (
                    item
                    for item in section["lessons"]
                    if item["title"] == lesson_title
                ),
                None
            )

            if lesson is None:
                lesson = {
                    "number": len(section["lessons"]) + 1,
                    "title": lesson_title,
                    "challenges": []
                }

                section["lessons"].append(lesson)

                print(
                    f"  Lesson {lesson['number']}: "
                    f"{lesson_title}"
                )

            # Add the challenge
            if challenge_title:
                lesson["challenges"].append(challenge_title)

    # Build the complete data structure
    data = {
        "sections": sections
    }

    # Convert the structure to formatted JSON
    json_data = json.dumps(
        data,
        indent=4,
        ensure_ascii=False
    )

    # Build the JavaScript file
    javascript = (
        f"const {VARIABLE_NAME} = "
        f"{json_data};\n"
    )

    # Write JavaScript
    with output_file.open(
        "w",
        encoding="utf-8"
    ) as javascript_file:

        javascript_file.write(javascript)

    # Summary
    lesson_count = sum(
        len(section["lessons"])
        for section in sections
    )

    challenge_count = sum(
        len(lesson["challenges"])
        for section in sections
        for lesson in section["lessons"]
    )

    print()
    print("Done.")
    print(f"Sections:   {len(sections)}")
    print(f"Lessons:    {lesson_count}")
    print(f"Challenges: {challenge_count}")
    print(f"Output:     {output_file}")


if __name__ == "__main__":

    if len(sys.argv) != 2:
        print("Usage:")
        print(
            "python3 csv_to_json.py "
            "'input.csv'"
        )
        sys.exit(1)

    csv_to_js(INPUT_FILE, OUTPUT_FILE)