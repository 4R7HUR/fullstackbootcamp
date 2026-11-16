
// START: Daily Schedule Clock

// Variables

let clock_container = document.getElementById("daily_schedule_clock");

let centre_x = 200;
let centre_y = 200;
let radius = 180;

let svg_namespace = "http://www.w3.org/2000/svg";

// Variables: Session times

let session_start = "09:00";
let session_end = "16:58";

let session_arc_width = 5;

// Variables: Break times

let morning_break_start = "10:45";
let morning_break_end = "11:00";

let lunch_start = "12:30";
let lunch_end = "13:30";

let afternoon_break_start = "15:00";
let afternoon_break_end = "15:15";

// Variables: Active break ring

let active_break_ring = null;

// Variables: Session arc

let session_arc = null;
let session_end_arrow = null;

// Add the clock HTML to the modal

clock_container.innerHTML = `
    <svg id="clock_face" viewBox="0 0 400 400" width="400"
        xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label="Live analogue clock showing session times and breaks">
    </svg>

    <p id="digital_time" class="digital_time"></p>

    <div class="break_schedule">

        <div class="break_item morning_break">
            <h3>Morning Break</h3>
            <p id="morning_break_time"></p>
        </div>

        <div class="break_item lunch_break">
            <h3>Lunch</h3>
            <p id="lunch_time"></p>
        </div>

        <div class="break_item afternoon_break">
            <h3>Afternoon Break</h3>
            <p id="afternoon_break_time"></p>
        </div>

    </div>
`;

// Functions

function create_svg_element(tag_name, attributes) {

    let element = document.createElementNS(svg_namespace, tag_name);

    for (let attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    document.getElementById("clock_face").appendChild(element);

    return element;
}

function time_to_minutes(time_string) {

    let parts = time_string.split(":");

    return Number(parts[0]) * 60 + Number(parts[1]);
}

function time_to_angle(time_string) {

    let minutes = time_to_minutes(time_string);

    return (minutes % 720) * 0.5 - 90;
}

function get_clock_position(angle, distance) {

    let radians = angle * Math.PI / 180;

    return {
        x: centre_x + distance * Math.cos(radians),
        y: centre_y + distance * Math.sin(radians)
    };
}

function shade_time_period(start_time, end_time, colour) {

    let start_angle = time_to_angle(start_time);
    let end_angle = time_to_angle(end_time);

    let start_position = get_clock_position(start_angle, radius);
    let end_position = get_clock_position(end_angle, radius);

    let start_minutes = time_to_minutes(start_time);
    let end_minutes = time_to_minutes(end_time);

    let angle_difference = (end_minutes - start_minutes + 720) % 720;

    let large_arc_flag = angle_difference > 360 ? 1 : 0;

    create_svg_element("path", {
        d: `M ${centre_x} ${centre_y}
            L ${start_position.x} ${start_position.y}
            A ${radius} ${radius}
            0 ${large_arc_flag} 1
            ${end_position.x} ${end_position.y}
            Z`,
        fill: colour,
        opacity: "0.4"
    });
}

function draw_session_arc() {

    let session_arc_radius = radius + 22;

    let start_angle = time_to_angle(session_start);
    let end_angle = time_to_angle(session_end);

    let start_position = get_clock_position(start_angle, session_arc_radius);
    let end_position = get_clock_position(end_angle, session_arc_radius);

    let start_minutes = time_to_minutes(session_start);
    let end_minutes = time_to_minutes(session_end);

    let angle_difference = (end_minutes - start_minutes + 720) % 720;

    let large_arc_flag = angle_difference > 360 ? 1 : 0;

    // Draw the red session arc

    session_arc = create_svg_element("path", {
        d: `M ${start_position.x} ${start_position.y}
            A ${session_arc_radius} ${session_arc_radius}
            0 ${large_arc_flag} 1
            ${end_position.x} ${end_position.y}`,
        fill: "none",
        stroke: "red",
        "stroke-width": session_arc_width,
        "stroke-linecap": "round"
    });

    // Draw the filled end arrowhead
    // The arrow tip is positioned exactly at the session end.

    let arrow_length = session_arc_width * 2.4;
    let arrow_half_width = session_arc_width * 1.8;

    session_end_arrow = create_svg_element("path", {
        d: `M -${arrow_length} -${arrow_half_width}
            L 0 0
            L -${arrow_length} ${arrow_half_width}
            Z`,
        fill: "red",
        transform: `translate(${end_position.x} ${end_position.y}) rotate(${end_angle + 90})`
    });
}

function draw_clock_face() {

    // Draw the outer circle

    create_svg_element("circle", {
        cx: centre_x,
        cy: centre_y,
        r: radius,
        fill: "white",
        stroke: "black",
        "stroke-width": 8
    });

    // Shade the break periods

    shade_time_period(morning_break_start, morning_break_end, "#66BB6A");
    shade_time_period(lunch_start, lunch_end, "#FFD54F");
    shade_time_period(afternoon_break_start, afternoon_break_end, "#64B5F6");

    // Draw the session arc

    draw_session_arc();

    // Draw the minute markings

    for (let minute = 0; minute < 60; minute++) {

        let angle = (minute * 6 - 90) * Math.PI / 180;
        let marking_length = minute % 5 === 0 ? 20 : 8;

        let outer_x = centre_x + radius * Math.cos(angle);
        let outer_y = centre_y + radius * Math.sin(angle);

        let inner_x = centre_x + (radius - marking_length) * Math.cos(angle);
        let inner_y = centre_y + (radius - marking_length) * Math.sin(angle);

        create_svg_element("line", {
            x1: inner_x,
            y1: inner_y,
            x2: outer_x,
            y2: outer_y,
            stroke: "black",
            "stroke-width": minute % 5 === 0 ? 4 : 1.5,
            "stroke-linecap": "round"
        });
    }

    // Draw the numbers 1 to 12

    for (let hour = 1; hour <= 12; hour++) {

        let angle = (hour * 30 - 90) * Math.PI / 180;
        let number_radius = radius - 42;

        let x = centre_x + number_radius * Math.cos(angle);
        let y = centre_y + number_radius * Math.sin(angle);

        let number = create_svg_element("text", {
            x: x,
            y: y,
            "text-anchor": "middle",
            "dominant-baseline": "central",
            "font-size": 30,
            "font-weight": "bold"
        });

        number.textContent = hour;
    }

    // Draw the hour hand

    create_svg_element("line", {
        id: "hour_hand",
        x1: centre_x,
        y1: centre_y,
        x2: centre_x,
        y2: centre_y - 90,
        stroke: "black",
        "stroke-width": 10,
        "stroke-linecap": "round"
    });

    // Draw the minute hand

    create_svg_element("line", {
        id: "minute_hand",
        x1: centre_x,
        y1: centre_y,
        x2: centre_x,
        y2: centre_y - 125,
        stroke: "black",
        "stroke-width": 7,
        "stroke-linecap": "round"
    });

    // Draw the second hand

    create_svg_element("line", {
        id: "second_hand",
        x1: centre_x,
        y1: centre_y + 25,
        x2: centre_x,
        y2: centre_y - 145,
        stroke: "red",
        "stroke-width": 3,
        "stroke-linecap": "round"
    });

    // Draw the centre point

    create_svg_element("circle", {
        cx: centre_x,
        cy: centre_y,
        r: 6,
        fill: "black"
    });

    // Create the solid break ring (hidden until a break starts)

    active_break_ring = create_svg_element("circle", {
        cx: centre_x,
        cy: centre_y,
        r: radius + 9,
        class: "active_break_ring",
        visibility: "hidden"
    });
}

function format_time(time_string) {

    let parts = time_string.split(":");

    let hours = Number(parts[0]);
    let minutes = parts[1];

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes} ${period}`;
}

function display_break_times() {

    document.getElementById("morning_break_time").textContent =
        `${format_time(morning_break_start)}–${format_time(morning_break_end)}`;

    document.getElementById("lunch_time").textContent =
        `${format_time(lunch_start)}–${format_time(lunch_end)}`;

    document.getElementById("afternoon_break_time").textContent =
        `${format_time(afternoon_break_start)}–${format_time(afternoon_break_end)}`;
}

function update_active_break_ring(now) {

    let current_minutes = now.getHours() * 60 + now.getMinutes();

    let current_class = "";

    if (
        current_minutes >= time_to_minutes(morning_break_start) &&
        current_minutes < time_to_minutes(morning_break_end)
    ) {
        current_class = "active_morning_break";
    } else if (
        current_minutes >= time_to_minutes(lunch_start) &&
        current_minutes < time_to_minutes(lunch_end)
    ) {
        current_class = "active_lunch";
    } else if (
        current_minutes >= time_to_minutes(afternoon_break_start) &&
        current_minutes < time_to_minutes(afternoon_break_end)
    ) {
        current_class = "active_afternoon_break";
    }

    if (current_class === "") {

        active_break_ring.setAttribute("visibility", "hidden");
        active_break_ring.setAttribute("class", "active_break_ring");

    } else {

        active_break_ring.setAttribute(
            "class",
            `active_break_ring ${current_class}`
        );

        active_break_ring.setAttribute("visibility", "visible");
    }
}

function update_clock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    // Calculate the hand angles

    let second_angle = (seconds + milliseconds / 1000) * 6;
    let minute_angle = (minutes + seconds / 60) * 6;
    let hour_angle = ((hours % 12) + minutes / 60) * 30;

    // Rotate the hands

    document.getElementById("hour_hand").setAttribute(
        "transform",
        `rotate(${hour_angle} ${centre_x} ${centre_y})`
    );

    document.getElementById("minute_hand").setAttribute(
        "transform",
        `rotate(${minute_angle} ${centre_x} ${centre_y})`
    );

    document.getElementById("second_hand").setAttribute(
        "transform",
        `rotate(${second_angle} ${centre_x} ${centre_y})`
    );

    // Update the digital time

    document.getElementById("digital_time").textContent =
        now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    // Update the active break ring

    update_active_break_ring(now);
}

// STOP: Daily Schedule Clock


// START: Ready Block

draw_clock_face();
display_break_times();
update_clock();

setInterval(update_clock, 250);

// STOP: Ready Block

// STOP: Daily Schedule Clock
