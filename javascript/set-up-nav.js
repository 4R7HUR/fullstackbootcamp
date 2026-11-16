
// =========================================================
// Day Navigation
// =========================================================


// Variables

const day_navigation = document.getElementById("day_navigation");

const current_day = window.location.pathname.match(/^\/day-(\d+)\/?$/)?.[1] || "1";

const individual_projects = [
    "Individual Formative Assignment: HTML, CSS, Bootstrap",
    "Individual Full-Stack Project: Assessments Guide Preview",
    "Individual Full-Stack Project: Project Submission",
    "Individual Full-Stack Project"
];

const hackathons = [
    "Hackathon 1: Front-end with HTML, CSS & JavaScript",
    "Hackathon 2: Full-Stack with Django"
];

const mini_projects = [
    "Love Running - Essentials Project",
    "Boardwalk Games",
    "Love Maths - Essentials Project"
];


// Functions

function get_day_button_class(item) {

    const day_title = item.day_title.toLowerCase();

    // Find the matching section in bootcamp_content

    const matching_section = bootcamp_content.sections.find(section =>
        section.title.toLowerCase() === day_title
    );

    // Use the section title when a match is found

    const title = matching_section
        ? matching_section.title
        : item.day_title;


    // Individual Projects

    if (individual_projects.includes(title)) {
        return "btn-warning";
    }


    // Hackathons

    if (hackathons.includes(title)) {
        return "btn-success";
    }


    // Mini Projects

    if (mini_projects.includes(title)) {
        return "btn-primary";
    }


    // Normal platform-learning day

    return "btn-dark";

}


// Ready block

if (day_navigation) {

    // Clear existing navigation

    day_navigation.innerHTML = "";


    // Create a button for each day

    bootcamp_start_stop_by_day.forEach((item) => {

        const button = document.createElement("a");

        button.href = `/day-${item.day}/`;
        button.textContent = item.day;
        button.className = "btn btn-sm";


        // Apply activity styling

        button.classList.add(get_day_button_class(item));


        // Highlight the current day without changing its colour

        if (String(item.day) === current_day) {
            button.classList.add("current-day");
            button.setAttribute("aria-current", "page");
        }


        // Add tooltip with the day title

        button.setAttribute("data-bs-toggle", "tooltip");
        button.setAttribute("data-bs-title", item.day_title);
        button.setAttribute("data-bs-placement", "top");


        // Add button to navigation

        day_navigation.appendChild(button);

    });


    // Initialise Bootstrap tooltips

    if (
        typeof bootstrap !== "undefined" &&
        bootstrap.Tooltip
    ) {

        day_navigation
            .querySelectorAll('[data-bs-toggle="tooltip"]')
            .forEach((button) => {

                new bootstrap.Tooltip(button);

            });

    }

}
