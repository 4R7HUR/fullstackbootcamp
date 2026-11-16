let learning_outcomes_31_35 = {
    "days": [
        {
            "day": "31",
            "title": "Love Maths: Essentials Project",
            "learning_groups": [
                {
                    "working_title": "Setting Up the Project",
                    "challenges": [
                        "Introduction",
                        "Getting Set Up"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce the Love Maths project and its development environment."
                    },
                    "objective": {
                        "verb": "Identify",
                        "text": "Identify the project requirements and the tools needed to begin development.",
                        "mcqs": [
                            {
                                "id": "D31-LG01-Q01",
                                "question": "Before starting development on the Love Maths project, what should you do first?",
                                "options": [
                                    {
                                        "text": "Identify the project requirements and prepare the development environment",
                                        "correct": true,
                                        "feedback": "Correct. Understanding the requirements and setting up the tools provides a clear starting point."
                                    },
                                    {
                                        "text": "Write all the JavaScript before creating any HTML",
                                        "correct": false,
                                        "feedback": "Incorrect. The project requirements and development environment should be understood before implementation begins."
                                    },
                                    {
                                        "text": "Add animations to every page",
                                        "correct": false,
                                        "feedback": "Incorrect. Animations are not the first priority when setting up a project."
                                    },
                                    {
                                        "text": "Publish the unfinished project immediately",
                                        "correct": false,
                                        "feedback": "Incorrect. Development and testing should take place before publishing a finished project."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Building the HTML and CSS",
                    "challenges": [
                        "Writing some HTML - part 1",
                        "Writing some HTML - part 2",
                        "Let's get stylish"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the structure and presentation of the Love Maths interface."
                    },
                    "objective": {
                        "verb": "Construct",
                        "text": "Construct an HTML interface and apply CSS styling to improve its appearance.",
                        "mcqs": [
                            {
                                "id": "D31-LG02-Q01",
                                "question": "Which statement correctly describes the roles of HTML and CSS in the Love Maths interface?",
                                "options": [
                                    {
                                        "text": "HTML provides the structure, while CSS controls presentation",
                                        "correct": true,
                                        "feedback": "Correct. HTML defines the page elements and CSS styles their appearance and layout."
                                    },
                                    {
                                        "text": "CSS creates the mathematical calculations and HTML stores the scores",
                                        "correct": false,
                                        "feedback": "Incorrect. CSS handles presentation; JavaScript is typically responsible for calculations and updating scores."
                                    },
                                    {
                                        "text": "HTML is used only for colours and fonts",
                                        "correct": false,
                                        "feedback": "Incorrect. HTML defines the structure and meaning of page content."
                                    },
                                    {
                                        "text": "HTML and CSS are both programming languages used to generate random numbers",
                                        "correct": false,
                                        "feedback": "Incorrect. Random number generation is a JavaScript task, not a function of HTML or CSS."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Adding JavaScript Interactivity",
                    "challenges": [
                        "Adding structure",
                        "Creating Event Listeners",
                        "Generating Random Numbers"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how JavaScript adds interactive behaviour to the project."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement event listeners and random number generation to support the maths game.",
                        "mcqs": [
                            {
                                "id": "D31-LG03-Q01",
                                "question": "What does an event listener allow the Love Maths game to do?",
                                "options": [
                                    {
                                        "text": "Run a function in response to an event, such as a button click",
                                        "correct": true,
                                        "feedback": "Correct. An event listener allows JavaScript to respond when a specified event occurs."
                                    },
                                    {
                                        "text": "Automatically change the website's CSS file name",
                                        "correct": false,
                                        "feedback": "Incorrect. Event listeners respond to events; they do not automatically rename files."
                                    },
                                    {
                                        "text": "Guarantee that every random number is different",
                                        "correct": false,
                                        "feedback": "Incorrect. Random number generation does not guarantee that values will never repeat."
                                    },
                                    {
                                        "text": "Replace the need for HTML elements",
                                        "correct": false,
                                        "feedback": "Incorrect. JavaScript interactivity normally works with elements created in the HTML."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "32",
            "title": "Love Maths: Essentials Project",
            "learning_groups": [
                {
                    "working_title": "Displaying Questions and Calculating Answers",
                    "challenges": [
                        "Displaying The Addition Question",
                        "Calculating The Correct Answer"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the addition functionality of the Love Maths game."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate how to display an addition question and calculate its correct answer.",
                        "mcqs": [
                            {
                                "id": "D32-LG01-Q01",
                                "question": "A game generates the numbers 7 and 5 for an addition question. Which JavaScript expression calculates the correct answer?",
                                "options": [
                                    {
                                        "text": "7 + 5",
                                        "correct": true,
                                        "feedback": "Correct. The addition operator adds the two numbers to produce 12."
                                    },
                                    {
                                        "text": "7 - 5",
                                        "correct": false,
                                        "feedback": "Incorrect. This subtracts 5 from 7, producing 2."
                                    },
                                    {
                                        "text": "7 === 5",
                                        "correct": false,
                                        "feedback": "Incorrect. This compares the values and returns a Boolean rather than calculating their sum."
                                    },
                                    {
                                        "text": "7 / 5",
                                        "correct": false,
                                        "feedback": "Incorrect. This divides 7 by 5 instead of adding the numbers."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Answers and Updating Scores",
                    "challenges": [
                        "Checking The Answer",
                        "Updating The Scores"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen the game logic by checking answers and tracking scores."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement answer checking and score updates based on the user's response.",
                        "mcqs": [
                            {
                                "id": "D32-LG02-Q01",
                                "question": "A player enters 12, and the correct answer is 12. Which condition checks whether the answer is correct?",
                                "options": [
                                    {
                                        "text": "user_answer === correct_answer",
                                        "correct": true,
                                        "feedback": "Correct. Strict equality checks whether the two values are equal without converting their types."
                                    },
                                    {
                                        "text": "user_answer = correct_answer",
                                        "correct": false,
                                        "feedback": "Incorrect. A single equals sign assigns a value rather than checking equality."
                                    },
                                    {
                                        "text": "user_answer !== correct_answer",
                                        "correct": false,
                                        "feedback": "Incorrect. The !== operator checks whether the values are not strictly equal."
                                    },
                                    {
                                        "text": "user_answer + correct_answer",
                                        "correct": false,
                                        "feedback": "Incorrect. The + operator adds values or combines strings; it does not check whether the answers match."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "33",
            "title": "Love Maths: Essentials Project",
            "learning_groups": [
                {
                    "working_title": "Building Multiplication and Subtraction Games",
                    "challenges": [
                        "The Multiplication Game",
                        "The Subtraction Game"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the game to support additional mathematical operations."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement multiplication and subtraction functionality within the game.",
                        "mcqs": [
                            {
                                "id": "D33-LG01-Q01",
                                "question": "Which pair of JavaScript operators performs multiplication and subtraction, respectively?",
                                "options": [
                                    {
                                        "text": "* and -",
                                        "correct": true,
                                        "feedback": "Correct. The asterisk performs multiplication and the hyphen-minus performs subtraction."
                                    },
                                    {
                                        "text": "+ and /",
                                        "correct": false,
                                        "feedback": "Incorrect. These operators perform addition and division."
                                    },
                                    {
                                        "text": "/ and *",
                                        "correct": false,
                                        "feedback": "Incorrect. These operators perform division and multiplication, respectively."
                                    },
                                    {
                                        "text": "- and +",
                                        "correct": false,
                                        "feedback": "Incorrect. These operators perform subtraction and addition, not multiplication and subtraction."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Tidying and Improving the Project",
                    "challenges": [
                        "A Few Last Things..."
                    ],
                    "aim": {
                        "verb": "Enhance",
                        "text": "Enhance the project by completing outstanding improvements."
                    },
                    "objective": {
                        "verb": "Apply",
                        "text": "Apply final improvements to make the project more complete and usable.",
                        "mcqs": [
                            {
                                "id": "D33-LG02-Q01",
                                "question": "When making final improvements to a maths game, which approach is most useful?",
                                "options": [
                                    {
                                        "text": "Test the features, fix problems and improve usability",
                                        "correct": true,
                                        "feedback": "Correct. Testing and addressing problems helps make the project more reliable and easier to use."
                                    },
                                    {
                                        "text": "Remove all feedback so users cannot see their results",
                                        "correct": false,
                                        "feedback": "Incorrect. Useful feedback helps players understand whether their answers are correct."
                                    },
                                    {
                                        "text": "Rename variables randomly without checking the code",
                                        "correct": false,
                                        "feedback": "Incorrect. Unplanned renaming can introduce errors rather than improve the project."
                                    },
                                    {
                                        "text": "Add features without testing existing functionality",
                                        "correct": false,
                                        "feedback": "Incorrect. New changes should be tested to ensure existing functionality still works."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Extending the Game with Division",
                    "challenges": [
                        "Challenge Introduction",
                        "Division Game Challenge"
                    ],
                    "aim": {
                        "verb": "Encourage",
                        "text": "Encourage independent problem-solving by extending the game with division."
                    },
                    "objective": {
                        "verb": "Create",
                        "text": "Create a division game feature using the existing project as a starting point.",
                        "mcqs": [
                            {
                                "id": "D33-LG03-Q01",
                                "question": "If a division game generates 20 and 4, which expression calculates 20 divided by 4?",
                                "options": [
                                    {
                                        "text": "20 / 4",
                                        "correct": true,
                                        "feedback": "Correct. The division operator / calculates 20 divided by 4, giving 5."
                                    },
                                    {
                                        "text": "20 * 4",
                                        "correct": false,
                                        "feedback": "Incorrect. The * operator multiplies the numbers, giving 80."
                                    },
                                    {
                                        "text": "20 % 4",
                                        "correct": false,
                                        "feedback": "Incorrect. The % operator returns the remainder after division, which is 0 here."
                                    },
                                    {
                                        "text": "20 - 4",
                                        "correct": false,
                                        "feedback": "Incorrect. The - operator subtracts 4 from 20, giving 16."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Reviewing the Project",
                    "challenges": [
                        "Conclusion",
                        "Module Recap"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen learning by revisiting the main concepts used in the project."
                    },
                    "objective": {
                        "verb": "Summarise",
                        "text": "Summarise the main development techniques used to build the Love Maths project.",
                        "mcqs": [
                            {
                                "id": "D33-LG04-Q01",
                                "question": "Which combination best describes how the Love Maths game is built?",
                                "options": [
                                    {
                                        "text": "HTML for structure, CSS for presentation and JavaScript for behaviour",
                                        "correct": true,
                                        "feedback": "Correct. These technologies work together to create the page structure, styling and interactive game logic."
                                    },
                                    {
                                        "text": "HTML for calculations, CSS for random numbers and JavaScript for page colours",
                                        "correct": false,
                                        "feedback": "Incorrect. These roles are mixed up: JavaScript handles calculations and random number generation."
                                    },
                                    {
                                        "text": "CSS for all structure and behaviour, without HTML",
                                        "correct": false,
                                        "feedback": "Incorrect. HTML provides the document structure, while CSS controls presentation."
                                    },
                                    {
                                        "text": "JavaScript for page structure only, without HTML or CSS",
                                        "correct": false,
                                        "feedback": "Incorrect. JavaScript adds behaviour, while HTML and CSS provide structure and presentation."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "34",
            "title": "AI Pair Programming 2",
            "learning_groups": [
                {
                    "working_title": "Planning a Project and Writing User Stories",
                    "challenges": [
                        "What we're going to build",
                        "Challenge: Creating our user stories"
                    ],
                    "aim": {
                        "verb": "Establish",
                        "text": "Establish a clear project direction through planning and user stories."
                    },
                    "objective": {
                        "verb": "Create",
                        "text": "Create user stories that describe the intended features and requirements of the project.",
                        "mcqs": [
                            {
                                "id": "D34-LG01-Q01",
                                "question": "What is the main purpose of a user story when planning a website feature?",
                                "options": [
                                    {
                                        "text": "To describe a feature from the perspective of the person who will use it",
                                        "correct": true,
                                        "feedback": "Correct. A user story captures a user's need and helps clarify the value of a feature."
                                    },
                                    {
                                        "text": "To list every CSS property used on the website",
                                        "correct": false,
                                        "feedback": "Incorrect. A user story describes a need or feature, not a detailed list of styling rules."
                                    },
                                    {
                                        "text": "To replace all project testing",
                                        "correct": false,
                                        "feedback": "Incorrect. User stories help guide development but do not remove the need for testing."
                                    },
                                    {
                                        "text": "To record only the names of the developers",
                                        "correct": false,
                                        "feedback": "Incorrect. User stories focus on user needs and the value of the intended feature."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Building the Site Structure",
                    "challenges": [
                        "Challenge: Building the site structure"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the initial structure of the project website."
                    },
                    "objective": {
                        "verb": "Construct",
                        "text": "Construct the site structure in line with the project's requirements.",
                        "mcqs": [
                            {
                                "id": "D34-LG02-Q01",
                                "question": "When constructing a website's initial structure, which HTML element is normally used to contain the main page content?",
                                "options": [
                                    {
                                        "text": "<main>",
                                        "correct": true,
                                        "feedback": "Correct. The main element identifies the dominant content of the document."
                                    },
                                    {
                                        "text": "<title>",
                                        "correct": false,
                                        "feedback": "Incorrect. The title element supplies the document title, normally shown in the browser tab."
                                    },
                                    {
                                        "text": "<meta>",
                                        "correct": false,
                                        "feedback": "Incorrect. Meta elements provide document metadata rather than containing the main page content."
                                    },
                                    {
                                        "text": "<link>",
                                        "correct": false,
                                        "feedback": "Incorrect. The link element commonly connects external resources, such as a CSS stylesheet."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Using AI to Develop JavaScript",
                    "challenges": [
                        "Using Copilot with JavaScript",
                        "Using the @workspace tag"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how AI coding assistance can support JavaScript development."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate how to use Copilot and the @workspace tag to support development tasks.",
                        "mcqs": [
                            {
                                "id": "D34-LG03-Q01",
                                "question": "Why might you use the @workspace tag when asking an AI coding assistant for help?",
                                "options": [
                                    {
                                        "text": "To help the assistant use relevant context from the project workspace",
                                        "correct": true,
                                        "feedback": "Correct. Workspace context can help the assistant understand relevant files and project structure."
                                    },
                                    {
                                        "text": "To guarantee that the generated code is correct",
                                        "correct": false,
                                        "feedback": "Incorrect. AI-generated code still needs to be reviewed and tested."
                                    },
                                    {
                                        "text": "To publish the project automatically to a live server",
                                        "correct": false,
                                        "feedback": "Incorrect. A workspace context tag is not itself a deployment command."
                                    },
                                    {
                                        "text": "To convert every JavaScript file into HTML",
                                        "correct": false,
                                        "feedback": "Incorrect. The tag helps provide context; it does not convert files between languages."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Improving and Debugging the Project",
                    "challenges": [
                        "Challenge: Add typing accuracy feedback",
                        "Debugging with Copilot",
                        "Challenge: Going beyond the basics"
                    ],
                    "aim": {
                        "verb": "Enhance",
                        "text": "Enhance the project through feedback features, debugging and further development."
                    },
                    "objective": {
                        "verb": "Debug",
                        "text": "Debug JavaScript with AI assistance and implement improvements to the project.",
                        "mcqs": [
                            {
                                "id": "D34-LG04-Q01",
                                "question": "An AI coding assistant suggests a fix for a JavaScript error. What should you do next?",
                                "options": [
                                    {
                                        "text": "Review the suggestion, apply it carefully and test the result",
                                        "correct": true,
                                        "feedback": "Correct. AI suggestions should be checked and tested to confirm they solve the problem without introducing new errors."
                                    },
                                    {
                                        "text": "Accept it without reading the code",
                                        "correct": false,
                                        "feedback": "Incorrect. AI-generated changes may be unsuitable or incorrect, so you should review them."
                                    },
                                    {
                                        "text": "Delete the entire project and start again",
                                        "correct": false,
                                        "feedback": "Incorrect. Debugging normally involves investigating and fixing the specific problem."
                                    },
                                    {
                                        "text": "Assume the error is fixed because the assistant said so",
                                        "correct": false,
                                        "feedback": "Incorrect. You need to run and test the code to verify the fix."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "35",
            "title": "AI Pair Programming 2",
            "learning_groups": [
                {
                    "working_title": "Developing with AI Pair Programming",
                    "challenges": [
                        "Challenge: Building the site structure",
                        "Using Copilot with JavaScript",
                        "Using the @workspace tag",
                        "Challenge: Add typing accuracy feedback",
                        "Debugging with Copilot",
                        "Challenge: Going beyond the basics"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen project development skills by using AI assistance to build, debug and improve a website."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement and improve website features using JavaScript, Copilot and debugging techniques.",
                        "mcqs": [
                            {
                                "id": "D35-LG01-Q01",
                                "question": "You ask an AI assistant to add typing accuracy feedback to a website. Which result would best meet that requirement?",
                                "options": [
                                    {
                                        "text": "The website calculates typing accuracy and displays useful feedback to the user",
                                        "correct": true,
                                        "feedback": "Correct. The feature should calculate accuracy and communicate the result to the user."
                                    },
                                    {
                                        "text": "The website changes its background colour without measuring accuracy",
                                        "correct": false,
                                        "feedback": "Incorrect. A colour change alone does not meet the requirement to provide typing accuracy feedback."
                                    },
                                    {
                                        "text": "The website removes the text the user has typed",
                                        "correct": false,
                                        "feedback": "Incorrect. Removing the user's text does not calculate or communicate typing accuracy."
                                    },
                                    {
                                        "text": "The website displays the same accuracy score regardless of the user's input",
                                        "correct": false,
                                        "feedback": "Incorrect. Useful accuracy feedback should reflect the user's actual performance."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Reviewing the Development Process",
                    "challenges": [
                        "Challenge: In retrospect…",
                        "Quiz",
                        "Concluding thoughts"
                    ],
                    "aim": {
                        "verb": "Encourage",
                        "text": "Encourage reflection on the project and the effective use of AI pair programming."
                    },
                    "objective": {
                        "verb": "Evaluate",
                        "text": "Evaluate the development process and identify lessons from the AI pair programming activities.",
                        "mcqs": [
                            {
                                "id": "D35-LG02-Q01",
                                "question": "When evaluating an AI-assisted development project, which practice provides the strongest evidence that the finished feature works?",
                                "options": [
                                    {
                                        "text": "Testing the feature against its requirements and reviewing the results",
                                        "correct": true,
                                        "feedback": "Correct. Comparing tested behaviour with the requirements helps establish whether the feature works as intended."
                                    },
                                    {
                                        "text": "Counting how many prompts were sent to the AI assistant",
                                        "correct": false,
                                        "feedback": "Incorrect. The number of prompts does not establish whether the feature meets its requirements."
                                    },
                                    {
                                        "text": "Assuming the first generated solution is the best",
                                        "correct": false,
                                        "feedback": "Incorrect. Generated solutions should be reviewed and tested rather than accepted automatically."
                                    },
                                    {
                                        "text": "Measuring success only by how quickly the code was written",
                                        "correct": false,
                                        "feedback": "Incorrect. Speed alone does not demonstrate correctness, usability or maintainability."
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