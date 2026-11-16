/* START: Learning Outcomes Quiz */

// START: Variables

const quiz_question = document.getElementById("learning_outcomes_quiz_question");
const quiz_options = document.getElementById("learning_outcomes_quiz_options");
const quiz_feedback = document.getElementById("learning_outcomes_quiz_feedback");
const quiz_submit_button = document.getElementById("learning_outcomes_quiz_next");

let selected_answer = null;
let answer_submitted = false;

// STOP: Variables


// START: Celebration GIF Pack

// Choose one random pack when the page loads.
// The manifest must be loaded before this file.

const celebration_pack_names = Object.keys(
    window.celebration_gif_packs || {}
);

let selected_celebration_gifs = [];

if (celebration_pack_names.length > 0) {

    const random_pack_index = Math.floor(
        Math.random() * celebration_pack_names.length
    );

    const selected_celebration_pack =
        celebration_pack_names[random_pack_index];

    selected_celebration_gifs =
        window.celebration_gif_packs[selected_celebration_pack];

    console.log(`Celebration GIF pack selected: ${selected_celebration_pack}`);

} else {
    console.warn("No celebration GIF packs were found.");
}

// STOP: Celebration GIF Pack


// START: Shuffle Quiz Options

function shuffle_quiz_options(options) {

    // Make a copy so the original question data is unchanged.

    const shuffled_options = [...options];

    // Fisher-Yates shuffle.

    for (let i = shuffled_options.length - 1; i > 0; i--) {

        const random_index = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffled_options[i], shuffled_options[random_index]] =
            [shuffled_options[random_index], shuffled_options[i]];
    }

    return shuffled_options;
}

// STOP: Shuffle Quiz Options


// START: Start Learning Outcomes Quiz

function start_learning_outcomes_quiz(
    working_title,
    objective_text,
    questions
) {

    // Variables

    let current_question_index = 0;
    let current_question = null;

    // Reset the quiz.

    selected_answer = null;
    answer_submitted = false;

    quiz_submit_button.disabled = true;
    quiz_submit_button.textContent = "Submit answer";

    quiz_feedback.innerHTML = "";

    // START: Display Question

    function display_question() {

        // Variables

        current_question = questions[current_question_index];

        selected_answer = null;
        answer_submitted = false;

        // Display the question.

        quiz_question.textContent = current_question.question;

        // Clear previous options and feedback.

        quiz_options.innerHTML = "";
        quiz_feedback.innerHTML = "";

        quiz_submit_button.disabled = true;
        quiz_submit_button.textContent = "Submit answer";

        // Shuffle the answer options.

        const shuffled_options = shuffle_quiz_options(
            current_question.options
        );

        // Display each answer option.

        shuffled_options.forEach((option, index) => {

            // Create the radio input.

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.classList.add("form-check-input");
            radio.name = "learning_outcomes_quiz_answer";
            radio.id = `quiz_answer_${index}`;
            radio.value = index;
            radio.quiz_option = option;

            // Create the label.

            const label = document.createElement("label");

            label.classList.add("form-check-label", "ms-2");
            label.htmlFor = radio.id;
            label.textContent = option.text;

            // Create the option container.

            const option_container = document.createElement("div");

            option_container.classList.add(
                "form-check",
                "p-3",
                "mb-2",
                "border",
                "rounded"
            );

            option_container.appendChild(radio);
            option_container.appendChild(label);

            // Handle answer selection.

            radio.addEventListener("change", () => {

                selected_answer = radio.quiz_option;

                quiz_submit_button.disabled = false;
                quiz_feedback.innerHTML = "";

                answer_submitted = false;

                quiz_submit_button.textContent = "Submit answer";

                // Clear previous highlighting.

                quiz_options.querySelectorAll(".form-check").forEach(
                    (container) => {

                        container.classList.remove(
                            "border-primary",
                            "border-success",
                            "border-danger",
                            "bg-success",
                            "bg-danger",
                            "bg-opacity-10"
                        );
                    }
                );

                // Highlight the selected option.

                option_container.classList.add("border-primary");
            });

            quiz_options.appendChild(option_container);
        });
    }

    // STOP: Display Question


    // START: Handle Submit Answer

    quiz_submit_button.onclick = () => {

        // Ignore clicks without a selected answer.

        if (!selected_answer) {
            return;
        }

        // Prevent duplicate submission of a correct answer.

        if (answer_submitted) {
            return;
        }

        // Correct answer: celebrate!

        if (selected_answer.correct) {

            answer_submitted = true;

            quiz_feedback.innerHTML = `
                <div class="alert alert-success mb-0">
                    <strong>Correct!</strong>
                    ${selected_answer.feedback}
                </div>
            `;

            // Choose a random GIF from the pack selected at page load.

            if (selected_celebration_gifs.length > 0) {

                const random_gif_index = Math.floor(
                    Math.random() * selected_celebration_gifs.length
                );

                // Create the dancing GIF image.

                const dancing_gif = document.createElement("img");

                dancing_gif.src =
                    selected_celebration_gifs[random_gif_index];

                dancing_gif.alt = "Dancing celebration";
                dancing_gif.width = 100;
                dancing_gif.height = 100;

                dancing_gif.style.objectFit = "contain";

                dancing_gif.classList.add(
                    "d-block",
                    "mx-auto",
                    "mt-2"
                );

                quiz_feedback.appendChild(dancing_gif);
            }

            // Highlight the correct answer and lock all options.

            quiz_options.querySelectorAll(".form-check").forEach(
                (container) => {

                    const radio = container.querySelector("input");

                    if (radio.quiz_option.correct) {
                        container.classList.add(
                            "border-success",
                            "bg-success",
                            "bg-opacity-10"
                        );
                    }

                    radio.disabled = true;
                }
            );

            // Change the button after a correct answer.

            quiz_submit_button.disabled = true;
            quiz_submit_button.textContent = "Correct!";

        } else {

            // Incorrect answers can be tried again.

            quiz_feedback.innerHTML = `
                <div class="alert alert-danger mb-0">
                    <strong>Not quite!</strong>
                    ${selected_answer.feedback}
                    Please try again.
                </div>
            `;

            // Highlight the incorrect selection.

            quiz_options.querySelectorAll(".form-check").forEach(
                (container) => {

                    const radio = container.querySelector("input");

                    if (radio.checked) {
                        container.classList.add(
                            "border-danger",
                            "bg-danger",
                            "bg-opacity-10"
                        );
                    }
                }
            );

            // The learner must select an answer again before resubmitting.

            quiz_submit_button.disabled = true;
        }
    };

    // STOP: Handle Submit Answer


    // Display the first question.

    display_question();
}

// STOP: Start Learning Outcomes Quiz

/* STOP: Learning Outcomes Quiz */
