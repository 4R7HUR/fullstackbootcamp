// =========================================================
// Functions
// =========================================================



function get_day_from_url() {

    const pathname = window.location.pathname;

    const match = pathname.match(/^\/day-(\d+)\/?$/);

    if (match) {
        return Number(match[1]);
    }

    return 1;
}


function update_element(id, data) {

    document.querySelector(`#${id}`).textContent = data;

}


function get_content_for_day(
    start_section,
    start_lesson,
    end_section,
    end_lesson
) {

    const sections = bootcamp_content.sections;

    const start_section_index =
        sections.indexOf(start_section);

    const end_section_index =
        sections.indexOf(end_section);

    const content_for_day = {
        sections: []
    };


    for (
        let section_index = start_section_index;
        section_index <= end_section_index;
        section_index++
    ) {

        const section = sections[section_index];

        const section_for_day = {
            number: section.number,
            title: section.title,
            lessons: []
        };


        for (const lesson of section.lessons) {

            // Skip lessons before the start lesson
            if (
                section_index === start_section_index &&
                lesson.number < start_lesson.number
            ) {
                continue;
            }


            // Skip lessons after the end lesson
            if (
                section_index === end_section_index &&
                lesson.number > end_lesson.number
            ) {
                continue;
            }


            section_for_day.lessons.push(lesson);
        }


        if (section_for_day.lessons.length > 0) {

            content_for_day.sections.push(
                section_for_day
            );
        }
    }


    return content_for_day;
}


function update_lessons() {

    const lessons_element =
        document.querySelector("#lessons");


    for (const section of bootcamp_content_for_day.sections) {

        const section_heading =
            document.createElement("h3");

        section_heading.textContent =
            section.title;

        lessons_element.appendChild(section_heading);


        for (const lesson of section.lessons) {

            const lesson_element =
                document.createElement("div");

            lesson_element.classList.add("ms-0","py-1","lesson-item");

            





            lesson_element.textContent =
                `${lesson.number}: ${lesson.title} `;


            const challenge_count_element =
                document.createElement("span");

            challenge_count_element.classList.add(
                "text-success"
            );

            challenge_count_element.textContent =
                `[${lesson.challenges.length} ` +
                `${lesson.challenges.length === 1 ? "challenge" : "challenges"}]`;


            lesson_element.appendChild(
                challenge_count_element
            );








            // =====================================================
            // Data attributes
            // =====================================================

            lesson_element.dataset.section =
                section.title;

            lesson_element.dataset.lesson =
                lesson.number;


            // =====================================================
            // Click event
            // =====================================================

            lesson_element.addEventListener(
                "click",
                show_challenges
            );


            lessons_element.appendChild(lesson_element);
        }
    }
}



















function show_challenges(event) {

    const lesson_element =
        event.currentTarget;

    const section_title =
        lesson_element.dataset.section;

    const lesson_number =
        Number(lesson_element.dataset.lesson);


    // =====================================================
    // Find section and lesson
    // =====================================================

    const section =
        bootcamp_content_for_day.sections.find(
            section =>
                section.title === section_title
        );

    const lesson =
        section.lessons.find(
            lesson =>
                lesson.number === lesson_number
        );


    // =====================================================
    // Update modal heading
    // =====================================================

    document.querySelector(
        "#challenge_modal_label"
    ).textContent =
        `Lesson ${lesson.number} - ${lesson.title}`;


    // =====================================================
    // Prepare challenges area
    // =====================================================

    const challenges_element =
        document.querySelector(
            "#challenge_modal_challenges"
        );

    challenges_element.innerHTML = "";


    // =====================================================
    // JSON container - rounded outer border
    // =====================================================

    const json_container =
        document.createElement("div");

    json_container.classList.add(
        "border",
        "rounded",
        "overflow-hidden"
    );


    // =====================================================
    // JSON heading - full-width grey bar
    // =====================================================

    const json_heading =
        document.createElement("h5");

    json_heading.textContent = "{JSON}";

    json_heading.classList.add(
        "bg-secondary-subtle",
        "px-3",
        "py-2",
        "mb-0"
    );

    json_container.appendChild(
        json_heading
    );


    // =====================================================
    // Formatted JSON
    // =====================================================

    const challenges_json =
        document.createElement("pre");

    challenges_json.classList.add(
        "language-json",
        "p-3",
        "m-0"
    );

    const challenges_code =
        document.createElement("code");

    challenges_code.classList.add(
        "language-json"
    );

    challenges_code.textContent =
        JSON.stringify(
            {
                challenges: lesson.challenges
            },
            null,
            4
        );

    challenges_json.appendChild(
        challenges_code
    );

    json_container.appendChild(
        challenges_json
    );


    // =====================================================
    // Add container and apply syntax highlighting
    // =====================================================

    challenges_element.appendChild(
        json_container
    );

    Prism.highlightElement(
        challenges_code
    );


    // =====================================================
    // Show modal
    // =====================================================

    const modal_element =
        document.querySelector(
            "#challenge_modal"
        );

    const modal =
        bootstrap.Modal.getOrCreateInstance(
            modal_element
        );

    modal.show();

}












// =========================================================
// Variables
// =========================================================

const day = get_day_from_url();


const bootcamp_start_stop =
    bootcamp_start_stop_by_day.find(
        item => Number(item.day) === day
    );

//delete bootcamp_start_stop.start_end_lesson;

console.log('****');
console.log(bootcamp_start_stop.start_end_lesson)
console.log('****');
console.log(bootcamp_start_stop);


// =========================================================
// Page
// =========================================================

update_element(
    "day",
    bootcamp_start_stop.day
);

update_element(
    "day_title",
    bootcamp_start_stop.day_title
);


// =========================================================
// Start section and lesson
// =========================================================

const start_section =
    bootcamp_content.sections.find(
        section =>
            section.title === bootcamp_start_stop.start_section
    );

console.log(start_section);


const start_lesson =
    start_section.lessons.find(
        lesson =>
            lesson.title === bootcamp_start_stop.start_lesson
    );

console.log(start_lesson);


// =========================================================
// End section and lesson
// =========================================================

const end_section =
    bootcamp_content.sections.find(
        section =>
            section.title === bootcamp_start_stop.end_section
    );

console.log(end_section);


const end_lesson =
    end_section.lessons.find(
        lesson =>
            lesson.title === bootcamp_start_stop.end_lesson
    );

console.log(end_lesson);


// =========================================================
// Content for selected day
// =========================================================

const bootcamp_content_for_day =
    get_content_for_day(
        start_section,
        start_lesson,
        end_section,
        end_lesson
    );

console.log(bootcamp_content_for_day);


// =========================================================
// Ready
// =========================================================

update_lessons();   

