#!/bin/bash

# =========================================================
# START: Variables
# =========================================================

# Maximum number of lines to display per file
# Set to 0 to display every line
max_lines=500

# Name of this script (excluded from output)
script_name="show-files.sh"

# =========================================================
# STOP: Variables
# =========================================================


# =========================================================
# START: Collect output
# =========================================================

output=$(
    for file in *; do

        # Skip anything that is not a regular file
        [ -f "$file" ] || continue

        # Skip this script itself
        [ "$file" = "$script_name" ] && continue

        # Skip files that are not text
        file --mime-type "$file" | grep -q 'text/' || continue

        # Count the total number of lines
        total_lines=$(wc -l < "$file")

        # Display the file heading
        printf '\n'
        printf '%s\n' '============================================================'
        printf ' FILE: %s\n' "$file"
        printf '%s\n' '============================================================'

        # START: Display file contents

        if [ "$max_lines" -eq 0 ]; then

            # Display every line
            nl -ba "$file"

        else

            # Display only the specified number of lines
            nl -ba "$file" | head -n "$max_lines"

            # START: Report truncation

            if [ "$total_lines" -gt "$max_lines" ]; then

                omitted_lines=$((total_lines - max_lines))

                printf '\n'
                printf '%s\n' '*** FILE TRUNCATED ***'
                printf 'File: %s\n' "$file"
                printf 'Total lines: %s\n' "$total_lines"
                printf 'Lines displayed: %s\n' "$max_lines"
                printf 'Lines omitted: %s\n' "$omitted_lines"
                printf '%s\n' '************************'
            fi

            # STOP: Report truncation

        fi

        # STOP: Display file contents

    done
)

# =========================================================
# STOP: Collect output
# =========================================================


# =========================================================
# START: Display and copy output
# =========================================================

# Display the collected output in the terminal
printf '%s\n' "$output"

# Copy the output to the clipboard
printf '%s' "$output" | xclip -selection clipboard

echo
echo "Output copied to clipboard. Paste it into ChatGPT."

# =========================================================
# STOP: Display and copy output
# =========================================================
