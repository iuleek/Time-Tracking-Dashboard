const dailyClick = document.querySelector("#daily");
const weeklyClick = document.querySelector("#weekly");
const monthlyClick = document.querySelector("#monthly");
const dailyDisplay = document.querySelectorAll(".dailyDisplay");
const weeklyDisplay = document.querySelectorAll(".weeklyDisplay");
const monthlyDisplay = document.querySelectorAll(".monthlyDisplay");

window.addEventListener('load', function () {
 


    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }

});
dailyClick.addEventListener("click", function name() {
    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }
})
weeklyClick.addEventListener("click", function name() {
    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.remove("hidden");
    }
})
monthlyClick.addEventListener("click", function name() {
    // display dailyDisplay div and hide others
    for (const element of dailyDisplay) {
        element.classList.add("hidden");
    }
    for (const element of monthlyDisplay) {
        element.classList.remove("hidden");
    }
    for (const element of weeklyDisplay) {
        element.classList.add("hidden");
    }
})
