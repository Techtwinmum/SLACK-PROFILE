document.addEventListener("DOMContentLoaded", function() {
    function getCurrentDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfTheWeek = daysOfWeek[today.getUTCDay()];
        return dayOfTheWeek;
    }

    function updateDateTime() {
        const currentDate = new Date();
        
        // Display the day of the week
        const dayOfTheWeek = getCurrentDayOfTheWeek();
        document.querySelector('[data-testid="currentDayOftheWeek"]').textContent = dayOfTheWeek;

        // Display the UTC time
        var currentUTCTime = currentDate.toISOString(); // Format as ISO string
        document.querySelector('[data-testid="currentUTCTime"]').textContent = "UTC Time: " + currentUTCTime;
    }

    // Call the updateDateTime function to initially display the date and time
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
});
