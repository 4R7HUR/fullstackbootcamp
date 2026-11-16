
#!/usr/bin/env python3

import json
import re
from pathlib import Path
from html.parser import HTMLParser


# START: Variables

activity_directory = Path(__file__).parent
output_file = activity_directory / "resources.js"

# END: Variables


# START: HTML title parser

class TitleParser(HTMLParser):

    def __init__(self):
        super().__init__()
        self.title = ""
        self.inside_title = False
        self.title_found = False

    def handle_starttag(self, tag, attrs):
        if tag.lower() == "title" and not self.title_found:
            self.inside_title = True
            self.title_found = True

    def handle_endtag(self, tag):
        if tag.lower() == "title" and self.inside_title:
            self.inside_title = False

    def handle_data(self, data):
        if self.inside_title:
            self.title += data

# END: HTML title parser


# START: Build resources

resources = {}

for html_file in sorted(activity_directory.iterdir()):

    # Only process HTML files.
    if html_file.suffix.lower() not in (".html", ".htm"):
        continue

    # Expected filenames:
    # day-2-activity-1.html
    # day-2-activity-2a.html
    # day-2-starter-1.html
    # day-4-starter.html

    match = re.match(
        r"^day-(\d+)-(activity|starter)(?:-([a-zA-Z0-9]+))?$",
        html_file.stem,
        re.IGNORECASE
    )

    if not match:
        print(f"Skipping unexpected filename: {html_file.name}")
        continue

    day_number, item_type, item_id = match.groups()

    day_key = f"day-{day_number}"
    item_type = item_type.lower()
    item_id = item_id or "1"

    # Read the HTML file.
    try:
        html_content = html_file.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as error:
        print(f"Could not read {html_file.name}: {error}")
        continue

    # Extract the page title.
    parser = TitleParser()
    parser.feed(html_content)

    page_title = parser.title.strip()

    # Create the day group if required.
    if day_key not in resources:
        resources[day_key] = {
            "activity": {},
            "starter": {}
        }

    # Store the file and title under its ID.
    resources[day_key][item_type][item_id] = {
        "file": html_file.name,
        "title": page_title
    }

    print(f"Indexed: {html_file.name} -> {day_key}/{item_type}/{item_id}")

# END: Build resources


# START: Write JavaScript file

javascript_content = (
    "let resources = "
    + json.dumps(resources, indent=4, ensure_ascii=False)
    + ";\n"
)

output_file.write_text(javascript_content, encoding="utf-8")

total_items = sum(
    len(items)
    for day in resources.values()
    for items in day.values()
)

print()
print(f"Days indexed: {len(resources)}")
print(f"HTML files indexed: {total_items}")
print(f"JavaScript written to: {output_file}")

# END: Write JavaScript file
