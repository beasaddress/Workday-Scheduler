# Workday-Scheduler
A simple, easy to use workday scheduler that allows the user to make plans according to the time of day. The interface is simple, but interactive. If a user was to open up the app at the beginning of the day at 8am, the time slow are green and optimistic. As the day goes on, the current hour will display as red, to give a sense of urgency. Past time slots will turn grey as they will fade into the background of your day. When a user enters a tod do list item into a time slot, it is then saved into local storage so that if the page is refreshed, the user input persists. 

Using the dayjs library, the user has a clock at the top of their screen that is refreshing every second (thanks to setInterval()). The dayjs library is also vital tothe interactivity of the application. Some of the functions are interacting with the current hour of the day given to us by dayjs, so that the application know what color to display on the time block. 



