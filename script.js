document.addEventListener("DOMContentLoaded", function() {
    function getCurrentDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesay", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfTheWeek = daysOfWeek[today.getUTCDay()];
        return dayOfTheWeek;
        
        
    }

function updateDateTime() {
    const currentDate = new Date();
    
    
    
}






document.querySelector('[data-testid="currentDayOfTheeWeek"]').textContent = currentday = getCurrentDayOfTheWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime();

})

 