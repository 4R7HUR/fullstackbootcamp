
/* START: MCQ Assessment Results */

// START: Variables

const mcq_results_storage_key = "mcq_assessment";

const mcq_results_status = document.getElementById("mcq_assessment_status");
const mcq_results_summary = document.getElementById("mcq_assessment_summary");
const mcq_results_container = document.getElementById("mcq_assessment_results");

// STOP: Variables


// START: Load Assessment

function load_mcq_results() {

    try {
        const saved_assessment = localStorage.getItem(
            mcq_results_storage_key
        );

        return saved_assessment ? JSON.parse(saved_assessment) : null;

    } catch (error) {
        console.error("Could not load MCQ assessment:", error);
        return null;
    }
}

// STOP: Load Assessment


// START: Format Dates

function format_mcq_results_date(date_string) {

    if (!date_string) {
        return "Not recorded";
    }

    const date = new Date(date_string);

    if (Number.isNaN(date.getTime())) {
        return "Unknown";
    }

    return date.toLocaleString();
}

// STOP: Format Dates


// START: Create HTML Elements

function create_mcq_results_element(tag_name, text, class_name = "") {

    const element = document.createElement(tag_name);

    element.textContent = text;

    if (class_name) {
        element.className = class_name;
    }

    return element;
}

// STOP: Create HTML Elements


// START: Render Assessment Results

function render_mcq_results() {

    // Check that the modal elements exist.

    if (
        !mcq_results_status ||
        !mcq_results_summary ||
        !mcq_results_container
    ) {
        console.warn("MCQ assessment modal elements were not found.");
        return;
    }

    // Load the latest saved assessment.

    const assessment = load_mcq_results();

    mcq_results_summary.replaceChildren();
    mcq_results_container.replaceChildren();

    // No assessment has been started yet.

    if (!assessment) {

        mcq_results_status.textContent = "No assessment recorded yet";

        mcq_results_container.appendChild(
            create_mcq_results_element(
                "p",
                "Answer your first MCQ to start recording an assessment.",
                "text-secondary"
            )
        );

        return;
    }

    // Display the assessment start time.

    mcq_results_status.textContent =
        "Started: " +
        format_mcq_results_date(assessment.assessment_started_at);

    // Prepare the history and totals.

    const history = assessment.mcq_history || {};
    const question_ids = Object.keys(history);

    let total_attempts = 0;
    let correct_attempts = 0;

    question_ids.forEach(function (question_id) {

        const question = history[question_id];

        (question.attempts || []).forEach(function (attempt) {

            total_attempts++;

            if (attempt === 1) {
                correct_attempts++;
            }
        });
    });

    const percentage = total_attempts > 0
        ? Math.round((correct_attempts / total_attempts) * 100)
        : 0;

    // Display the summary.

    mcq_results_summary.appendChild(
        create_mcq_results_element(
            "h5",
            "Assessment Summary",
            "mb-3"
        )
    );

    mcq_results_summary.appendChild(
        create_mcq_results_element(
            "p",
            "Questions answered: " + question_ids.length,
            "mb-1"
        )
    );

    mcq_results_summary.appendChild(
        create_mcq_results_element(
            "p",
            "Total attempts: " + total_attempts,
            "mb-1"
        )
    );

    mcq_results_summary.appendChild(
        create_mcq_results_element(
            "p",
            "Correct attempts: " + correct_attempts +
                " (" + percentage + "%)",
            "mb-1"
        )
    );

    // Show a message if no questions have been answered.

    if (question_ids.length === 0) {

        mcq_results_container.appendChild(
            create_mcq_results_element(
                "p",
                "No questions have been recorded yet.",
                "text-secondary"
            )
        );

        return;
    }

    // Group questions by course day.

    const questions_by_day = {};

    question_ids.forEach(function (question_id) {

        const question = history[question_id];
        const course_day = question.course_day ?? "Unknown";

        if (!questions_by_day[course_day]) {
            questions_by_day[course_day] = [];
        }

        questions_by_day[course_day].push({
            question_id: question_id,
            question: question
        });
    });

    // Display each course day in numerical order.

    Object.keys(questions_by_day)
        .sort(function (a, b) {
            return Number(a) - Number(b);
        })
        .forEach(function (course_day) {

            mcq_results_container.appendChild(
                create_mcq_results_element(
                    "h5",
                    "Course Day " + course_day,
                    "mt-4 mb-3"
                )
            );

            questions_by_day[course_day].forEach(function (item) {

                const question = item.question;

                const card = document.createElement("div");
                card.className = "card mb-3";

                const card_body = document.createElement("div");
                card_body.className = "card-body";

                card_body.appendChild(
                    create_mcq_results_element(
                        "h6",
                        item.question_id,
                        "text-secondary mb-2"
                    )
                );

                card_body.appendChild(
                    create_mcq_results_element(
                        "p",
                        question.question_text || "Question text unavailable.",
                        "fw-semibold"
                    )
                );

                card_body.appendChild(
                    create_mcq_results_element(
                        "p",
                        "Correct answer: " +
                            (question.correct_answer || "Not recorded"),
                        "mb-3"
                    )
                );

                const attempts = question.attempts || [];

                card_body.appendChild(
                    create_mcq_results_element(
                        "p",
                        "Attempts recorded: " + attempts.length,
                        "mb-2"
                    )
                );

                const attempts_list = document.createElement("div");
                attempts_list.className = "d-flex flex-wrap gap-2";

                attempts.forEach(function (attempt, index) {

                    const is_correct = attempt === 1;

                    attempts_list.appendChild(
                        create_mcq_results_element(
                            "span",
                            "Attempt " + (index + 1) + ": " +
                                (is_correct ? "Correct" : "Incorrect"),
                            "badge " +
                                (is_correct
                                    ? "text-bg-success"
                                    : "text-bg-danger")
                        )
                    );
                });

                card_body.appendChild(attempts_list);
                card.appendChild(card_body);

                mcq_results_container.appendChild(card);
            });
        });
}

// STOP: Render Assessment Results


// START: Reset Assessment

function reset_mcq_results_assessment() {

    const assessment = load_mcq_results();

    if (!assessment) {

        window.alert("There is no assessment to reset.");

        return;
    }

    const confirmed = window.confirm(
        "Reset the current assessment? All recorded results will be lost."
    );

    if (!confirmed) {
        return;
    }

    // Remove only the MCQ assessment data.

    localStorage.removeItem(mcq_results_storage_key);

    // Refresh the modal.

    render_mcq_results();

    console.log(
        "MCQ assessment reset. The next submitted answer will start a new assessment."
    );
}

// STOP: Reset Assessment


// START: Download Assessment Report

function download_mcq_results_report() {

    // Load the latest assessment.

    const assessment = load_mcq_results();

    if (!assessment) {

        window.alert(
            "There is no assessment to download. Answer an MCQ first."
        );

        return;
    }

    // Variables

    const report_lines = [];

    const history = assessment.mcq_history || {};
    const question_ids = Object.keys(history);

    let total_attempts = 0;
    let correct_attempts = 0;

    question_ids.forEach(function (question_id) {

        (history[question_id].attempts || []).forEach(function (attempt) {

            total_attempts++;

            if (attempt === 1) {
                correct_attempts++;
            }
        });
    });

    const percentage = total_attempts > 0
        ? Math.round((correct_attempts / total_attempts) * 100)
        : 0;

    // Build the report.

    report_lines.push("MCQ ASSESSMENT REPORT");
    report_lines.push("=====================");
    report_lines.push("");

    report_lines.push(
        "Assessment started: " +
        format_mcq_results_date(assessment.assessment_started_at)
    );

    report_lines.push(
        "Report downloaded: " +
        format_mcq_results_date(new Date().toISOString())
    );

    report_lines.push("");

    report_lines.push("ASSESSMENT SUMMARY");
    report_lines.push("------------------");
    report_lines.push("Questions answered: " + question_ids.length);
    report_lines.push("Total attempts: " + total_attempts);
    report_lines.push(
        "Correct attempts: " + correct_attempts + " (" + percentage + "%)"
    );
    report_lines.push("");

    // Add every recorded question and its attempts.

    question_ids.forEach(function (question_id) {

        const question = history[question_id];

        report_lines.push("----------------------------------------");
        report_lines.push("Question ID: " + question_id);
        report_lines.push("Course day: " + (question.course_day ?? "Unknown"));
        report_lines.push(
            "Question: " + (question.question_text || "Not recorded")
        );
        report_lines.push(
            "Correct answer: " + (question.correct_answer || "Not recorded")
        );
        report_lines.push(
            "Attempts: " + (question.attempts || [])
                .map(function (attempt) {
                    return attempt === 1 ? "Correct" : "Incorrect";
                })
                .join(", ")
        );
        report_lines.push("");
    });

    // Create and download the text file.

    const report = report_lines.join("\n");

    const report_file = new Blob(
        [report],
        { type: "text/plain;charset=utf-8" }
    );

    const download_url = URL.createObjectURL(report_file);

    const download_link = document.createElement("a");

    download_link.href = download_url;
    download_link.download = "assessment.txt";

    document.body.appendChild(download_link);
    download_link.click();
    download_link.remove();

    URL.revokeObjectURL(download_url);

    console.log("MCQ assessment report downloaded.");
}

// STOP: Download Assessment Report


// START: Connect Buttons and Refresh Results

document.addEventListener("DOMContentLoaded", function () {

    const reset_button = document.getElementById("mcq_assessment_reset");
    const download_button = document.getElementById("mcq_assessment_download");
    const assessment_modal = document.getElementById("mcq_assessment_modal");

    // Connect Reset Assessment.

    if (reset_button) {

        reset_button.addEventListener(
            "click",
            reset_mcq_results_assessment
        );
    }

    // Connect Download Report.

    if (download_button) {

        download_button.addEventListener(
            "click",
            download_mcq_results_report
        );
    }

    // Refresh the results whenever the modal opens.

    if (assessment_modal) {

        assessment_modal.addEventListener(
            "show.bs.modal",
            render_mcq_results
        );
    }

    // Refresh immediately after a quiz attempt is saved.

    document.addEventListener(
        "mcq-assessment-updated",
        render_mcq_results
    );

    // Display the current assessment.

    render_mcq_results();
});

// STOP: Connect Buttons and Refresh Results

/* STOP: MCQ Assessment Results */
