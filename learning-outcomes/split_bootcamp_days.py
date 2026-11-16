
from pathlib import Path
import re

# ==================================================
# Variables
# ==================================================

source_dir = Path(".")
block_size = 5


# ==================================================
# Functions
# ==================================================

def find_closing_bracket(text, start):
    """Find the matching bracket, ignoring strings and comments."""

    pairs = {"[": "]", "{": "}", "(": ")"}
    stack = [pairs[text[start]]]

    quote = None
    line_comment = False
    block_comment = False
    i = start + 1

    while i < len(text):
        char = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""

        if line_comment:
            if char == "\n":
                line_comment = False

        elif block_comment:
            if char == "*" and nxt == "/":
                block_comment = False
                i += 1

        elif quote:
            if char == "\\":
                i += 1
            elif char == quote:
                quote = None

        elif char in ("'", '"', "`"):
            quote = char

        elif char == "/" and nxt == "/":
            line_comment = True
            i += 1

        elif char == "/" and nxt == "*":
            block_comment = True
            i += 1

        elif char in pairs:
            stack.append(pairs[char])

        elif char in ("]", "}", ")"):
            if not stack or stack.pop() != char:
                raise ValueError(
                    f"Mismatched brackets at character {i}."
                )

            if not stack:
                return i

        i += 1

    raise ValueError("Matching closing bracket not found.")


def skip_separators_and_comments(text, position, end):
    """Skip whitespace, commas and JavaScript comments."""

    i = position

    while i < end:

        if text[i].isspace() or text[i] == ",":
            i += 1

        elif text.startswith("//", i):
            newline = text.find("\n", i)

            if newline == -1 or newline >= end:
                return end

            i = newline + 1

        elif text.startswith("/*", i):
            comment_end = text.find("*/", i + 2)

            if comment_end == -1 or comment_end >= end:
                raise ValueError(
                    f"Unclosed or incomplete block comment "
                    f"at character {i}."
                )

            i = comment_end + 2

        else:
            break

    return i


def split_source(source_path):
    """Split one ten-day JavaScript file into five-day files."""

    print(f"\nReading: {source_path.name}")

    source = source_path.read_text(encoding="utf-8")

    # --------------------------------------------------
    # Find the root variable and declared day range.
    # --------------------------------------------------

    root_match = re.search(
        r"\blet\s+learning_outcomes_(\d+)_(\d+)\s*=",
        source
    )

    if not root_match:
        raise ValueError(
            "Could not find the learning_outcomes variable."
        )

    declared_start = int(root_match.group(1))
    declared_end = int(root_match.group(2))

    if declared_end - declared_start + 1 != 10:
        raise ValueError(
            f"Expected a ten-day file, but found "
            f"{declared_start}-{declared_end}."
        )

    # --------------------------------------------------
    # Find the days array.
    # --------------------------------------------------

    days_match = re.search(
        r"""["']days["']\s*:\s*\[""",
        source
    )

    if not days_match:
        raise ValueError('Could not find the "days" array.')

    array_open = source.index("[", days_match.start())
    array_close = find_closing_bracket(source, array_open)

    # --------------------------------------------------
    # Extract complete day objects.
    # --------------------------------------------------

    days = []
    i = array_open + 1

    while i < array_close:

        # Skip whitespace, commas and comments between days.
        i = skip_separators_and_comments(
            source,
            i,
            array_close
        )

        if i >= array_close:
            break

        if source[i] != "{":
            raise ValueError(
                f"Unexpected content at character {i}: "
                f"{source[i:i + 60]!r}"
            )

        day_end = find_closing_bracket(source, i)
        day_text = source[i:day_end + 1]

        # Identify the day number.
        day_match = re.search(
            r"""["']day["']\s*:\s*["'](\d+)["']""",
            day_text
        )

        if not day_match:
            raise ValueError(
                f"Could not identify a day number near "
                f"character {i}."
            )

        day_number = int(day_match.group(1))
        days.append((day_number, day_text))

        i = day_end + 1

    # --------------------------------------------------
    # Validate the extracted day numbers.
    # --------------------------------------------------

    expected_days = list(
        range(declared_start, declared_end + 1)
    )

    actual_days = [number for number, _ in days]

    if actual_days != expected_days:
        raise ValueError(
            f"Expected days {declared_start}-{declared_end}, "
            f"but extracted {actual_days}."
        )

    # --------------------------------------------------
    # Create the five-day output files.
    # --------------------------------------------------

    for start in range(0, len(days), block_size):

        group = days[start:start + block_size]

        first = group[0][0]
        last = group[-1][0]

        variable_name = f"learning_outcomes_{first}_{last}"

        # Preserve the original file around the days array,
        # replacing only the root variable and array contents.
        output = (
            source[:root_match.start()]
            + f"let {variable_name} ="
            + source[root_match.end():array_open + 1]
            + "\n    "
            + ",\n    ".join(
                day_text for _, day_text in group
            )
            + "\n  "
            + source[array_close:]
        )

        # Output filename.
        filename = (
            f"bootcamp_days_{first:02d}-{last:02d}_chatgpt.js"
        )

        output_path = source_dir / filename

        # Overwrite existing output files.
        output_path.write_text(output, encoding="utf-8")

        print(f"  Created/overwritten: {filename}")
        print(f"  Variable: {variable_name}")


# ==================================================
# Ready block
# ==================================================

def main():

    # Find original ten-day files only.
    pattern = re.compile(
        r"bootcamp_days_(\d{2})-(\d{2})_chatgpt\.js"
    )

    source_files = []

    for path in source_dir.iterdir():

        match = pattern.fullmatch(path.name)

        if match:
            first = int(match.group(1))
            last = int(match.group(2))

            if last - first == 9:
                source_files.append(path)

    source_files.sort(
        key=lambda path: int(
            pattern.fullmatch(path.name).group(1)
        )
    )

    if not source_files:
        print("No original ten-day source files found.")
        return

    # Process each original file.
    for source_path in source_files:
        split_source(source_path)

    print("\nFinished processing all source files.")


if __name__ == "__main__":
    main()
