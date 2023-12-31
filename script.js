document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        // Get the current date and time
        const currentDate = new Date();
        
        // Display the day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfTheWeek = daysOfWeek[currentDate.getUTCDay()];
        const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        if (dayOfTheWeekElement) {
            dayOfTheWeekElement.textContent =dayOfTheWeek;
        }

        // Display the UTC time
        const currentUTCTime = new Date().getTime()//
        const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
        if (utcTimeElement) {
            utcTimeElement.textContent = currentUTCTime;
        }
    }

    // Call the updateDateTime function to initially display the date and time
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
});
