let learning_outcomes_56_60 = {
    "days": [
        {
            "day": "56",
            "title": "Developing with Django",
            "learning_groups": [
                {
                    "working_title": "Planning and Creating a New App",
                    "challenges": [
                        "Challenge: Plan your new app",
                        "Challenge: Create the About app",
                        "Evaluate your app against user stories",
                        "Challenge: Deploy the project"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop a new Django app from user stories through to deployment."
                    },
                    "objective": {
                        "verb": "Create",
                        "text": "Create and deploy an About app and evaluate its features against the planned user stories.",
                        "mcqs": [
                            {
                                "id": "D56-LG01-Q01",
                                "question": "You have deployed a new Django About app. How can you check whether it meets the requirements agreed for the feature?",
                                "options": [
                                    {
                                        "text": "Compare the deployed app's behaviour with the acceptance criteria and user stories, recording any unmet requirements.",
                                        "correct": true,
                                        "feedback": "Correct. Comparing the implemented feature with the planned user stories helps establish whether the requirements have been met."
                                    },
                                    {
                                        "text": "Check only that the app's Python files exist, without opening the deployed website.",
                                        "correct": false,
                                        "feedback": "Incorrect. The presence of code does not prove that the deployed feature behaves as the user stories require."
                                    },
                                    {
                                        "text": "Assume the app meets every requirement because the deployment command completed.",
                                        "correct": false,
                                        "feedback": "Incorrect. Successful deployment does not guarantee that all requirements have been implemented correctly."
                                    },
                                    {
                                        "text": "Rewrite the user stories after deployment so that they describe whatever the app currently does.",
                                        "correct": false,
                                        "feedback": "Incorrect. Evaluation should compare the implementation against the intended requirements rather than changing them simply to make the implementation appear complete."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Implementing Authentication",
                    "challenges": [
                        "Introduction to authentication",
                        "Django AllAuth",
                        "Restricting access",
                        "Custom templates",
                        "What just happened?",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how authentication identifies users and controls access to application features."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement authentication with Django AllAuth, restrict access where appropriate, and customise authentication templates.",
                        "mcqs": [
                            {
                                "id": "D56-LG02-Q01",
                                "question": "A blog allows registered users to access a private page, while visitors can view public posts. Which implementation best supports this requirement?",
                                "options": [
                                    {
                                        "text": "Configure Django AllAuth for authentication, protect the private view or route with suitable access controls, and customise the relevant authentication templates.",
                                        "correct": true,
                                        "feedback": "Correct. Authentication identifies users, access controls restrict protected functionality, and templates can customise the user-facing sign-in experience."
                                    },
                                    {
                                        "text": "Hide the private page's link using CSS and assume that visitors can no longer access its URL.",
                                        "correct": false,
                                        "feedback": "Incorrect. Hiding a link does not secure the underlying page; access must be checked by the application."
                                    },
                                    {
                                        "text": "Create a different Django project for every registered user and use its project name as their password.",
                                        "correct": false,
                                        "feedback": "Incorrect. Authentication systems manage user identity and sign-in; creating separate projects is not an appropriate access-control solution."
                                    },
                                    {
                                        "text": "Customise the sign-in template but leave the private view accessible to everyone.",
                                        "correct": false,
                                        "feedback": "Incorrect. A customised sign-in page does not itself restrict access to protected application functionality."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Handling Forms and Updating Records",
                    "challenges": [
                        "Accepting POST requests",
                        "POSTing and writing to the database",
                        "Deeper dive into relationships",
                        "Conditional comments",
                        "Creating a Django form",
                        "Handling a POST request",
                        "Challenge: Create the Collaboration Request form",
                        "Challenge: Handle the form POST request",
                        "Editing and deleting records",
                        "The edit and delete views",
                        "Handling edit and delete buttons with JavaScript",
                        "What just happened",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Build",
                        "text": "Build interactive Django features that accept form submissions and allow records to be maintained."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement a Django form and its POST handling, save submitted data, and support editing and deleting records.",
                        "mcqs": [
                            {
                                "id": "D56-LG03-Q01",
                                "question": "A collaboration request form must save a visitor's submitted details and allow an authorised user to edit or delete the resulting record. Which approach best meets this requirement?",
                                "options": [
                                    {
                                        "text": "Validate the submitted POST data, save a valid request through the appropriate Django model, and provide suitable views for editing and deleting records.",
                                        "correct": true,
                                        "feedback": "Correct. Form handling validates submitted data, model operations persist records, and appropriate views support record maintenance."
                                    },
                                    {
                                        "text": "Read the submitted values from the URL and assume Django saves them automatically without any form or view handling.",
                                        "correct": false,
                                        "feedback": "Incorrect. Submitting a form does not automatically persist its data; the application must process and save valid submissions."
                                    },
                                    {
                                        "text": "Store the request only in the HTML page so that it remains available permanently after the visitor closes the browser.",
                                        "correct": false,
                                        "feedback": "Incorrect. HTML displayed in a page is not a substitute for persistent database storage."
                                    },
                                    {
                                        "text": "Use JavaScript to hide the record and assume that hiding it deletes the database entry.",
                                        "correct": false,
                                        "feedback": "Incorrect. Hiding an element changes its display, not the stored database record; deletion requires an appropriate server-side operation."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "57",
            "title": "Developing with Django",
            "learning_groups": [
                {
                    "working_title": "Managing Image Storage",
                    "challenges": [
                        "Introduction to storage",
                        "Storing images on Cloudinary",
                        "Storing user-generated images",
                        "Tidying up",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how a Django application can store and manage images using an external storage service."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement image storage with Cloudinary and explain how user-generated images can be managed.",
                        "mcqs": [
                            {
                                "id": "D57-LG01-Q01",
                                "question": "Users of a deployed Django blog need to upload profile images. Why might the application use Cloudinary rather than relying only on its local project directory?",
                                "options": [
                                    {
                                        "text": "Cloudinary provides an external service for storing and delivering uploaded media, which can be integrated with the Django application.",
                                        "correct": true,
                                        "feedback": "Correct. An external media service can manage user-generated images separately from the application's deployed code."
                                    },
                                    {
                                        "text": "Cloudinary replaces Django models, views, authentication and all database functionality.",
                                        "correct": false,
                                        "feedback": "Incorrect. Cloudinary provides media-storage capabilities; the Django application still handles its own data and application behaviour."
                                    },
                                    {
                                        "text": "Cloudinary converts every uploaded image into a Python model and removes the need to manage uploaded files.",
                                        "correct": false,
                                        "feedback": "Incorrect. Images remain media assets, and the application still needs appropriate upload handling and storage configuration."
                                    },
                                    {
                                        "text": "Cloudinary is a CSS framework that stores images as stylesheet rules in the browser.",
                                        "correct": false,
                                        "feedback": "Incorrect. Cloudinary is a cloud media service, not a CSS framework."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Testing Django Forms and Views",
                    "challenges": [
                        "Introduction to Django testing",
                        "Testing forms",
                        "Testing the about form",
                        "Testing views: Setting up our mock data",
                        "Testing views: GET set go!",
                        "Testing views: Going POSTal",
                        "Quiz"
                    ],
                    "aim": {
                        "verb": "Develop",
                        "text": "Develop confidence in testing Django forms and views to check that application behaviour works as intended."
                    },
                    "objective": {
                        "verb": "Test",
                        "text": "Test Django forms and views using mock data and checks for GET and POST requests.",
                        "mcqs": [
                            {
                                "id": "D57-LG02-Q01",
                                "question": "You are testing a Django form that should display an empty form on a GET request and save valid data on a POST request. Which test strategy best checks this behaviour?",
                                "options": [
                                    {
                                        "text": "Use Django's test client to check the GET response and form display, then submit valid and invalid POST data and verify the expected responses and database effects.",
                                        "correct": true,
                                        "feedback": "Correct. Testing both request methods and checking outcomes helps establish whether the form and view behave as intended."
                                    },
                                    {
                                        "text": "Test only whether the view's Python file exists, because that proves GET and POST requests work.",
                                        "correct": false,
                                        "feedback": "Incorrect. The existence of a file does not establish that the view processes requests correctly."
                                    },
                                    {
                                        "text": "Send only a GET request and assume that the POST handler and database-saving behaviour are also correct.",
                                        "correct": false,
                                        "feedback": "Incorrect. GET and POST can follow different code paths, so the POST behaviour needs its own checks."
                                    },
                                    {
                                        "text": "Use production customer records as mock data and permanently change them during every test.",
                                        "correct": false,
                                        "feedback": "Incorrect. Tests should use controlled test data and avoid unintended changes to real user records."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Reviewing Django Knowledge",
                    "challenges": [
                        "Knowledge Checkpoint 8",
                        "End of Module Knowledge Checkpoint",
                        "Congratulations!",
                        "Student Feedback"
                    ],
                    "aim": {
                        "verb": "Strengthen",
                        "text": "Strengthen and review understanding of the Django module and reflect on learning."
                    },
                    "objective": {
                        "verb": "Summarise",
                        "text": "Summarise key Django learning and complete the module knowledge checks and feedback.",
                        "mcqs": [
                            {
                                "id": "D57-LG03-Q01",
                                "question": "A learner is reviewing a Django project that includes models, authentication, forms, image uploads and tests. Which approach best demonstrates a meaningful review of their learning?",
                                "options": [
                                    {
                                        "text": "Explain how the components work together, use knowledge checkpoints to identify gaps, and provide feedback on the learning experience.",
                                        "correct": true,
                                        "feedback": "Correct. Reviewing how concepts connect, checking understanding and reflecting on the module provide evidence of learning and areas for improvement."
                                    },
                                    {
                                        "text": "Count the number of Python files and assume that a larger project demonstrates greater understanding.",
                                        "correct": false,
                                        "feedback": "Incorrect. File count does not show whether the learner understands the purpose or behaviour of the application."
                                    },
                                    {
                                        "text": "Skip the knowledge checkpoints because completing the project automatically proves that every concept is understood.",
                                        "correct": false,
                                        "feedback": "Incorrect. Practical work is valuable, but checkpoints can reveal misunderstandings that still need attention."
                                    },
                                    {
                                        "text": "Provide feedback only if every answer is correct, and do not record any topics that need further practice.",
                                        "correct": false,
                                        "feedback": "Incorrect. Feedback and reflection are useful for identifying both strengths and areas where additional learning is needed."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "58",
            "title": "AI Pair Programming 3",
            "learning_groups": [
                {
                    "working_title": "Using Copilot for Django Development",
                    "challenges": [
                        "Navigating Copilot tools for Django development",
                        "Effective prompting for software development",
                        "Copilot for debugging and workflow efficiency"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can support Django development through effective prompting, debugging and workflow assistance."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate effective prompting and use Copilot tools to support debugging and development workflow tasks.",
                        "mcqs": [
                            {
                                "id": "D58-LG01-Q01",
                                "question": "A Django view returns an unexpected error. Which prompt is most likely to help Copilot provide useful debugging assistance?",
                                "options": [
                                    {
                                        "text": "Provide the relevant view code, the error message, the expected behaviour and the steps that reproduce the problem, then ask Copilot to explain possible causes.",
                                        "correct": true,
                                        "feedback": "Correct. Relevant code, observable symptoms and expected behaviour give Copilot useful context for investigating the problem."
                                    },
                                    {
                                        "text": "Ask Copilot to fix everything in the project without describing the error or the intended behaviour.",
                                        "correct": false,
                                        "feedback": "Incorrect. A vague request gives limited context and makes it harder to identify a suitable correction."
                                    },
                                    {
                                        "text": "Ask Copilot to guarantee that the application is correct without reviewing its suggestions.",
                                        "correct": false,
                                        "feedback": "Incorrect. AI-generated suggestions may be inaccurate and need to be checked and tested."
                                    },
                                    {
                                        "text": "Paste private credentials and production secrets into the prompt so Copilot has unrestricted access to the application.",
                                        "correct": false,
                                        "feedback": "Incorrect. Do not expose passwords, API keys or other secrets in prompts; provide relevant code and safe diagnostic information instead."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Building Django Models, Views and Forms with AI",
                    "challenges": [
                        "Before we get started",
                        "Challenge: Building Models",
                        "Building Models",
                        "Challenge: Building Views & Templates",
                        "Building Views and Templates",
                        "Challenge: Building & integrating forms",
                        "Building & integrating forms"
                    ],
                    "aim": {
                        "verb": "Build",
                        "text": "Build Django components with AI assistance while reviewing and understanding the generated code."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement and review Django models, views, templates and forms with support from Copilot.",
                        "mcqs": [
                            {
                                "id": "D58-LG02-Q01",
                                "question": "Copilot generates a Django form and a view to save submitted data. What should the developer do before relying on the generated code?",
                                "options": [
                                    {
                                        "text": "Review how the form validates input, how the view handles the request, and how the data is saved; then run appropriate tests.",
                                        "correct": true,
                                        "feedback": "Correct. Reviewing and testing generated code helps confirm that it meets the requirements and handles data appropriately."
                                    },
                                    {
                                        "text": "Accept the suggestion immediately because generated code is always compatible with the existing project.",
                                        "correct": false,
                                        "feedback": "Incorrect. Generated code can contain errors or conflict with the project's existing structure and requirements."
                                    },
                                    {
                                        "text": "Remove all form validation because AI-generated code should be kept as short as possible.",
                                        "correct": false,
                                        "feedback": "Incorrect. Validation is important for checking submitted data and should not be removed simply to shorten the code."
                                    },
                                    {
                                        "text": "Deploy the code directly to production before checking whether the form works locally.",
                                        "correct": false,
                                        "feedback": "Incorrect. Testing and reviewing changes before deployment helps identify defects and reduce the risk of disrupting a live application."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Testing and Deploying with AI Assistance",
                    "challenges": [
                        "Unit testing with Copilot",
                        "Challenge: Testing & Deployment with Copilot",
                        "Copilot for Deployment"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can assist with unit testing and deployment tasks."
                    },
                    "objective": {
                        "verb": "Test",
                        "text": "Test Django functionality with Copilot assistance and use it to support the deployment process.",
                        "mcqs": [
                            {
                                "id": "D58-LG03-Q01",
                                "question": "Copilot suggests unit tests and a set of deployment configuration changes for a Django application. Which workflow is most appropriate?",
                                "options": [
                                    {
                                        "text": "Review the suggested tests and configuration, run the tests, resolve failures, and verify the deployment settings before deploying.",
                                        "correct": true,
                                        "feedback": "Correct. AI assistance can speed up testing and configuration work, but the developer remains responsible for reviewing, verifying and testing the changes."
                                    },
                                    {
                                        "text": "Deploy immediately and use any production errors as the only way to determine whether the tests are valid.",
                                        "correct": false,
                                        "feedback": "Incorrect. Running tests and reviewing configuration before deployment helps catch problems earlier and reduces deployment risk."
                                    },
                                    {
                                        "text": "Assume the tests are correct because Copilot generated them, even if they fail.",
                                        "correct": false,
                                        "feedback": "Incorrect. Generated tests need to be run and reviewed; failures should be investigated rather than ignored."
                                    },
                                    {
                                        "text": "Delete the existing test suite because Copilot can only work with newly generated tests.",
                                        "correct": false,
                                        "feedback": "Incorrect. Existing tests remain useful and can complement additional tests suggested by Copilot."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "59",
            "title": "AI Pair Programming 3",
            "learning_groups": [
                {
                    "working_title": "Using Copilot for Django Development",
                    "challenges": [
                        "Navigating Copilot tools for Django development",
                        "Effective prompting for software development",
                        "Copilot for debugging and workflow efficiency"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can support Django development through effective prompting, debugging and workflow assistance."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate effective prompting and use Copilot tools to support debugging and development workflow tasks.",
                        "mcqs": [
                            {
                                "id": "D59-LG01-Q01",
                                "question": "You want Copilot to investigate a Django error that appears only when a user submits a form. Which approach provides the most useful starting point?",
                                "options": [
                                    {
                                        "text": "Share the relevant form and view code, the error or observed result, the expected behaviour, and the steps needed to reproduce the problem.",
                                        "correct": true,
                                        "feedback": "Correct. Specific context and reproducible symptoms help Copilot reason about the likely cause and suggest targeted debugging steps."
                                    },
                                    {
                                        "text": "Ask Copilot to rewrite the entire application without sharing any information about the form submission.",
                                        "correct": false,
                                        "feedback": "Incorrect. Rewriting the entire application is unnecessary, and the lack of context makes a useful diagnosis less likely."
                                    },
                                    {
                                        "text": "Ask Copilot to confirm the first guess you make, regardless of the evidence.",
                                        "correct": false,
                                        "feedback": "Incorrect. Debugging should consider evidence and test possible explanations rather than simply confirm an initial assumption."
                                    },
                                    {
                                        "text": "Provide live user passwords and API keys so Copilot can reproduce the error with real accounts.",
                                        "correct": false,
                                        "feedback": "Incorrect. Sensitive credentials should not be shared; use safe test data and relevant diagnostic information."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Building Django Models, Views and Forms with AI",
                    "challenges": [
                        "Before we get started",
                        "Challenge: Building Models",
                        "Building Models",
                        "Challenge: Building Views & Templates",
                        "Building Views and Templates",
                        "Challenge: Building & integrating forms",
                        "Building & integrating forms"
                    ],
                    "aim": {
                        "verb": "Build",
                        "text": "Build Django components with AI assistance while reviewing and understanding the generated code."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement and review Django models, views, templates and forms with support from Copilot.",
                        "mcqs": [
                            {
                                "id": "D59-LG02-Q01",
                                "question": "Copilot proposes a model, a view, a template and a form for a new Django feature. How can you check that these components work together correctly?",
                                "options": [
                                    {
                                        "text": "Check that the model represents the required data, the view handles requests appropriately, the form validates input, and the template displays the intended information; then test the integrated feature.",
                                        "correct": true,
                                        "feedback": "Correct. Reviewing each component's responsibility and testing their integration helps establish whether the feature meets its requirements."
                                    },
                                    {
                                        "text": "Check only that all four files exist and assume the application is complete.",
                                        "correct": false,
                                        "feedback": "Incorrect. Files can exist while containing errors or failing to work together correctly."
                                    },
                                    {
                                        "text": "Move all model, view, form and template code into a single CSS file so Copilot can find it more easily.",
                                        "correct": false,
                                        "feedback": "Incorrect. These components have different responsibilities and should be organised according to the Django project structure."
                                    },
                                    {
                                        "text": "Skip validation and testing because Copilot can infer the application's requirements from the filenames.",
                                        "correct": false,
                                        "feedback": "Incorrect. Filenames do not guarantee correct behaviour; requirements, validation and tests still need to be reviewed."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Testing and Deploying with AI Assistance",
                    "challenges": [
                        "Unit testing with Copilot",
                        "Challenge: Testing & Deployment with Copilot",
                        "Copilot for Deployment"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can assist with unit testing and deployment tasks."
                    },
                    "objective": {
                        "verb": "Test",
                        "text": "Test Django functionality with Copilot assistance and use it to support the deployment process.",
                        "mcqs": [
                            {
                                "id": "D59-LG03-Q01",
                                "question": "Copilot suggests a test for a Django view and changes to the deployment configuration. What is the best way to use these suggestions?",
                                "options": [
                                    {
                                        "text": "Review the suggestions against the requirements, run the tests, investigate failures, and verify the configuration in the intended deployment environment.",
                                        "correct": true,
                                        "feedback": "Correct. AI suggestions are useful starting points, but tests and deployment settings must be checked against the actual application and environment."
                                    },
                                    {
                                        "text": "Accept every change without inspection because Copilot knows the production environment automatically.",
                                        "correct": false,
                                        "feedback": "Incorrect. Copilot may not know all details of the deployment environment, so configuration changes need to be checked."
                                    },
                                    {
                                        "text": "Run the tests only after deployment, even when they could have identified problems beforehand.",
                                        "correct": false,
                                        "feedback": "Incorrect. Running tests before deployment can identify defects earlier and reduce the risk of releasing broken functionality."
                                    },
                                    {
                                        "text": "Remove the tests if they report an error, because the deployment configuration is more important than application correctness.",
                                        "correct": false,
                                        "feedback": "Incorrect. Test failures should be investigated; removing tests simply to get a passing result can conceal real defects."
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "day": "60",
            "title": "AI Pair Programming 3",
            "learning_groups": [
                {
                    "working_title": "Using Copilot for Django Development",
                    "challenges": [
                        "Navigating Copilot tools for Django development",
                        "Effective prompting for software development",
                        "Copilot for debugging and workflow efficiency"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can support Django development through effective prompting, debugging and workflow assistance."
                    },
                    "objective": {
                        "verb": "Demonstrate",
                        "text": "Demonstrate effective prompting and use Copilot tools to support debugging and development workflow tasks.",
                        "mcqs": [
                            {
                                "id": "D60-LG01-Q01",
                                "question": "A Django feature is failing, and you want Copilot to help you investigate without making unnecessary changes. Which prompt is the strongest starting point?",
                                "options": [
                                    {
                                        "text": "Describe the expected behaviour, the actual result, the relevant code and the error message, then ask Copilot to identify likely causes and suggest a small, testable fix.",
                                        "correct": true,
                                        "feedback": "Correct. Clear context and a focused request encourage targeted debugging and make suggested fixes easier to evaluate."
                                    },
                                    {
                                        "text": "Tell Copilot to change as many files as possible until the error disappears.",
                                        "correct": false,
                                        "feedback": "Incorrect. Broad, uncontrolled changes make it harder to identify the cause and can introduce additional defects."
                                    },
                                    {
                                        "text": "Ask Copilot to guarantee a fix without providing the error, code or expected behaviour.",
                                        "correct": false,
                                        "feedback": "Incorrect. Without relevant context, Copilot has little evidence to work from and cannot guarantee a correct solution."
                                    },
                                    {
                                        "text": "Include production credentials in the prompt and ask Copilot to make changes without review.",
                                        "correct": false,
                                        "feedback": "Incorrect. Credentials should remain secret, and code changes should be reviewed and tested before use."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Building Django Models, Views and Forms with AI",
                    "challenges": [
                        "Before we get started",
                        "Challenge: Building Models",
                        "Building Models",
                        "Challenge: Building Views & Templates",
                        "Building Views and Templates",
                        "Challenge: Building & integrating forms",
                        "Building & integrating forms"
                    ],
                    "aim": {
                        "verb": "Build",
                        "text": "Build Django components with AI assistance while reviewing and understanding the generated code."
                    },
                    "objective": {
                        "verb": "Implement",
                        "text": "Implement and review Django models, views, templates and forms with support from Copilot.",
                        "mcqs": [
                            {
                                "id": "D60-LG02-Q01",
                                "question": "Copilot generates code for a Django model, view, template and form. Which action best demonstrates that you understand and have reviewed the generated implementation?",
                                "options": [
                                    {
                                        "text": "Explain each component's role, check the code against the requirements, test valid and invalid form submissions, and verify that the view and template behave correctly.",
                                        "correct": true,
                                        "feedback": "Correct. Understanding component responsibilities and testing realistic scenarios helps establish that the generated code is appropriate and works as intended."
                                    },
                                    {
                                        "text": "Submit the code without reading it because successful generation proves that it is correct.",
                                        "correct": false,
                                        "feedback": "Incorrect. Generated code can contain errors or misunderstand requirements, so it must be reviewed and tested."
                                    },
                                    {
                                        "text": "Check only the visual appearance of the template and assume the database operations are correct.",
                                        "correct": false,
                                        "feedback": "Incorrect. Visual appearance does not prove that model operations, view logic or form validation work correctly."
                                    },
                                    {
                                        "text": "Delete the form's validation and the tests so the generated feature has fewer lines of code.",
                                        "correct": false,
                                        "feedback": "Incorrect. Shorter code is not necessarily better; validation and tests help protect data quality and application behaviour."
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "working_title": "Testing and Deploying with AI Assistance",
                    "challenges": [
                        "Unit testing with Copilot",
                        "Challenge: Testing & Deployment with Copilot",
                        "Copilot for Deployment"
                    ],
                    "aim": {
                        "verb": "Explore",
                        "text": "Explore how Copilot can assist with unit testing and deployment tasks."
                    },
                    "objective": {
                        "verb": "Test",
                        "text": "Test Django functionality with Copilot assistance and use it to support the deployment process.",
                        "mcqs": [
                            {
                                "id": "D60-LG03-Q01",
                                "question": "You have used Copilot to write unit tests and prepare a Django deployment. Which sequence provides the strongest quality check before release?",
                                "options": [
                                    {
                                        "text": "Review the tests and deployment changes, run the test suite, resolve failures, verify deployment settings and required environment variables, and then deploy using the project's process.",
                                        "correct": true,
                                        "feedback": "Correct. Reviewing, testing and verifying configuration before release helps identify problems while keeping the developer responsible for the deployment."
                                    },
                                    {
                                        "text": "Deploy immediately, then ask Copilot to explain any production errors after users encounter them.",
                                        "correct": false,
                                        "feedback": "Incorrect. Testing and reviewing before deployment helps reduce the likelihood of exposing users to avoidable defects."
                                    },
                                    {
                                        "text": "Trust the generated tests without running them and copy local development secrets into the production configuration.",
                                        "correct": false,
                                        "feedback": "Incorrect. Tests must be executed, and production secrets and environment settings must be managed appropriately."
                                    },
                                    {
                                        "text": "Remove the existing tests and ignore environment variables because Copilot can supply all deployment configuration automatically.",
                                        "correct": false,
                                        "feedback": "Incorrect. Existing tests and correct environment configuration remain important; AI assistance does not automatically configure every deployment requirement."
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