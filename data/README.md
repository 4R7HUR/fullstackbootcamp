Check email for 'Follow up from onboarding session'
Ask Code Institute for the KPI_MAPPER_AND_SLIDES_GENERATOR.xlsx file
Downlaod the  tabs out of Excel as CSV's, use the tab names and so create mapper.csv and slides.csv

RUN
python3 csv_to_bootcamp_content.py 'mapper.csv'
python3 csv_to_bootcamp_start_stop_by_day.py 'slides.csv'

Massage bootcamp_start_stop_by_day.js a bit see 'My files > Code Institue > section-lesson-challenge' we have instances where extra ' - ' trip up the splits

Yesteray you manualy sorted out some issues with extra hyphens
Currently

    14-15 includive fixed issue with huphens and the split

    21-25 inclusive: fixed by swaping the start section and lesson with the end section and lesson [Individual Formative Assignment: HTML, CSS, Bootstrap]

    31-33 inclusive: fixed issue with huphens and the split

    36-42 inclusive: fixed by swaping the start section and lesson with the end section and lesson [Hackathon 1: Front-end with HTML, CSS & JavaScript]

    76-79 inclusive: fixed by swaping the start section and lesson with the end section and lesson [Hackathon 2: Full-Stack with Django]

80: not pulling data to front end looks like a sequence iussue