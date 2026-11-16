
/* =========================================================
   START: Variables
   ========================================================= */

// START: Token settings

let token_settings = [
    {
        token: "{{colour}}",
        options: ["red", "blue", "green", "purple", "orange", "tomato", "coral", "teal", "gold", "hotpink", "navy", "olive", "crimson", "salmon", "darkcyan", "rebeccapurple"]
    },
    {
        token: "{{list-style-type}}",
        options: ["disc", "circle", "square", "none", "decimal", "decimal-leading-zero", "lower-alpha", "upper-alpha", "lower-roman", "upper-roman"]
    },
    {
        token: "{{table-colour}}",
        options: ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark"]

    }
];




// STOP: Token settings


// Store the IDs of all available examples
let example_code = [];

// Elements whose text should be shortened in the code preview
let truncate_elements = ["li", "td", "blockquote"];

// Maximum number of characters to display
let truncate_characters = 10;

// Elements to display on a single line in the code preview
let one_line_elements = ["li", "td", "th", "h1", "h2"];


let teaching_points = [
    {
        id: "h1",
        info: "An HTML element can use the style attribute to apply CSS directly, as shown by color:red. However, this is generally considered poor practice because it mixes presentation with HTML content. A CSS style sheet is usually better because it keeps styling separate, makes it easier to maintain, and allows styles to be reused across multiple elements."    
    },

    {
        id: "h2",
        info: "CSS uses American spelling for property names, so color, background-color and text-align: center are correct. The colour values gray and grey are both valid, as are lightgray and lightgrey. Remember that CSS property names and their values follow different spelling rules."
    },

    {
        id: "h3",
        info: "Bootstrap applies:\n\n box-sizing: border-box \n\n CSS to all elements. This means the declared width includes the content, padding and border, rather than adding padding and borders to the width. It makes layouts easier to control because the overall width stays the same when padding or borders are changed. \n\nUse DevTools to switch box-sizing to content-box in this example and see how the box model works by default, with padding and borders added to the declared width."
    },
    

    {
        id: "ul",
        info: "CSS properties control how HTML elements look. The list-style-type property changes the marker displayed beside each list item. A descendant selector, such as ul li, targets <li> elements inside a <ul>."
    },
    {
        id: "table",
        info: "Bootstrap provides ready-made CSS classes to style HTML tables. Classes such as table-primary, table-success and table-dark apply contextual colours. Combining Bootstrap classes lets you style elements without writing all the CSS yourself."
    },
    {
        id: "strong",
        info: "CSS rules can change the default appearance of HTML elements. The <strong> element normally displays bold text, but the .red class sets font-weight:100, making the text lighter. The class selector has greater specificity than the strong element selector, so the text remains red and uses font-weight:100. Both elements have a font size of 60px because they match the strong selector."
    },

    {
        id: "span",
        info: "CSS specificity helps determine which style is applied when multiple CSS rules target the same element. Inline styles normally take precedence over CSS rules in a style block, unless a declaration such as !important changes the outcome."    },
    {
        id: "p",
        info: "Normally, inline CSS takes precedence over a CSS rule in a style block. The !important flag changes the priority of a declaration, allowing it to override normal declarations even when they have greater specificity. Use !important sparingly."
    },
    {
        id: "blockquote",
        info: "A CSS rule applies styles to HTML elements that match its selector. The blockquote selector matches every <blockquote> element, while #wwf matches the element with id=\"wwf\". When declarations conflict, the ID selector has greater specificity than the element selector, so the text is dark blue."
    },
    {
        id: "em",
        info: "CSS selectors identify which HTML elements to style. An ID selector starts with #, a class selector starts with ., and an element selector uses the element name. The descendant selector p em targets <em> elements inside a <p>. When CSS rules conflict, specificity determines which declaration takes priority. In this example, the ID selector has the highest specificity, so the text is red."    },
    {
        id: "button",
        info: "Bootstrap provides reusable classes for styling buttons. The classes btn and btn-primary give the button its basic appearance and primary colour. Your own .btn-primary CSS rule overrides Bootstrap's normal font-size declaration, making the button text much larger."
    }
];

/* =========================================================
   STOP: Variables
   ========================================================= */


/* =========================================================
   START: Functions
   ========================================================= */


// START: Get example IDs

function get_example_code() {

    // Reset the array
    example_code = [];

    // Find all example elements
    document.querySelectorAll(".example-code").forEach(function(element) {

        // Store each element's ID
        if (element.id) {
            example_code.push(element.id);
        }

    });

}

// STOP: Get example IDs








function build_example_navigation() {

    // Find the navigation element
    let example_navigation = document.getElementById("example_navigation");

    // Stop if the navigation element does not exist
    if (!example_navigation) {
        return;
    }

    // Get the active example from the URL
    let url_parameters = new URLSearchParams(window.location.search);
    let active_example = url_parameters.get("example");

    // Create a link for each example
    example_code.forEach(function(example_id) {

        let link = document.createElement("a");

        // Set the link URL and label
        link.href = "?example=" + encodeURIComponent(example_id);
        link.textContent = example_id;

        // START: Highlight the active example

        if (example_id === active_example) {
            link.className = "btn btn-primary btn-sm me-2 active";
            link.setAttribute("aria-current", "page");
        } else {
            link.className = "btn btn-outline-primary btn-sm me-2";
        }

        // STOP: Highlight the active example

        // Add the link to the page
        example_navigation.appendChild(link);

    });

    // START: Teaching point button

    let teaching_point_button = document.createElement("button");

    teaching_point_button.textContent = "Teaching Point";
    teaching_point_button.id = "teaching_point_button";
    teaching_point_button.className = "btn btn-warning btn-sm";

    example_navigation.appendChild(teaching_point_button);

    // STOP: Teaching point button

}










// START: Replace tokens

function replace_tokens(html) {

    // Process each token setting
    token_settings.forEach(function(setting) {

        // Skip settings without options
        if (!setting.options || setting.options.length === 0) {
            return;
        }

        // Choose a random option
        let random_index = Math.floor(
            Math.random() * setting.options.length
        );

        let selected_option = setting.options[random_index];

        // Replace every occurrence of this token
        html = html.replaceAll(setting.token, selected_option);

    });

    return html;

}

// STOP: Replace tokens


// START: Show example from URL




/* START: Show example from URL */

function show_example_from_url() {

    // Read the named URL parameter
    let params = new URLSearchParams(window.location.search);
    let example_id = params.get("example");

    // Stop if the parameter is missing or invalid
    if (!example_id || !example_code.includes(example_id)) {
        return;
    }

    // Find the matching example
    let example = document.getElementById(example_id);

    // Stop if the example does not exist
    if (!example) {
        return;
    }

    // Save the original HTML
    let original_html = example.innerHTML;
    console.log("Original HTML:", original_html);

    // Check whether this example contains a configured token
    let has_tokens = token_settings.some(function(setting) {
        return original_html.includes(setting.token);
    });

    // Replace tokens in the live example
    let replaced_html = replace_tokens(original_html);
    example.innerHTML = replaced_html;

    // Display the selected example in the left column
    example.classList.remove("d-none");

    // Choose the HTML to display in the code view
    let preview_html = has_tokens ? replaced_html : original_html;

    // Build the code preview from the selected HTML
    let preview_example = example.cloneNode(true);
    preview_example.innerHTML = preview_html;

    build_code_preview(preview_example);

}

/* STOP: Show example from URL */








function toggle_teaching_point() {

    // Find the active example ID from the URL
    let params = new URLSearchParams(window.location.search);
    let example_id = params.get("example");

    // Find the teaching point for this example
    let teaching_point = teaching_points.find(function(point) {
        return point.id === example_id;
    });

    // Find the teaching point elements
    let teaching_point_view = document.getElementById("teaching_point_view");
    let teaching_point_text = document.getElementById("teaching_point_text");
    let teaching_point_button = document.getElementById("teaching_point_button");

    // Stop if the required elements do not exist
    if (!teaching_point_view || !teaching_point_text || !teaching_point_button) {
        return;
    }

    // Check whether the teaching point is currently visible
    let is_showing_teaching_point = !teaching_point_view.classList.contains("d-none");

    // START: Toggle views

    if (is_showing_teaching_point) {

        // Hide the teaching point
        teaching_point_view.classList.add("d-none");

        // Show the active example
        document.getElementById(example_id).classList.remove("d-none");

        // Update the button label
        teaching_point_button.textContent = "Teaching Point";

    } else {

        // Stop if no teaching point is available
        if (!teaching_point) {
            teaching_point_text.textContent = "No teaching point available for this example.";
        } else {
            teaching_point_text.textContent = teaching_point.info;
        }

        // Hide the active example
        document.getElementById(example_id).classList.add("d-none");

        // Show the teaching point
        teaching_point_view.classList.remove("d-none");

        // Update the button label
        teaching_point_button.textContent = "Show Example";

    }

    // STOP: Toggle views

}














// START: Format HTML

function format_html(html) {

    // Create a temporary container to parse the HTML
    let container = document.createElement("div");
    container.innerHTML = html;

    // Store the formatted lines
    let lines = [];

    // Track the current indentation level
    let indent_level = 0;

    // HTML elements that do not have closing tags
    let void_elements = [
        "area", "base", "br", "col", "embed", "hr",
        "img", "input", "link", "meta", "param",
        "source", "track", "wbr"
    ];

    // START: Indentation

    function indentation(level) {
        return "    ".repeat(Math.max(0, level));
    }

    // STOP: Indentation


    // START: Format opening tag

    function format_opening_tag(element) {

        let tag_name = element.tagName.toLowerCase();
        let attributes = Array.from(element.attributes);

        // Start the opening tag
        let result = "<" + tag_name;

        // Keep all attributes on the same line
        attributes.forEach(function(attribute) {

            result += " " + attribute.name
                + '="' + attribute.value + '"';

        });

        // Finish the opening tag
        result += ">";

        return result;

    }

    // STOP: Format opening tag


    // START: Format node

    function format_node(node) {

        // Handle text nodes
        if (node.nodeType === Node.TEXT_NODE) {

            let text = node.textContent.trim();

            if (text) {

                // Preserve line breaks within style and other text
                text.split("\n").forEach(function(line) {

                    line = line.trim();

                    if (line) {
                        lines.push(indentation(indent_level) + line);
                    }

                });

            }

            return;
        }

        // Ignore anything that is not an HTML element
        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        let tag_name = node.tagName.toLowerCase();

        // Format the opening tag
        let opening_tag = format_opening_tag(node);

        // START: Single-line elements

        if (one_line_elements.includes(tag_name)) {

            let text = node.textContent.trim();

            lines.push(
                indentation(indent_level)
                + opening_tag
                + text
                + "</" + tag_name + ">"
            );

            return;
        }

        // STOP: Single-line elements


        // Handle elements without closing tags
        if (void_elements.includes(tag_name)) {

            lines.push(indentation(indent_level) + opening_tag);

            return;
        }

        // Output the opening tag
        lines.push(indentation(indent_level) + opening_tag);

        // Format the element's children
        indent_level++;

        node.childNodes.forEach(function(child) {
            format_node(child);
        });

        indent_level--;

        // Output the closing tag
        lines.push(
            indentation(indent_level)
            + "</" + tag_name + ">"
        );

    }

    // STOP: Format node


    // Format each top-level child
    container.childNodes.forEach(function(node) {
        format_node(node);
    });

    // Return the formatted HTML
    return lines.join("\n");

}

// STOP: Format HTML


// START: Build code preview

function build_code_preview(example) {

    // Find the code preview element
    let code_preview = document.getElementById("code_preview");

    // Stop if the preview element does not exist
    if (!code_preview) {
        return;
    }

    // Clone the example so the original remains unchanged
    let example_clone = example.cloneNode(true);

    // Remove the viewer's hidden class from the clone
    example_clone.classList.remove("d-none");


    // START: Shorten selected element text

    truncate_elements.forEach(function(element_name) {

        example_clone.querySelectorAll(element_name).forEach(function(element) {

            // Get the element's text
            let original_text = element.textContent.trim();

            // Shorten the text only when it exceeds the limit
            if (original_text.length > truncate_characters) {

                element.textContent =
                    original_text.substring(0, truncate_characters) + "...";

            }

        });

    });

    // STOP: Shorten selected element text


    // Format the final HTML, including the replaced CSS values
    let preview_html = format_html(example_clone.innerHTML.trim());

    // Display the formatted HTML as text
    code_preview.textContent = preview_html;

    // Apply Prism.js syntax highlighting
    if (typeof Prism !== "undefined") {
        Prism.highlightElement(code_preview);
    }

}

// STOP: Build code preview


/* =========================================================
   STOP: Functions
   ========================================================= */


/* =========================================================
   START: Ready block
   ========================================================= */

// Find the available examples
get_example_code();


// Build the navigation links
build_example_navigation();

// Display the example requested by the URL
show_example_from_url();

// Connect the Teaching Point button
document.getElementById("teaching_point_button")
    .addEventListener("click", toggle_teaching_point);


/* =========================================================
   STOP: Ready block
   ========================================================= */



