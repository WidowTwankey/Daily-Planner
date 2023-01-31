let currentTime = $('#currentDay');
currentTime.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

let datetime = null;
let updateTime = function () {
    datetime.html(moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
$(document).ready(function () {
    datetime = $('#currentDay')
    updateTime();
    setInterval(updateTime, 1000);
});

let timeBlocks = $("#timeblocks");

times = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00"
]

$('#timeblocks').on('click', "button", function(event) {
    let hourPlan = event.target.closest('button')
    hourPlan.attr('type', 'text')
})

let currentHour = moment().hour();


if (currentHour === currentTime) {
    display .present
} else if (currentHour > currentTime) {
    display .future
} else if (currentHour < currentTime) {
    display.past
}