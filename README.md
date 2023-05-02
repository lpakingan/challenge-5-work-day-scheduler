# Bootcamp Challenge #5: Work Day Scheduler

## Summary of the Challenge

In this week's challenge, we were tasked with creating a simple calendar application that allows the user to save events for each hour of their work day. The app featured elements that were dynamically updated using jQuery on HTML and CSS. 

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Strategy
This week's assignment required jQuery in order for the webpage to function. The main functionality of the website relied on the usage of **Day.js**. This JavaScript library allowed for the parsing of  real-time and therefore gave the ability for the webpage to determine what the current time was and how it compared to the timeblock hours. 

The hourly timeblock hour IDs followed a 24hr format for simpler comparison calculations (i.e 3pm being 15). If the hour ID was less than the current hour, the 'future' class was added to the specific timeblock, making it green. If the hour ID matched with the current hour, the 'present' class was added and the specific timeblock turned red. Only one present class was added to one timeblock at a time. Lastly, if the hour ID was greater than the current hour, the 'past' class was added and the timeblock turned gray. An each() method was used to iterate through all the timeblocks within the timeblock container at once, allowing for the webpage to show all the timeblocks with the appropriate classes added at the same time.

User input was stored locally by creating a storage item containing the hour ID along with the user input. Whenever the page initializes, the local storage is checked by hour ID and if there is a match the webpage description for that specific timeblock has the value of the user input. 

The functionality of the scheduler is shown below:

![](https://github.com/lpakingan/challenge-5-work-day-scheduler/blob/main/assets/demos/scheduler_demo.gif)

## Resources Used
- W3Schools
- MDN Web Docs
- Stack Overflow
- [Day.js Documentation](https://day.js.org/docs/en/display/format)
- [jQuery Documentation](https://api.jquery.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)


## Deployed Application
The final deployed webpage can be found [here](https://lpakingan.github.io/challenge-5-work-day-scheduler/).
