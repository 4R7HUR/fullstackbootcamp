// =========================================================
// Variables
// =========================================================

const learning_outcomes_container =
    document.getElementById("learning_outcomes");

const outcome_colour_classes = [
    "outcome-red",
    "outcome-blue",
    "outcome-amber",
    "outcome-green"
];

let learning_outcomes_dataset;


// =========================================================
// Select Dataset
// =========================================================

if (day <= 5) {
    learning_outcomes_dataset = learning_outcomes_1_5;
} else if (day <= 10) {
    learning_outcomes_dataset = learning_outcomes_6_10;
} else if (day <= 15) {
    learning_outcomes_dataset = learning_outcomes_11_15;
} else if (day <= 20) {
    learning_outcomes_dataset = learning_outcomes_16_20;
} else if (day <= 25) {
    learning_outcomes_dataset = learning_outcomes_21_25;
} else if (day <= 30) {
    learning_outcomes_dataset = learning_outcomes_26_30;
} else if (day <= 35) {
    learning_outcomes_dataset = learning_outcomes_31_35;
} else if (day <= 40) {
    learning_outcomes_dataset = learning_outcomes_36_40;
} else if (day <= 45) {
    learning_outcomes_dataset = learning_outcomes_41_45;
} else if (day <= 50) {
    learning_outcomes_dataset = learning_outcomes_46_50;
} else if (day <= 55) {
    learning_outcomes_dataset = learning_outcomes_51_55;
} else if (day <= 60) {
    learning_outcomes_dataset = learning_outcomes_56_60;
} else if (day <= 65) {
    learning_outcomes_dataset = learning_outcomes_61_65;
} else if (day <= 70) {
    learning_outcomes_dataset = learning_outcomes_66_70;
} else if (day <= 75) {
    learning_outcomes_dataset = learning_outcomes_71_75;
} else {
    learning_outcomes_dataset = learning_outcomes_76_80;
}


// =========================================================
// Find Day Data
// =========================================================

const day_index = learning_outcomes_dataset.days.findIndex(
    item => Number(item.day) === Number(day)
);

const day_data =
    learning_outcomes_dataset.days[day_index];


// =========================================================
// Populate Learning Outcomes
// =========================================================

learning_outcomes_container.replaceChildren();

if (day_data && day_data.learning_groups) {

    // -----------------------------------------------------
    // Assign Colour Classes to Working Titles
    // -----------------------------------------------------

    const working_title_colours = {};

    day_data.learning_groups.forEach((group, index) => {

        working_title_colours[group.working_title] =
            outcome_colour_classes[
                index % outcome_colour_classes.length
            ];

    });


    // -----------------------------------------------------
    // Introduction
    // -----------------------------------------------------

    const introduction = document.createElement("h3");

    introduction.textContent = "By the end of the session:";

    // Uncomment the next line to display the introduction.
    // learning_outcomes_container.appendChild(introduction);


    // -----------------------------------------------------
    // Aims Heading
    // -----------------------------------------------------

    const aims_heading = document.createElement("h3");

    aims_heading.textContent =
        "Aims - What we will cover";

    learning_outcomes_container.appendChild(aims_heading);


    // -----------------------------------------------------
    // Aims Ordered List
    // -----------------------------------------------------

    const aims_list = document.createElement("ol");

    day_data.learning_groups.forEach((group, group_index) => {

        const aim = document.createElement("li");

        aim.dataset.workingTitle = group.working_title;
        aim.dataset.outcomeType = "aim";

        aim.dataset.jsonPath =
            `days[${day_index}].learning_groups[${group_index}].aim`;

        const outcome_colour =
            working_title_colours[group.working_title];

        // Apply CSS classes.

        aim.classList.add(
            "learning-outcome",
            outcome_colour,
            "py-1"
        );

        // Create the bold aim verb.

        const aim_verb = document.createElement("strong");

        aim_verb.textContent = group.aim.verb;

        aim.appendChild(aim_verb);

        // Add the remaining aim text.

        aim.appendChild(
            document.createTextNode(
                group.aim.text.slice(group.aim.verb.length)
            )
        );

        // Add the aim to the ordered list.

        aims_list.appendChild(aim);

    });

    learning_outcomes_container.appendChild(aims_list);


    // -----------------------------------------------------
    // Objectives Heading
    // -----------------------------------------------------

    const objectives_heading = document.createElement("h3");

    objectives_heading.textContent =
        "Objectives - What you will be able to do";

    learning_outcomes_container.appendChild(objectives_heading);


    // -----------------------------------------------------
    // Objectives Ordered List
    // -----------------------------------------------------

    const objectives_list = document.createElement("ol");

    day_data.learning_groups.forEach((group, group_index) => {

        const objective = document.createElement("li");

        objective.dataset.workingTitle = group.working_title;
        objective.dataset.outcomeType = "objective";

        objective.dataset.jsonPath =
            `days[${day_index}].learning_groups[${group_index}].objective`;

        // Identify the day and learning group.

        objective.dataset.day = day;
        objective.dataset.groupIndex = group_index;

        const outcome_colour =
            working_title_colours[group.working_title];

        // Apply CSS classes.

        objective.classList.add(
            "learning-outcome",
            outcome_colour,
            "py-1"
        );

        // Create the bold objective verb.

        const objective_verb = document.createElement("strong");

        objective_verb.textContent = group.objective.verb;

        objective.appendChild(objective_verb);

        // Add the remaining objective text.

        objective.appendChild(
            document.createTextNode(
                group.objective.text.slice(
                    group.objective.verb.length
                )
            )
        );


        // -------------------------------------------------
        // Test Me Link
        // -------------------------------------------------

        const test_me_link = document.createElement("a");

        test_me_link.href = "#";
        test_me_link.textContent = "Test me";

        test_me_link.classList.add(
            "ms-2",
            "small"
        );

        // Store identifiers for the quiz functionality.

        test_me_link.dataset.day = day;
        test_me_link.dataset.groupIndex = group_index;

        // Handle clicks on the Test me link.

        test_me_link.addEventListener("click", (event) => {

            // Prevent the link from jumping to the top of the page.

            event.preventDefault();

            // Get the quiz questions for this objective.

            const questions = group.objective.mcqs;

            // Check that questions are available.

            if (!questions || questions.length === 0) {

                alert("No quiz questions are available for this objective.");

                return;
            }

            // Open the Bootstrap quiz modal.

            const quiz_modal_element =
                document.getElementById("learning_outcomes_quiz_modal");

            const quiz_modal =
                bootstrap.Modal.getOrCreateInstance(quiz_modal_element);

            quiz_modal.show();

            // Set the modal heading.

            document.getElementById("learning_outcomes_quiz_title").textContent =
                `Day ${day} - Multiple Choice`;

            // Start the practice quiz.

            start_learning_outcomes_quiz(
                group.working_title,
                group.objective.text,
                questions
            );

        });

        // Add the link to the objective.

        objective.appendChild(test_me_link);

        // Add the objective to the ordered list.

        objectives_list.appendChild(objective);

    });

    learning_outcomes_container.appendChild(objectives_list);

} else {

    // -----------------------------------------------------
    // No Learning Outcomes
    // -----------------------------------------------------

    learning_outcomes_container.textContent =
        "No learning outcomes available for this day.";

}
