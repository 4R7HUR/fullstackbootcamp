
let learning_outcomes_6_10 = {
  "days": [
    {
      "day": "6",
      "title": "CSS Essentials",
      "learning_groups": [
        {
          "working_title": "CSS foundations and syntax",
          "challenges": [
            "CSS Basics",
            "CSS Targeting an Individual",
            "CSS Targeting a Group",
            "CSS Additional Targeted Styling",
            "CSS Introduction",
            "CSS Syntax",
            "Playground - CSS Syntax",
            "Coders Coffeehouse - CSS Syntax",
            "The CSS Syntax Challenge"
          ],
          "aim": {
            "verb": "Introduce",
            "text": "Introduce CSS as a means of styling HTML content."
          },
          "objective": {
            "verb": "Construct",
            "text": "Construct valid CSS rules using selectors, properties and values.",
            "mcqs": [
              {
                "id": "D06-LG01-Q01",
                "question": "Which statement is a valid CSS rule?",
                "options": [
                  {
                    "text": "p { color: blue; }",
                    "correct": true,
                    "feedback": "Correct. The selector is followed by a declaration block containing a property and value."
                  },
                  {
                    "text": "p = color: blue;",
                    "correct": false,
                    "feedback": "Incorrect. CSS rules use braces around declarations, not an equals sign."
                  },
                  {
                    "text": "p (color: blue)",
                    "correct": false,
                    "feedback": "Incorrect. CSS declarations are enclosed in curly braces."
                  },
                  {
                    "text": "color: blue { p; }",
                    "correct": false,
                    "feedback": "Incorrect. The selector comes before the declaration block."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Type and class selectors",
          "challenges": [
            "CSS Selectors",
            "CSS Type selectors",
            "Playground - Type Selectors",
            "Coders Coffeehouse - Type Selectors",
            "CSS Type Selectors Challenge",
            "CSS Type Selectors Challenge two",
            "Class Selectors",
            "Playground - Class Selectors",
            "Coders Coffeehouse - Class Selectors",
            "Class Selector Challenge",
            "Class Selector Challenge Two"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop skills in selecting HTML elements for targeted styling."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply type and class selectors to style individual elements and groups of elements.",
            "mcqs": [
              {
                "id": "D06-LG02-Q01",
                "question": "Which selector targets every element with class=\"highlight\"?",
                "options": [
                  {
                    "text": ".highlight",
                    "correct": true,
                    "feedback": "Correct. A class selector begins with a full stop."
                  },
                  {
                    "text": "#highlight",
                    "correct": false,
                    "feedback": "Incorrect. The hash symbol targets an ID."
                  },
                  {
                    "text": "highlight",
                    "correct": false,
                    "feedback": "Incorrect. Without a prefix, this targets elements named highlight."
                  },
                  {
                    "text": "*highlight",
                    "correct": false,
                    "feedback": "Incorrect. The asterisk is the universal selector and does not target this class."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "ID and attribute selectors",
          "challenges": [
            "CSS ID Selector",
            "Playground - ID Selector",
            "Coders Coffeehouse - ID selector",
            "ID Selector Challenge",
            "CSS Attribute Selectors",
            "Playground - Attribute Selectors",
            "Coders Coffeehouse - Attribute Selectors",
            "Attribute Selectors Challenge"
          ],
          "aim": {
            "verb": "Explore",
            "text": "Explore selector methods for targeting elements by ID and attribute."
          },
          "objective": {
            "verb": "Distinguish",
            "text": "Distinguish between ID and attribute selectors and use them in CSS rules.",
            "mcqs": [
              {
                "id": "D06-LG03-Q01",
                "question": "Which CSS selector targets the element whose id is \"main-title\"?",
                "options": [
                  {
                    "text": "#main-title",
                    "correct": true,
                    "feedback": "Correct. An ID selector begins with a hash symbol."
                  },
                  {
                    "text": ".main-title",
                    "correct": false,
                    "feedback": "Incorrect. A full stop selects a class."
                  },
                  {
                    "text": "main-title",
                    "correct": false,
                    "feedback": "Incorrect. Without a prefix, this targets an element type named main-title."
                  },
                  {
                    "text": "[class=\"main-title\"]",
                    "correct": false,
                    "feedback": "Incorrect. This targets an element with that class attribute value, not the ID."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Pseudo-classes and relationship selectors",
          "challenges": [
            "Pseudo-Class Selectors",
            "Playground - Pseudo-class",
            "Coders Coffeehouse - Pseudo-classes",
            "Pseudo-classes Challenge",
            "CSS DOM Selectors",
            "CSS Child Selector",
            "Playground - Child Selector",
            "Coders Coffeehouse - Child Selectors",
            "Child Selector Challenge",
            "CSS Descendant Selector",
            "Playground - Descendant Selector",
            "Runnable Example - Descendant Selector",
            "Descendant Selector Challenge",
            "CSS Sibling Selector",
            "Playground - Sibling Selector",
            "Runnable Example - Sibling Selector",
            "Sibling Selector Challenge"
          ],
          "aim": {
            "verb": "Investigate",
            "text": "Investigate how pseudo-classes and relationships between elements support more precise styling."
          },
          "objective": {
            "verb": "Implement",
            "text": "Implement pseudo-class, child, descendant and sibling selectors in CSS.",
            "mcqs": [
              {
                "id": "D06-LG04-Q01",
                "question": "Which selector applies a style when a user points to a link with a mouse?",
                "options": [
                  {
                    "text": "a:hover",
                    "correct": true,
                    "feedback": "Correct. The :hover pseudo-class matches an element while it is hovered over."
                  },
                  {
                    "text": "a > hover",
                    "correct": false,
                    "feedback": "Incorrect. The greater-than symbol selects a direct child."
                  },
                  {
                    "text": "a:hovered",
                    "correct": false,
                    "feedback": "Incorrect. :hover is the standard pseudo-class name."
                  },
                  {
                    "text": "a::hover",
                    "correct": false,
                    "feedback": "Incorrect. :hover uses one colon, not the pseudo-element double colon."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "day": "7",
      "title": "CSS Essentials",
      "learning_groups": [
        {
          "working_title": "CSS placement and linking methods",
          "challenges": [
            "Inline, Embedded and External CSS",
            "Inline CSS",
            "Playground - Inline CSS",
            "Coders Coffeehouse - Inline CSS",
            "Inline CSS Challenge",
            "Embedded CSS",
            "Playground - Embedded CSS",
            "Runnable Example - Embedded CSS",
            "Embedded CSS Challenge",
            "External CSS",
            "Why External CSS?",
            "Coders Coffeehouse - External CSS",
            "External CSS and Precedence Challenge"
          ],
          "aim": {
            "verb": "Explore",
            "text": "Explore different methods of applying CSS to HTML documents."
          },
          "objective": {
            "verb": "Compare",
            "text": "Compare inline, embedded and external CSS and identify when each method is applied.",
            "mcqs": [
              {
                "id": "D07-LG01-Q01",
                "question": "Which method applies CSS directly to an HTML element using its style attribute?",
                "options": [
                  {
                    "text": "Inline CSS",
                    "correct": true,
                    "feedback": "Correct. Inline CSS is written in the style attribute of an HTML element."
                  },
                  {
                    "text": "External CSS",
                    "correct": false,
                    "feedback": "Incorrect. External CSS is stored in a separate stylesheet file."
                  },
                  {
                    "text": "Embedded CSS",
                    "correct": false,
                    "feedback": "Incorrect. Embedded CSS is normally written inside a style element in the HTML document."
                  },
                  {
                    "text": "Imported HTML",
                    "correct": false,
                    "feedback": "Incorrect. Imported HTML is not the name of this CSS placement method."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Cascade, specificity and inheritance",
          "challenges": [
            "CSS Precedence - Which CSS Wins?",
            "CSS Source Order",
            "Playground - Source Order",
            "CSS Source Order Challenge",
            "CSS Specificity",
            "Playground - CSS Specificity",
            "CSS Specificity Runnable Example",
            "CSS Specificity Challenge",
            "CSS Inheritance",
            "Playground - CSS Inheritance",
            "Runnable Example - CSS Inheritance",
            "CSS Inheritance Challenge",
            "General CSS Rules Challenge",
            "Comments",
            "Knowledge Checkpoint 2"
          ],
          "aim": {
            "verb": "Strengthen",
            "text": "Strengthen understanding of how CSS rules are resolved and inherited."
          },
          "objective": {
            "verb": "Explain",
            "text": "Explain how source order, specificity and inheritance affect the styling applied to elements.",
            "mcqs": [
              {
                "id": "D07-LG02-Q01",
                "question": "When two CSS rules have the same specificity and both apply, what can determine which declaration wins?",
                "options": [
                  {
                    "text": "The order of the rules in the stylesheet",
                    "correct": true,
                    "feedback": "Correct. When other cascade factors are equal, the later declaration wins."
                  },
                  {
                    "text": "The length of the property name",
                    "correct": false,
                    "feedback": "Incorrect. Property-name length does not determine CSS precedence."
                  },
                  {
                    "text": "The number of words in the HTML element",
                    "correct": false,
                    "feedback": "Incorrect. The number of words in an element does not determine which CSS rule wins."
                  },
                  {
                    "text": "The filename's length",
                    "correct": false,
                    "feedback": "Incorrect. Filename length does not determine CSS precedence."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Fixed and relative measurement units",
          "challenges": [
            "Units of measurement",
            "Pixels",
            "Playground - Pixels",
            "Coders Coffeehouse - Pixels",
            "Pixels Challenge",
            "em and rem",
            "Playground - em and rem",
            "Coders Coffeehouse - em and rem",
            "Em Challenge",
            "Rem Challenge"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop skills in choosing suitable fixed and relative CSS measurement units."
          },
          "objective": {
            "verb": "Distinguish",
            "text": "Distinguish between px, em and rem units and apply them to CSS properties.",
            "mcqs": [
              {
                "id": "D07-LG03-Q01",
                "question": "In CSS, what is the usual reference for 1rem?",
                "options": [
                  {
                    "text": "The root element's font size",
                    "correct": true,
                    "feedback": "Correct. rem units are relative to the font size of the root HTML element."
                  },
                  {
                    "text": "The width of the browser window",
                    "correct": false,
                    "feedback": "Incorrect. Viewport width is commonly measured with vw, not rem."
                  },
                  {
                    "text": "The height of the parent element",
                    "correct": false,
                    "feedback": "Incorrect. rem is based on the root element's font size."
                  },
                  {
                    "text": "The number of characters in the element",
                    "correct": false,
                    "feedback": "Incorrect. Character count does not determine the size of a rem unit."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Percentage and viewport units",
          "challenges": [
            "Percentage",
            "Playground - Percentage",
            "Coders Coffeehouse - percentage",
            "Units of Measurement - Percentages Challenge",
            "vw",
            "Playground - vw",
            "Runnable Example - vw",
            "Units of Measurement - vw Challenge",
            "vh",
            "Playground - vh",
            "Coders Coffeehouse - vh",
            "Units of Measurement - vh Challenge"
          ],
          "aim": {
            "verb": "Explore",
            "text": "Explore relative CSS units that adapt to their containing element or viewport."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply percentage, vw and vh units to size elements relative to their container or viewport.",
            "mcqs": [
              {
                "id": "D07-LG04-Q01",
                "question": "What does 50vw represent in CSS?",
                "options": [
                  {
                    "text": "50% of the viewport width",
                    "correct": true,
                    "feedback": "Correct. One vw unit represents 1% of the viewport width."
                  },
                  {
                    "text": "50% of the parent element's font size",
                    "correct": false,
                    "feedback": "Incorrect. vw is based on viewport width, not font size."
                  },
                  {
                    "text": "50 pixels",
                    "correct": false,
                    "feedback": "Incorrect. The px unit represents CSS pixels."
                  },
                  {
                    "text": "50% of the viewport height",
                    "correct": false,
                    "feedback": "Incorrect. Viewport height is represented by vh."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "day": "8",
      "title": "CSS Essentials",
      "learning_groups": [
        {
          "working_title": "Font families, colour and sizing",
          "challenges": [
            "font-family",
            "Playground - font-family",
            "Coders Coffeehouse font-family",
            "font-family challenge",
            "Defining color in CSS",
            "color",
            "Playground - color",
            "Coders Coffeehouse font color",
            "color challenge",
            "font-size",
            "Playground - font-size",
            "Coders Coffeehouse font-size",
            "font-size challenge",
            "font-weight",
            "Playground - font-weight",
            "Coders Coffeehouse font-weight",
            "font-weight challenge"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop skills in styling text through font choices, colour and size."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply font-family, color, font-size and font-weight properties to style text.",
            "mcqs": [
              {
                "id": "D08-LG01-Q01",
                "question": "Which CSS property changes the size of text?",
                "options": [
                  {
                    "text": "font-size",
                    "correct": true,
                    "feedback": "Correct. The font-size property controls the size of text."
                  },
                  {
                    "text": "font-weight",
                    "correct": false,
                    "feedback": "Incorrect. font-weight controls the thickness or weight of text."
                  },
                  {
                    "text": "font-family",
                    "correct": false,
                    "feedback": "Incorrect. font-family specifies the typeface."
                  },
                  {
                    "text": "text-decoration",
                    "correct": false,
                    "feedback": "Incorrect. text-decoration controls decorative lines on text."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Text alignment and styling",
          "challenges": [
            "text-align",
            "Playground - text-align",
            "Coders Coffeehouse text-align",
            "text-align challenge",
            "vertical-align",
            "Playground - vertical align",
            "Runnable Example vertical-align",
            "vertical-align challenge",
            "text-transform",
            "Playground - text-transform",
            "Coders Coffeehouse text-transform",
            "text-transform challenge",
            "text-decoration",
            "Playground - text-decoration",
            "Coders Coffeehouse text-decoration",
            "text-decoration challenge",
            "font-style",
            "Playground - font-style",
            "Coders Coffeehouse font-style",
            "font-style challenge",
            "Knowledge Checkpoint 4"
          ],
          "aim": {
            "verb": "Enhance",
            "text": "Enhance the presentation of text using CSS alignment and styling properties."
          },
          "objective": {
            "verb": "Implement",
            "text": "Implement text-align, vertical-align, text-transform, text-decoration and font-style properties.",
            "mcqs": [
              {
                "id": "D08-LG02-Q01",
                "question": "Which CSS property can centre-align text horizontally within its block?",
                "options": [
                  {
                    "text": "text-align: center;",
                    "correct": true,
                    "feedback": "Correct. text-align: center centres inline content such as text within the block."
                  },
                  {
                    "text": "vertical-align: center;",
                    "correct": false,
                    "feedback": "Incorrect. vertical-align does not centre-align a block's text horizontally."
                  },
                  {
                    "text": "font-style: center;",
                    "correct": false,
                    "feedback": "Incorrect. font-style controls italic or oblique text styling."
                  },
                  {
                    "text": "text-transform: center;",
                    "correct": false,
                    "feedback": "Incorrect. text-transform changes text casing, not alignment."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Browser developer tools",
          "challenges": [
            "Chrome Developer Tools: Introduction",
            "Chrome Developer Tools: Device Views",
            "Chrome Developer Tools: CSS"
          ],
          "aim": {
            "verb": "Introduce",
            "text": "Introduce browser developer tools for inspecting and troubleshooting web pages."
          },
          "objective": {
            "verb": "Demonstrate",
            "text": "Demonstrate how to inspect CSS and view a page using browser device emulation.",
            "mcqs": [
              {
                "id": "D08-LG03-Q01",
                "question": "Which browser developer tools feature lets you inspect an element's applied CSS?",
                "options": [
                  {
                    "text": "The Elements panel",
                    "correct": true,
                    "feedback": "Correct. The Elements panel lets you inspect HTML and view or test applied CSS rules."
                  },
                  {
                    "text": "The address bar",
                    "correct": false,
                    "feedback": "Incorrect. The address bar is used to enter or view a web address."
                  },
                  {
                    "text": "The bookmarks menu",
                    "correct": false,
                    "feedback": "Incorrect. Bookmarks save links to pages; they do not inspect CSS."
                  },
                  {
                    "text": "The browser's download list",
                    "correct": false,
                    "feedback": "Incorrect. The download list shows downloaded files."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "day": "9",
      "title": "CSS Essentials",
      "learning_groups": [
        {
          "working_title": "The CSS box model",
          "challenges": [
            "The Box Model Introduction part 1",
            "The Box Model Introduction part 2",
            "Content",
            "Playground - content",
            "Coders Coffeehouse content",
            "Padding",
            "Playground - padding",
            "Coders Coffeehouse padding",
            "padding challenge",
            "Border",
            "Playground - border",
            "Coders Coffeehouse border",
            "border challenge",
            "Margin",
            "Playground - margin",
            "Coders Coffeehouse margin",
            "margin challenge"
          ],
          "aim": {
            "verb": "Establish",
            "text": "Establish an understanding of how the CSS box model controls element dimensions and spacing."
          },
          "objective": {
            "verb": "Explain",
            "text": "Explain the roles of content, padding, border and margin and apply them to style element spacing.",
            "mcqs": [
              {
                "id": "D09-LG01-Q01",
                "question": "In the CSS box model, what is padding?",
                "options": [
                  {
                    "text": "The space between the content and the border",
                    "correct": true,
                    "feedback": "Correct. Padding creates space inside the border, around the content."
                  },
                  {
                    "text": "The space outside the border",
                    "correct": false,
                    "feedback": "Incorrect. Margin creates space outside the border."
                  },
                  {
                    "text": "The visible outline around an element",
                    "correct": false,
                    "feedback": "Incorrect. The border is the edge surrounding the padding and content."
                  },
                  {
                    "text": "The text size inside an element",
                    "correct": false,
                    "feedback": "Incorrect. Text size is controlled by properties such as font-size."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Background colours and images",
          "challenges": [
            "Backgrounds in CSS",
            "Background Color",
            "Playground - background-color",
            "Coders Coffeehouse background-color",
            "background-color challenge",
            "background-image",
            "Playground - background-image",
            "Coders Coffeehouse background-image",
            "background-image challenge",
            "background-repeat",
            "Playground - background-repeat",
            "Coders Coffeehouse background-repeat",
            "background-repeat challenge"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop skills in using CSS backgrounds to enhance page presentation."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply background-color, background-image and background-repeat properties to web page elements.",
            "mcqs": [
              {
                "id": "D09-LG02-Q01",
                "question": "Which CSS property sets an element's background colour?",
                "options": [
                  {
                    "text": "background-color",
                    "correct": true,
                    "feedback": "Correct. background-color specifies the background colour of an element."
                  },
                  {
                    "text": "font-color",
                    "correct": false,
                    "feedback": "Incorrect. CSS uses color for text colour; font-color is not a standard CSS property."
                  },
                  {
                    "text": "text-background",
                    "correct": false,
                    "feedback": "Incorrect. text-background is not a standard CSS property."
                  },
                  {
                    "text": "background-font",
                    "correct": false,
                    "feedback": "Incorrect. background-font is not a standard CSS property."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Background sizing and positioning",
          "challenges": [
            "background-size",
            "Playground - background-size",
            "Coders Coffeehouse background-size",
            "background-size challenge",
            "background-position",
            "Playground - background-position",
            "Coders Coffeehouse background-position",
            "background-position challenge"
          ],
          "aim": {
            "verb": "Explore",
            "text": "Explore how CSS controls the size and position of background images."
          },
          "objective": {
            "verb": "Adjust",
            "text": "Adjust background-size and background-position to control how background images appear.",
            "mcqs": [
              {
                "id": "D09-LG03-Q01",
                "question": "Which value of background-size scales a background image to cover the entire element, potentially cropping part of the image?",
                "options": [
                  {
                    "text": "cover",
                    "correct": true,
                    "feedback": "Correct. cover scales the image to cover the element while preserving its aspect ratio, potentially cropping it."
                  },
                  {
                    "text": "repeat",
                    "correct": false,
                    "feedback": "Incorrect. repeat controls whether a background image tiles."
                  },
                  {
                    "text": "center",
                    "correct": false,
                    "feedback": "Incorrect. center is commonly used with background-position, not background-size."
                  },
                  {
                    "text": "fixed",
                    "correct": false,
                    "feedback": "Incorrect. fixed is associated with background-attachment, not background-size."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Background attachment and shorthand",
          "challenges": [
            "background-attachment",
            "Playground - background-attachment",
            "Coders Coffeehouse background-attachment",
            "background-attachment challenge",
            "shorthand background property",
            "Playground - background",
            "Coders Coffeehouse background shorthand",
            "background shorthand challenge"
          ],
          "aim": {
            "verb": "Strengthen",
            "text": "Strengthen skills in controlling backgrounds and combining background settings."
          },
          "objective": {
            "verb": "Implement",
            "text": "Implement background-attachment and the shorthand background property in CSS.",
            "mcqs": [
              {
                "id": "D09-LG04-Q01",
                "question": "What is the purpose of the CSS background shorthand property?",
                "options": [
                  {
                    "text": "To set several background-related properties in one declaration",
                    "correct": true,
                    "feedback": "Correct. The background shorthand can combine settings such as colour, image, repeat, position and size."
                  },
                  {
                    "text": "To set only the text colour",
                    "correct": false,
                    "feedback": "Incorrect. The color property sets text colour."
                  },
                  {
                    "text": "To create a new HTML element",
                    "correct": false,
                    "feedback": "Incorrect. CSS styles elements; it does not create HTML elements."
                  },
                  {
                    "text": "To change an element's HTML attributes",
                    "correct": false,
                    "feedback": "Incorrect. CSS declarations style elements rather than changing HTML attributes."
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "day": "10",
      "title": "CSS Essentials",
      "learning_groups": [
        {
          "working_title": "Display and visibility",
          "challenges": [
            "Block-Level Elements",
            "Playground - block-level",
            "Coders Coffeehouse block-level",
            "Block-Level Challenge",
            "Inline Elements",
            "Playground - inline",
            "Runnable Example - inline",
            "inline challenge",
            "Inline-Block Elements",
            "Playground - inline-block",
            "Coders Coffeehouse inline-block",
            "inline-block challenge",
            "Visibility",
            "Playground - visibility",
            "Runnable Example visibility",
            "Visibility Challenge",
            "Knowledge Checkpoint 5"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop understanding of how display and visibility properties affect page layout."
          },
          "objective": {
            "verb": "Distinguish",
            "text": "Distinguish between block, inline and inline-block behaviour and apply display and visibility properties.",
            "mcqs": [
              {
                "id": "D10-LG01-Q01",
                "question": "Which statement best describes display: none?",
                "options": [
                  {
                    "text": "The element is not displayed and takes up no space in the layout",
                    "correct": true,
                    "feedback": "Correct. display: none removes the element from the layout."
                  },
                  {
                    "text": "The element becomes invisible but keeps its layout space",
                    "correct": false,
                    "feedback": "Incorrect. That describes visibility: hidden."
                  },
                  {
                    "text": "The element is always displayed as an inline element",
                    "correct": false,
                    "feedback": "Incorrect. display: none prevents the element from being displayed."
                  },
                  {
                    "text": "The element moves to the top of the page",
                    "correct": false,
                    "feedback": "Incorrect. display: none does not reposition the element."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Static and relative positioning",
          "challenges": [
            "Static positioning",
            "Playground - static",
            "Static Runnable Example",
            "Relative Positioning",
            "Playground - relative positioning",
            "Coders Coffeehouse relative positioning",
            "Relative Positioning Challenge"
          ],
          "aim": {
            "verb": "Explore",
            "text": "Explore how static and relative positioning determine where elements appear."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply static and relative positioning to control element placement.",
            "mcqs": [
              {
                "id": "D10-LG02-Q01",
                "question": "What happens when position: relative is applied to an element?",
                "options": [
                  {
                    "text": "The element remains in normal flow and can be offset from its normal position",
                    "correct": true,
                    "feedback": "Correct. Relative positioning keeps the element's original space in the layout while allowing visual offsets."
                  },
                  {
                    "text": "The element is always removed from normal flow",
                    "correct": false,
                    "feedback": "Incorrect. Relative positioning preserves the element's space in normal flow."
                  },
                  {
                    "text": "The element is fixed to the browser viewport",
                    "correct": false,
                    "feedback": "Incorrect. That is the usual behaviour of position: fixed."
                  },
                  {
                    "text": "The element is hidden from the page",
                    "correct": false,
                    "feedback": "Incorrect. Positioning does not itself hide an element."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Absolute and fixed positioning",
          "challenges": [
            "Absolute positioning",
            "Playground - absolute",
            "Absolute Runnable Example",
            "Absolute challenge",
            "Fixed Positioning",
            "Playground - fixed positioning",
            "Coders Coffeehouse fixed positioning",
            "Fixed Positioning Challenge"
          ],
          "aim": {
            "verb": "Develop",
            "text": "Develop skills in positioning elements independently of normal document flow."
          },
          "objective": {
            "verb": "Implement",
            "text": "Implement absolute and fixed positioning to place elements within a page.",
            "mcqs": [
              {
                "id": "D10-LG03-Q01",
                "question": "What is a common effect of position: fixed on an element?",
                "options": [
                  {
                    "text": "It is positioned relative to the viewport and generally stays in place when the page scrolls.",
                    "correct": true,
                    "feedback": "Correct. Fixed-positioned elements are anchored relative to the viewport in the usual case."
                  },
                  {
                    "text": "It always reserves its original space in normal document flow.",
                    "correct": false,
                    "feedback": "Incorrect. Fixed-positioned elements are removed from normal document flow."
                  },
                  {
                    "text": "It moves only when its nearest paragraph scrolls.",
                    "correct": false,
                    "feedback": "Incorrect. Fixed positioning is generally relative to the viewport, not a paragraph."
                  },
                  {
                    "text": "It automatically appears behind every other element.",
                    "correct": false,
                    "feedback": "Incorrect. Stacking depends on stacking contexts and z-index, not fixed positioning alone."
                  }
                ]
              }
            ]
          }
        },
        {
          "working_title": "Stacking and z-index",
          "challenges": [
            "Z-index",
            "Playground - z-index",
            "Coders Coffeehouse z-index",
            "z-index Challenge"
          ],
          "aim": {
            "verb": "Investigate",
            "text": "Investigate how CSS controls the stacking order of positioned elements."
          },
          "objective": {
            "verb": "Apply",
            "text": "Apply z-index to control which positioned elements appear in front of others.",
            "mcqs": [
              {
                "id": "D10-LG04-Q01",
                "question": "What does z-index help control?",
                "options": [
                  {
                    "text": "The stacking order of elements that participate in a stacking context",
                    "correct": true,
                    "feedback": "Correct. z-index influences which eligible elements appear in front of or behind others."
                  },
                  {
                    "text": "The font size of an element",
                    "correct": false,
                    "feedback": "Incorrect. font-size controls text size."
                  },
                  {
                    "text": "The horizontal alignment of text",
                    "correct": false,
                    "feedback": "Incorrect. text-align controls horizontal text alignment."
                  },
                  {
                    "text": "The amount of space inside an element's border",
                    "correct": false,
                    "feedback": "Incorrect. padding controls the space inside the border."
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};
