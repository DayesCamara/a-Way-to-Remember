# a-Way-to-Remember
# Work Day Scheduler

A simple calendar app for scheduling your work day.

## Description

The Work Day Scheduler is a web-based application that allows users to create and manage their daily schedule. The app presents time blocks for standard business hours, where users can enter events and save them for each hour. The app also provides color-coded indicators to distinguish past, present, and future time blocks. The saved events persist even after refreshing the page.

## Features

- Displays the current day at the top of the calendar
- Provides time blocks for standard business hours
- Color-codes time blocks to indicate past, present, and future
- Allows users to enter and save events for each time block
- Persists saved events using local storage
- Responsive design for various devices

## Usage

1. Open the Work Day Scheduler in a web browser.
2. The current day will be displayed at the top of the calendar.
3. Scroll down to view the time blocks for standard business hours.
4. Each time block will be color-coded to indicate whether it is in the past, present, or future.
5. Click on a time block to enter an event in the corresponding textarea.
6. Click the save button (represented by the floppy disk icon) to save the event for that time block.
7. The event will be saved and will persist even after refreshing the page.
8. Repeat steps 5-7 for other time blocks as needed.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap
- Day.js (a lightweight JavaScript date library)

## Credits

The Work Day Scheduler app was created by [Your Name].


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Image
![Alt text](<Screenshot 2023-07-09 194931.png>)