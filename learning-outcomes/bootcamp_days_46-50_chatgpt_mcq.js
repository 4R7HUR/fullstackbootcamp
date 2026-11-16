let learning_outcomes_46_50 = {
    "days": [
        {
            "day": "46",
            "title": "Python Essentials",
            "learning_groups": [
                {
                    "working_title": "Defining and Calling Functions",
                    "challenges": [
                        "Defining Functions in Python Refresh",
                        "Calling Functions",
                        "Calling Functions Challenge",
                        "Taking Parameters & Returning Results",
                        "Writing simple Functions in Python",
                        "Taking Parameters and Returning Results Challenge"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the ability to define and use reusable Python functions."
                    },
                    "objective": {
                        "verb": "Create",
                        "text": "Create functions that accept parameters, return results and perform defined tasks.",
                        "mcqs": [
                            {
                                "id": "D46-LG01-Q01",
                                "question": "You need a Python function that accepts the price and quantity of an item and returns the total cost. Which implementation correctly defines and calls a function that performs this task?",
                                "options": [
                                    {
                                        "text": "def calculate_total(price, quantity):\n    return price * quantity\n\ntotal = calculate_total(5, 3)",
                                        "correct": true,
                                        "feedback": "Correct. The function accepts two parameters, multiplies their values and returns the result. Calling it with 5 and 3 assigns 15 to total."
                                    },
                                    {
                                        "text": "def calculate_total(price, quantity):\n    price * quantity\n\ntotal = calculate_total(5, 3)",
                                        "correct": false,
                                        "feedback": "Incorrect. The multiplication is performed, but its result is not returned. Without a return statement, the function returns None."
                                    },
                                    {
                                        "text": "def calculate_total():\n    return price * quantity\n\ntotal = calculate_total(5, 3)",
                                        "correct": false,
                                        "feedback": "Incorrect. The function defines no parameters, so passing two arguments causes a TypeError. The names price and quantity are also not defined locally."
                                    },
                                    {
                                        "text": "def calculate_total(price, quantity):\n    return price + quantity\n\ntotal = calculate_total(5, 3)",
                                        "correct": false,
                                        "feedback": "Incorrect. The function accepts the correct parameters and returns a value, but addition calculates their sum rather than the total cost."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Managing Arguments and Variable Scope",
                    "challenges": [
                        "Splat! *args & **kwargs",
                        "Splat! *args & **kwargs Challenge",
                        "Scope - Local vs Global Variables",
                        "The global Keyword",
                        "The global Keyword Challenge",
                        "The nonlocal Keyword",
                        "The nonlocal Keyword Challenge"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore flexible function arguments and the scope of variables in Python."
                    },
                    "objective": {
                        "verb": "Distinguish",
                        "text": "Distinguish between local, global and nonlocal scope and use flexible function arguments.",
                        "mcqs": [
                            {
                                "id": "D46-LG02-Q01",
                                "question": "A function needs to accept any number of positional arguments and print each one. Which parameter allows it to collect those arguments into a tuple?",
                                "options": [
                                    {
                                        "text": "*args",
                                        "correct": true,
                                        "feedback": "Correct. *args collects additional positional arguments into a tuple, which the function can iterate over."
                                    },
                                    {
                                        "text": "**kwargs",
                                        "correct": false,
                                        "feedback": "Incorrect. **kwargs collects additional keyword arguments into a dictionary rather than collecting positional arguments into a tuple."
                                    },
                                    {
                                        "text": "global args",
                                        "correct": false,
                                        "feedback": "Incorrect. global is used to refer to a module-level variable for assignment; it does not collect function arguments."
                                    },
                                    {
                                        "text": "nonlocal args",
                                        "correct": false,
                                        "feedback": "Incorrect. nonlocal refers to a variable in an enclosing function scope. It does not collect positional arguments."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Passing Functions and Using Decorators",
                    "challenges": [
                        "Passing Functions Around",
                        "Decorators",
                        "Decorators Challenge",
                        "Writing Functions in Python - Code-along Challenge"
                    ],
                    "aim": {
                        "verb": "Investigate",
                        "text": "Investigate advanced function techniques, including passing functions and using decorators."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate how functions can be passed around and how decorators can extend function behaviour.",
                        "mcqs": [
                            {
                                "id": "D46-LG03-Q01",
                                "question": "You have a function called greet and want to pass it to another function so that it can decide when to call it. Which expression passes the function itself rather than calling it immediately?",
                                "options": [
                                    {
                                        "text": "process(greet)",
                                        "correct": true,
                                        "feedback": "Correct. Passing greet without parentheses passes the function object, allowing process to call it when appropriate."
                                    },
                                    {
                                        "text": "process(greet())",
                                        "correct": false,
                                        "feedback": "Incorrect. greet() calls the function immediately, and its return value is passed to process."
                                    },
                                    {
                                        "text": "process(\"greet\")",
                                        "correct": false,
                                        "feedback": "Incorrect. This passes a string containing the function's name, not the function object itself."
                                    },
                                    {
                                        "text": "process(return greet)",
                                        "correct": false,
                                        "feedback": "Incorrect. return is a statement used inside a function body, not an expression that can be inserted into a function call like this."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Function Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 4"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen understanding of Python functions through knowledge checking."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate understanding of Python functions through the checkpoint.",
                        "mcqs": [
                            {
                                "id": "D46-LG04-Q01",
                                "question": "A learner writes a function that calculates and returns a result. They call the function but do not store or display the returned value. What should they understand?",
                                "options": [
                                    {
                                        "text": "The function can return a value without automatically displaying it",
                                        "correct": true,
                                        "feedback": "Correct. return sends a value back to the caller. To display it, the caller could use print(), and to retain it, the caller could assign it to a variable."
                                    },
                                    {
                                        "text": "Every returned value is automatically printed to the terminal",
                                        "correct": false,
                                        "feedback": "Incorrect. A return statement does not automatically print the value. Displaying output requires an operation such as print()."
                                    },
                                    {
                                        "text": "A function cannot return a value unless it also prints it",
                                        "correct": false,
                                        "feedback": "Incorrect. Returning a value and printing a value are separate operations. A function can return data without displaying anything."
                                    },
                                    {
                                        "text": "Calling a function always stores its result in a variable named result",
                                        "correct": false,
                                        "feedback": "Incorrect. Python does not automatically create a variable named result. The caller must assign the returned value if it needs to retain it."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Creating Classes and Objects",
                    "challenges": [
                        "Defining Classes in Python",
                        "The __init__() Method",
                        "The __init__() Method Challenge",
                        "The \"self\" Keyword",
                        "The \"self\" Keyword Challenge",
                        "Creating Class Instances",
                        "Creating Class Instances Challenge",
                        "Class Properties & Attributes",
                        "Class Properties & Attributes Challenge",
                        "Functions + Classes: Methods",
                        "Functions + Classes: Methods Challenge"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce object creation and the structure of Python classes."
                    },
                    "objective": {
                        "verb": "Construct",
                        "text": "Construct Python classes with initialisation, attributes, instances and methods.",
                        "mcqs": [
                            {
                                "id": "D46-LG05-Q01",
                                "question": "You define a Python class called Student with an __init__() method that accepts name. What is the purpose of self.name = name inside that method?",
                                "options": [
                                    {
                                        "text": "It stores the supplied name as an attribute of the particular Student instance",
                                        "correct": true,
                                        "feedback": "Correct. self.name creates or assigns an instance attribute, using the name argument supplied when the object is initialised."
                                    },
                                    {
                                        "text": "It creates a new class named name",
                                        "correct": false,
                                        "feedback": "Incorrect. The statement assigns a value to an instance attribute; it does not define a class."
                                    },
                                    {
                                        "text": "It makes name a global variable available throughout the program",
                                        "correct": false,
                                        "feedback": "Incorrect. The assignment stores the value on the current instance. It does not create a global variable."
                                    },
                                    {
                                        "text": "It defines a method that automatically prints the student's name",
                                        "correct": false,
                                        "feedback": "Incorrect. The statement assigns an attribute. Printing the name would require a separate call to print() or another output operation."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Exploring Object-Oriented Programming",
                    "challenges": [
                        "Object Oriented Programming",
                        "Subclassing & Inheritance",
                        "Subclassing & Inheritance Challenge",
                        "Mixins",
                        "Class Composition",
                        "Class Composition & Mixins Challenge",
                        "Superclassing: Accessing the Parent",
                        "Superclassing: Accessing the Parent Challenge",
                        "Passing Methods Around",
                        "Passing Methods Around Challenge",
                        "Decorators in OOP"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore object-oriented programming concepts and techniques for structuring Python applications."
                    },
                    "objective": {
                        "verb": "Explain",
                        "text": "Explain inheritance, composition, mixins and parent-class access, and apply object-oriented techniques.",
                        "mcqs": [
                            {
                                "id": "D46-LG06-Q01",
                                "question": "A Car class needs to use an existing Engine object to start the car. Which design most directly demonstrates composition?",
                                "options": [
                                    {
                                        "text": "The Car class stores an Engine instance as an attribute and uses it when starting the car",
                                        "correct": true,
                                        "feedback": "Correct. Composition models a has-a relationship: a Car contains or uses an Engine object as one of its components."
                                    },
                                    {
                                        "text": "The Car class inherits from Engine because every car is a type of engine",
                                        "correct": false,
                                        "feedback": "Incorrect. Inheritance represents an is-a relationship. A car is not a type of engine, so composition is more appropriate here."
                                    },
                                    {
                                        "text": "The Car class copies all the source code from Engine into its own methods",
                                        "correct": false,
                                        "feedback": "Incorrect. Copying source code does not establish object composition and makes reuse and maintenance harder."
                                    },
                                    {
                                        "text": "The Car class imports Engine but never creates or uses an Engine object",
                                        "correct": false,
                                        "feedback": "Incorrect. Importing makes a class available, but composition requires the Car object to contain or use an Engine object."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Using Built-in Tools and Libraries",
                    "challenges": [
                        "The import Statement",
                        "The import Statement Challenge",
                        "Math",
                        "Math Challenge",
                        "datetime",
                        "Datetime Challenge",
                        "io",
                        "io Challenge",
                        "os",
                        "os.path()",
                        "random",
                        "random Challenge",
                        "Third Party Libraries",
                        "Third Party Libraries Challenge"
                    ],
                    "aim": {
                        "verb": "Investigate",
                        "text": "Investigate Python's built-in modules and third-party libraries."
                    },
                    "objective": {
                        "verb": "Apply",
                        "text": "Apply imported modules and library functions to common programming tasks.",
                        "mcqs": [
                            {
                                "id": "D46-LG07-Q01",
                                "question": "A Python program needs to calculate the square root of 81 using Python's standard library. Which approach is appropriate?",
                                "options": [
                                    {
                                        "text": "import math\nresult = math.sqrt(81)",
                                        "correct": true,
                                        "feedback": "Correct. The math module provides sqrt(), which calculates the square root. The result is assigned to result."
                                    },
                                    {
                                        "text": "import datetime\nresult = datetime.sqrt(81)",
                                        "correct": false,
                                        "feedback": "Incorrect. datetime provides tools for working with dates and times, not the standard square-root function."
                                    },
                                    {
                                        "text": "import os\nresult = os.sqrt(81)",
                                        "correct": false,
                                        "feedback": "Incorrect. The os module provides operating-system-related functionality; the square-root function is provided by math."
                                    },
                                    {
                                        "text": "import math\nresult = math.date(81)",
                                        "correct": false,
                                        "feedback": "Incorrect. The math module does not provide a date() function for this calculation. Use math.sqrt()."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "47",
            "title": "Python Essentials",
            "learning_groups": [
                {
                    "working_title": "Reading and Writing Data",
                    "challenges": [
                        "What are Input/Output Operations?",
                        "Reading Data From a User",
                        "Returning Data to a User",
                        "Reading Data From a File",
                        "Reading Data from a File Challenge"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop skills for receiving input and presenting or reading data in Python."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement basic input and output operations with user input and file reading.",
                        "mcqs": [
                            {
                                "id": "D47-LG01-Q01",
                                "question": "A Python program needs to read the contents of a text file and ensure that the file is closed when processing finishes, even if an error occurs. Which approach is most appropriate?",
                                "options": [
                                    {
                                        "text": "with open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    contents = file.read()",
                                        "correct": true,
                                        "feedback": "Correct. A with statement manages the file resource and ensures that it is closed when the block exits, including when an exception occurs."
                                    },
                                    {
                                        "text": "file = open(\"notes.txt\", \"r\")\ncontents = file.read()\nfile.close()",
                                        "correct": false,
                                        "feedback": "Incorrect. This can read and close the file during normal execution, but if an exception occurs before file.close(), the file may remain open."
                                    },
                                    {
                                        "text": "contents = input(\"notes.txt\")",
                                        "correct": false,
                                        "feedback": "Incorrect. input() reads text entered by a user; it does not open or read the contents of a file."
                                    },
                                    {
                                        "text": "with open(\"notes.txt\", \"w\") as file:\n    contents = file.read()",
                                        "correct": false,
                                        "feedback": "Incorrect. The w mode opens a file for writing and truncates existing contents. Use r mode to read the existing text."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Handling Exceptions and Runtime Errors",
                    "challenges": [
                        "Runtime Errors",
                        "Try Statements",
                        "Try Statements Challenge",
                        "Try & Except Statements",
                        "Catching Specific Errors",
                        "Catching Specific Errors Challenge",
                        "Catching Generic Errors With “as”",
                        "Catching Generic Errors With “as” Challenge",
                        "Else & Finally Statements",
                        "Else & Finally Statements Challenge"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop techniques for handling runtime errors and managing exceptions in Python."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement try and except statements to handle specific and general exceptions and use else and finally blocks appropriately.",
                        "mcqs": [
                            {
                                "id": "D47-LG02-Q01",
                                "question": "A program converts user input to an integer. If the user enters \"hello\", the conversion raises a ValueError. Which approach handles this expected error while allowing the program to provide a useful message?",
                                "options": [
                                    {
                                        "text": "try:\n    age = int(input(\"Enter your age: \"))\nexcept ValueError:\n    print(\"Please enter a whole number.\")",
                                        "correct": true,
                                        "feedback": "Correct. Converting invalid numeric text raises ValueError, and the except block handles that specific exception with a useful message."
                                    },
                                    {
                                        "text": "try:\n    age = int(input(\"Enter your age: \"))\nexcept SyntaxError:\n    print(\"Please enter a whole number.\")",
                                        "correct": false,
                                        "feedback": "Incorrect. Invalid text passed to int() raises ValueError, not SyntaxError. The handler therefore targets the wrong exception."
                                    },
                                    {
                                        "text": "try:\n    age = int(input(\"Enter your age: \"))\nelse:\n    print(\"Please enter a whole number.\")",
                                        "correct": false,
                                        "feedback": "Incorrect. An else block runs when the try block completes without an exception. It is not an exception handler for invalid input."
                                    },
                                    {
                                        "text": "try:\n    age = int(input(\"Enter your age: \"))\nfinally:\n    print(\"Please enter a whole number.\")",
                                        "correct": false,
                                        "feedback": "Incorrect. A finally block runs whether an exception occurs or not. It is intended for cleanup or actions that must always happen, not for identifying invalid input."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Python Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 6"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen understanding of Python input, output and exception handling through knowledge checking."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate knowledge of Python input, output and exception handling through the checkpoint.",
                        "mcqs": [
                            {
                                "id": "D47-LG03-Q01",
                                "question": "A Python program reads a number from the user, calculates a result and displays it. Which approach best addresses the possibility that the user enters text that cannot be converted to a number?",
                                "options": [
                                    {
                                        "text": "Convert the input inside a try block and handle ValueError if conversion fails",
                                        "correct": true,
                                        "feedback": "Correct. input() returns a string, and converting unsuitable text to a number can raise ValueError. Handling that exception lets the program respond appropriately."
                                    },
                                    {
                                        "text": "Assume input() always returns an integer",
                                        "correct": false,
                                        "feedback": "Incorrect. input() returns a string, even when the user types digits. Conversion is required, and the entered text may not represent a valid integer."
                                    },
                                    {
                                        "text": "Use a finally block to convert every input into an integer",
                                        "correct": false,
                                        "feedback": "Incorrect. finally does not perform automatic conversion or handle an exception by itself. Conversion must be explicitly attempted and errors handled appropriately."
                                    },
                                    {
                                        "text": "Use print() to convert the input string into a number",
                                        "correct": false,
                                        "feedback": "Incorrect. print() displays a value but does not convert a string into a numeric type. A conversion function such as int() or float() is needed."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Reviewing Python Essentials",
                    "challenges": [
                        "Congratulations! You've just completed Python Essentials"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen learning by reviewing the key skills developed throughout Python Essentials."
                    },
                    "objective": {
                        "verb": "Summarise",
                        "text": "Summarise the main Python concepts and techniques covered in the module.",
                        "mcqs": [
                            {
                                "id": "D47-LG04-Q01",
                                "question": "You are reviewing a Python program that uses functions, collections, file input and exception handling. Which approach best demonstrates a joined-up understanding of these concepts?",
                                "options": [
                                    {
                                        "text": "Use functions to organise reusable tasks, collections to manage data, file operations to read or write information, and exceptions to handle expected failures",
                                        "correct": true,
                                        "feedback": "Correct. These features work together: functions organise behaviour, collections hold data, file operations provide input and output, and exception handling helps manage errors."
                                    },
                                    {
                                        "text": "Use global variables for every value and avoid functions so that all code is in one place",
                                        "correct": false,
                                        "feedback": "Incorrect. Relying on global variables and avoiding functions can make code harder to reuse, understand and maintain."
                                    },
                                    {
                                        "text": "Use a list to replace every function, file operation and exception handler",
                                        "correct": false,
                                        "feedback": "Incorrect. Lists store collections of values but do not replace the separate purposes of functions, file operations or exception handling."
                                    },
                                    {
                                        "text": "Treat any program that runs without crashing as correct, without checking its output",
                                        "correct": false,
                                        "feedback": "Incorrect. A program can run without crashing and still produce incorrect results. Its behaviour and output should be checked against the intended requirements."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "48",
            "title": "Heroku for Students",
            "learning_groups": [
                {
                    "working_title": "Setting Up Heroku for Students",
                    "challenges": [
                        "Why Do I Need This?",
                        "Heroku for Students",
                        "Activating The Pack",
                        "Activating Your Eco Dynos"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce Heroku for Students and the steps needed to activate the available resources."
                    },
                    "objective": {
                        "verb": "Identify",
                        "text": "Identify the purpose of Heroku for Students and complete the account activation steps.",
                        "mcqs": [
                            {
                                "id": "D48-LG01-Q01",
                                "question": "A learner needs to deploy a web application as part of their course. What is the main purpose of setting up the relevant Heroku for Students resources?",
                                "options": [
                                    {
                                        "text": "To access the available platform resources needed to deploy and run a supported application",
                                        "correct": true,
                                        "feedback": "Correct. The setup and activation steps are intended to give the learner access to the relevant hosting resources, subject to the current programme terms."
                                    },
                                    {
                                        "text": "To replace Python and Django with a browser-based programming language",
                                        "correct": false,
                                        "feedback": "Incorrect. Heroku is a platform for deploying applications; it does not replace the application's programming language or framework."
                                    },
                                    {
                                        "text": "To make a local application automatically available online without deployment or configuration",
                                        "correct": false,
                                        "feedback": "Incorrect. Setting up an account does not automatically deploy an application. The application still needs to be configured and deployed appropriately."
                                    },
                                    {
                                        "text": "To guarantee unlimited hosting resources without any account conditions",
                                        "correct": false,
                                        "feedback": "Incorrect. Access and resource usage depend on the programme's current eligibility requirements and platform terms. Activation does not guarantee unlimited resources."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Managing Python Virtual Environments",
                    "challenges": [
                        "Introducing virtual environments",
                        "Getting hands on with venv",
                        "Managing dependencies in a virtual environment",
                        "Managing different versions of Python",
                        "Quiz",
                        "Challenge",
                        "End of module feedback"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop skills for isolating Python projects and managing their dependencies."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate how to create a virtual environment, manage dependencies and work with different Python versions.",
                        "mcqs": [
                            {
                                "id": "D48-LG02-Q01",
                                "question": "Two Python projects require different versions of the same library. Why can separate virtual environments help?",
                                "options": [
                                    {
                                        "text": "Each project can have its own installed dependencies, reducing conflicts between projects",
                                        "correct": true,
                                        "feedback": "Correct. Virtual environments isolate project-specific packages, allowing projects to use different dependency versions without relying on one shared installation."
                                    },
                                    {
                                        "text": "Creating a virtual environment automatically upgrades every project to the latest Python version",
                                        "correct": false,
                                        "feedback": "Incorrect. Creating a virtual environment does not automatically upgrade Python. The Python interpreter used to create it matters."
                                    },
                                    {
                                        "text": "A virtual environment stores every dependency in the project's HTML file",
                                        "correct": false,
                                        "feedback": "Incorrect. Python virtual environments manage an isolated Python installation context and packages; they do not store dependencies in HTML files."
                                    },
                                    {
                                        "text": "Separate virtual environments mean a project no longer needs its dependencies installed",
                                        "correct": false,
                                        "feedback": "Incorrect. Each environment still needs the packages required by its project to be installed into that environment."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "49",
            "title": "Working With Database Management Systems",
            "learning_groups": [
                {
                    "working_title": "Understanding Data and Databases",
                    "challenges": [
                        "What is data?",
                        "How is data stored?",
                        "Let's Talk about Data Quiz 1",
                        "The need for databases",
                        "Relational vs Non-Relational Data",
                        "Modeling data",
                        "Structured Query Language",
                        "Let's Talk about Data Quiz 2"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce data storage concepts, database systems and structured query language."
                    },
                    "objective": {
                        "verb": "Distinguish",
                        "text": "Distinguish between relational and non-relational data and describe the purpose of databases and SQL.",
                        "mcqs": [
                            {
                                "id": "D49-LG01-Q01",
                                "question": "A college needs to store students and the courses they enrol on. It wants structured tables and relationships between student and course records. Which approach best fits this requirement?",
                                "options": [
                                    {
                                        "text": "A relational database, with tables linked through appropriate keys",
                                        "correct": true,
                                        "feedback": "Correct. Relational databases organise structured data into tables and can represent relationships using keys. SQL can be used to query and manage that data."
                                    },
                                    {
                                        "text": "A single unstructured text file containing all information with no consistent format",
                                        "correct": false,
                                        "feedback": "Incorrect. An unstructured text file does not provide the structured tables and relationships described in the requirement."
                                    },
                                    {
                                        "text": "A CSS stylesheet containing student and course records",
                                        "correct": false,
                                        "feedback": "Incorrect. CSS controls the presentation of web content; it is not a database system for storing and relating records."
                                    },
                                    {
                                        "text": "A database in which relationships between records are impossible to represent",
                                        "correct": false,
                                        "feedback": "Incorrect. Relational databases are specifically designed to represent relationships between tables using keys and related database operations."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Exploring PostgreSQL",
                    "challenges": [
                        "What is PostgreSQL?",
                        "Installing the Chinook database",
                        "PostgreSQL from the command line"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore PostgreSQL and the tools used to access a relational database."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate how to set up the Chinook database and access PostgreSQL from the command line.",
                        "mcqs": [
                            {
                                "id": "D49-LG02-Q01",
                                "question": "You have connected to PostgreSQL using the command-line client psql and want to inspect records in the Chinook database. Which action would retrieve rows from a table named Artist?",
                                "options": [
                                    {
                                        "text": "Run SELECT * FROM Artist;",
                                        "correct": true,
                                        "feedback": "Correct. SELECT retrieves data from a table, and * requests all columns. The table name must match the database's actual naming and case rules."
                                    },
                                    {
                                        "text": "Run CREATE DATABASE Artist;",
                                        "correct": false,
                                        "feedback": "Incorrect. CREATE DATABASE creates a database rather than retrieving rows from an existing table."
                                    },
                                    {
                                        "text": "Run DELETE FROM Artist;",
                                        "correct": false,
                                        "feedback": "Incorrect. DELETE removes rows from a table when its statement is executed; it is not used to inspect records."
                                    },
                                    {
                                        "text": "Run INSTALL Artist;",
                                        "correct": false,
                                        "feedback": "Incorrect. INSTALL Artist is not a standard SQL query for retrieving table records in PostgreSQL."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Database Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 1"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen understanding of database fundamentals through knowledge checking."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate knowledge of data, databases and PostgreSQL through the checkpoint.",
                        "mcqs": [
                            {
                                "id": "D49-LG03-Q01",
                                "question": "A database checkpoint asks why a relational database uses primary keys and foreign keys. Which explanation is correct?",
                                "options": [
                                    {
                                        "text": "A primary key identifies a row in its table, while a foreign key can link a row to a related table",
                                        "correct": true,
                                        "feedback": "Correct. A primary key uniquely identifies records in its table, and a foreign key can reference a key in another table to represent a relationship."
                                    },
                                    {
                                        "text": "A primary key stores the entire database, while a foreign key creates a backup",
                                        "correct": false,
                                        "feedback": "Incorrect. Keys identify records and represent relationships; they do not store the whole database or automatically create backups."
                                    },
                                    {
                                        "text": "Primary keys and foreign keys are both used only to format the appearance of database tables",
                                        "correct": false,
                                        "feedback": "Incorrect. Keys support data identification and relationships, not the visual formatting of database tables."
                                    },
                                    {
                                        "text": "A foreign key must always contain a unique value across its table",
                                        "correct": false,
                                        "feedback": "Incorrect. A foreign key can contain repeated values because multiple records may relate to the same referenced record."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Connecting Python to PostgreSQL",
                    "challenges": [
                        "Installing the libraries & setting up",
                        "Introducing an ORM",
                        "Running basic queries",
                        "Introducing class-based models",
                        "Code-Along 1: Create and Read",
                        "Code-Along 2: Update and Delete"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop the ability to connect Python applications to a relational database."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement basic database operations from Python using libraries, an ORM and class-based models.",
                        "mcqs": [
                            {
                                "id": "D49-LG04-Q01",
                                "question": "A Python application uses an ORM with a class-based model representing products. What is a typical benefit of using the ORM to create, read, update and delete product records?",
                                "options": [
                                    {
                                        "text": "It maps Python objects and model operations to database operations, reducing the need to write SQL manually for every task",
                                        "correct": true,
                                        "feedback": "Correct. An ORM maps model classes and objects to database structures and operations. It can simplify common CRUD tasks, although SQL and database behaviour still matter."
                                    },
                                    {
                                        "text": "It removes the need for a database connection because all records are stored permanently in Python variables",
                                        "correct": false,
                                        "feedback": "Incorrect. An ORM does not eliminate the database connection. It uses database access mechanisms to persist and retrieve records."
                                    },
                                    {
                                        "text": "It automatically guarantees that every database query is secure, correct and efficient",
                                        "correct": false,
                                        "feedback": "Incorrect. ORMs can help with parameterisation and abstraction, but developers must still consider validation, query behaviour, permissions and performance."
                                    },
                                    {
                                        "text": "It converts the database into a CSS stylesheet that Python can edit",
                                        "correct": false,
                                        "feedback": "Incorrect. An ORM maps application models to database operations; CSS is used to style web content and is unrelated to this mapping."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Database Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 2",
                        "End of Module Knowledge Checkpoint"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen understanding of database integration and database operations through knowledge checking."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate knowledge of PostgreSQL and Python database operations through the knowledge checkpoints.",
                        "mcqs": [
                            {
                                "id": "D49-LG05-Q01",
                                "question": "A Python application successfully creates a database record but displays an error when trying to retrieve it. What is the most useful next step when investigating the problem?",
                                "options": [
                                    {
                                        "text": "Inspect the retrieval query or ORM operation, the model and table mapping, and any returned error",
                                        "correct": true,
                                        "feedback": "Correct. Checking the operation, model mapping and error details helps identify whether the problem lies in the query, mapping, connection or expected data."
                                    },
                                    {
                                        "text": "Delete the entire database immediately and recreate it without investigating",
                                        "correct": false,
                                        "feedback": "Incorrect. Deleting the database risks losing data and does not identify the cause. Investigate the error and the relevant operation first."
                                    },
                                    {
                                        "text": "Assume the create operation proves that every retrieval operation must work",
                                        "correct": false,
                                        "feedback": "Incorrect. Creating and retrieving records are different operations, and success with one does not prove that the other is correctly implemented."
                                    },
                                    {
                                        "text": "Change the website's colours because database queries depend on CSS styling",
                                        "correct": false,
                                        "feedback": "Incorrect. CSS affects presentation, not the database retrieval operation. The query, model mapping and database access should be investigated."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Understanding the Full-Stack Project Assessment",
                    "challenges": [
                        "Individual Full-Stack Project Assessment Guide",
                        "Things to be aware of"
                    ],
                    "aim": {
                        "verb": "Familiarise",
                        "text": "Familiarise learners with the requirements and considerations of the individual full-stack project."
                    },
                    "objective": {
                        "verb": "Identify",
                        "text": "Identify the assessment requirements and key considerations for completing the individual full-stack project.",
                        "mcqs": [
                            {
                                "id": "D49-LG06-Q01",
                                "question": "Before beginning an individual full-stack project assessment, what is the most useful first step?",
                                "options": [
                                    {
                                        "text": "Read the assessment guide, identify the requirements and plan how to demonstrate each required feature",
                                        "correct": true,
                                        "feedback": "Correct. Understanding the assessment requirements first helps you plan a solution that addresses the required functionality and evidence."
                                    },
                                    {
                                        "text": "Start coding the most complicated feature without reviewing the brief",
                                        "correct": false,
                                        "feedback": "Incorrect. Starting without understanding the requirements risks building features that do not meet the assessment criteria."
                                    },
                                    {
                                        "text": "Choose a colour scheme and treat it as the main evidence of full-stack functionality",
                                        "correct": false,
                                        "feedback": "Incorrect. Styling can contribute to the user experience, but it does not by itself demonstrate the required front-end, back-end and database functionality."
                                    },
                                    {
                                        "text": "Copy another learner's project and change its title",
                                        "correct": false,
                                        "feedback": "Incorrect. The assessment is an individual project. You need to produce your own work and demonstrate the required skills."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "50",
            "title": "Principles of Agile Development",
            "learning_groups": [
                {
                    "working_title": "Introducing Agile Development",
                    "challenges": [
                        "Introduction to Agile",
                        "What is Agile?",
                        "The Challenges of the Waterfall Approach",
                        "The Benefits of Agile",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce Agile development and explore how it differs from the Waterfall approach."
                    },
                    "objective": {
                        "verb": "Explain",
                        "text": "Explain the main characteristics and benefits of Agile and identify limitations of the Waterfall approach.",
                        "mcqs": [
                            {
                                "id": "D50-LG01-Q01",
                                "question": "A client expects requirements to change after seeing an early version of a web application. Which Agile practice can help the team respond to this situation?",
                                "options": [
                                    {
                                        "text": "Deliver working increments, gather feedback and adapt the next iteration",
                                        "correct": true,
                                        "feedback": "Correct. Agile encourages frequent delivery and feedback, allowing the team to revise priorities and improve the product as requirements evolve."
                                    },
                                    {
                                        "text": "Refuse all changes once the initial plan has been written",
                                        "correct": false,
                                        "feedback": "Incorrect. Agile recognises that requirements can change and aims to respond constructively rather than automatically reject changes."
                                    },
                                    {
                                        "text": "Complete every planned document before allowing the client to see any working software",
                                        "correct": false,
                                        "feedback": "Incorrect. Agile values working software and frequent feedback; it does not require all documentation to be completed before any software is demonstrated."
                                    },
                                    {
                                        "text": "Delay testing until the entire application has been built and released",
                                        "correct": false,
                                        "feedback": "Incorrect. Delaying all testing limits opportunities to discover problems early. Agile teams commonly seek feedback and test throughout development."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Exploring the Agile Manifesto",
                    "challenges": [
                        "Agile Values",
                        "Agile Principles",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore the values and principles that guide Agile development."
                    },
                    "objective": {
                        "verb": "Describe",
                        "text": "Describe the core values and principles of the Agile Manifesto.",
                        "mcqs": [
                            {
                                "id": "D50-LG02-Q01",
                                "question": "An Agile team has followed its original plan, but user feedback shows that a different feature would provide more value. Which Agile Manifesto value most directly supports reconsidering the plan?",
                                "options": [
                                    {
                                        "text": "Responding to change over following a plan",
                                        "correct": true,
                                        "feedback": "Correct. The Agile Manifesto values responding to change over following a plan, while still recognising that plans can be useful."
                                    },
                                    {
                                        "text": "Comprehensive documentation over working software",
                                        "correct": false,
                                        "feedback": "Incorrect. The Manifesto values working software over comprehensive documentation, although useful documentation still has a place."
                                    },
                                    {
                                        "text": "Contract negotiation over customer collaboration",
                                        "correct": false,
                                        "feedback": "Incorrect. The Manifesto values customer collaboration over contract negotiation, which supports working with users to understand changing needs."
                                    },
                                    {
                                        "text": "Following a fixed plan regardless of feedback",
                                        "correct": false,
                                        "feedback": "Incorrect. Agile does not require a team to follow a plan regardless of new information. Responding to change is one of its four stated values."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Checking Agile Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 1"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen understanding of Agile foundations through knowledge checking."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate knowledge of Agile values, principles and development approaches through the checkpoint.",
                        "mcqs": [
                            {
                                "id": "D50-LG03-Q01",
                                "question": "During a review, an Agile team discovers that a feature does not meet users' needs. What is the most appropriate response?",
                                "options": [
                                    {
                                        "text": "Use the feedback to understand the problem and adapt the product or priorities",
                                        "correct": true,
                                        "feedback": "Correct. Agile teams use feedback to learn and adapt, improving the product in response to user needs."
                                    },
                                    {
                                        "text": "Ignore the feedback because the feature was included in the original plan",
                                        "correct": false,
                                        "feedback": "Incorrect. Agile encourages teams to respond to new information rather than treating the original plan as unchangeable."
                                    },
                                    {
                                        "text": "Stop all communication with users until the project is complete",
                                        "correct": false,
                                        "feedback": "Incorrect. Ongoing customer collaboration helps teams understand needs and make informed decisions throughout development."
                                    },
                                    {
                                        "text": "Assume the feature is successful because it passed an internal code review",
                                        "correct": false,
                                        "feedback": "Incorrect. Code quality and user value are different considerations. Passing a code review does not prove that a feature meets user needs."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Understanding Iterative and Incremental Development",
                    "challenges": [
                        "Iterative and Incremental Development",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Investigate",
                        "text": "Investigate how iterative and incremental development supports Agile delivery."
                    },
                    "objective": {
                        "verb": "Explain",
                        "text": "Explain the difference between iterative and incremental development.",
                        "mcqs": [
                            {
                                "id": "D50-LG04-Q01",
                                "question": "A team first builds a basic search feature, then adds filters, and later improves the search results based on user feedback. Which explanation best distinguishes incremental and iterative development in this example?",
                                "options": [
                                    {
                                        "text": "Adding filters introduces additional functionality incrementally, while refining the search based on feedback is iterative improvement",
                                        "correct": true,
                                        "feedback": "Correct. Incremental development adds functionality in pieces, while iterative development revisits and improves an existing solution. A project can use both approaches."
                                    },
                                    {
                                        "text": "Incremental development means repeating the same task without adding features, while iterative development means never revisiting existing work",
                                        "correct": false,
                                        "feedback": "Incorrect. This reverses the concepts. Iteration involves revisiting and refining work, while increments add further pieces of functionality."
                                    },
                                    {
                                        "text": "Incremental and iterative development both require the entire product to be completed before feedback is collected",
                                        "correct": false,
                                        "feedback": "Incorrect. Both approaches can support learning and feedback during development, rather than requiring all work to finish before users see anything."
                                    },
                                    {
                                        "text": "Incremental development applies only to databases, while iterative development applies only to CSS",
                                        "correct": false,
                                        "feedback": "Incorrect. These are general development approaches that can be applied across different types of software and technologies."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Evaluating Project Constraints",
                    "challenges": [
                        "Introduction to Project Constraints",
                        "Rethinking Project Constraints with Agile - Challenge",
                        "The Agile perspective to Project's Constraints"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Agile approaches can change the way project constraints are managed."
                    },
                    "objective": {
                        "verb": "Compare",
                        "text": "Compare traditional and Agile perspectives on project constraints.",
                        "mcqs": [
                            {
                                "id": "D50-LG05-Q01",
                                "question": "A project has a fixed deadline and a limited budget, but the team discovers that some requested features will take longer than expected. Which response best reflects an Agile approach to managing the constraints?",
                                "options": [
                                    {
                                        "text": "Work with stakeholders to prioritise the most valuable features and adjust scope as needed",
                                        "correct": true,
                                        "feedback": "Correct. When time and budget are constrained, Agile teams can collaborate with stakeholders to prioritise value and negotiate which features are delivered."
                                    },
                                    {
                                        "text": "Insist that every requested feature must be delivered regardless of the deadline or budget",
                                        "correct": false,
                                        "feedback": "Incorrect. Treating every feature as fixed despite limited time and budget ignores the need to manage trade-offs."
                                    },
                                    {
                                        "text": "Stop communicating with stakeholders and decide all changes without their input",
                                        "correct": false,
                                        "feedback": "Incorrect. Collaboration helps the team make informed decisions about priorities and scope when constraints affect delivery."
                                    },
                                    {
                                        "text": "Remove all testing to guarantee that every feature is completed on time",
                                        "correct": false,
                                        "feedback": "Incorrect. Removing testing can undermine quality and increase risk. Prioritising scope is a more appropriate way to respond to fixed constraints."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Identifying Agile Roles",
                    "challenges": [
                        "Roles in Agile"
                    ],
                    "aim": {
                        "verb": "Introduce",
                        "text": "Introduce the roles and responsibilities involved in Agile development."
                    },
                    "objective": {
                        "verb": "Identify",
                        "text": "Identify key Agile roles and describe their responsibilities.",
                        "mcqs": [
                            {
                                "id": "D50-LG06-Q01",
                                "question": "In Scrum, a team needs someone to help maximise the value of the product and manage the ordering of the Product Backlog. Which role has this responsibility?",
                                "options": [
                                    {
                                        "text": "Product Owner",
                                        "correct": true,
                                        "feedback": "Correct. In Scrum, the Product Owner is accountable for maximising product value and effective Product Backlog management, including its ordering."
                                    },
                                    {
                                        "text": "Scrum Master",
                                        "correct": false,
                                        "feedback": "Incorrect. The Scrum Master is accountable for establishing Scrum and supporting its effective use, rather than owning Product Backlog ordering."
                                    },
                                    {
                                        "text": "Developer",
                                        "correct": false,
                                        "feedback": "Incorrect. Developers create the usable Increment and plan the work needed to achieve the Sprint Goal. Product Backlog management is the Product Owner's accountability."
                                    },
                                    {
                                        "text": "External end user",
                                        "correct": false,
                                        "feedback": "Incorrect. End users can provide valuable feedback, but they do not automatically hold the formal Product Owner accountability in Scrum."
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