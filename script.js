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
    "00:00-01:00",
    "01:00-02:00",
    "02:00-03:00",
    "03:00-04:00",
    "04:00-05:00",
    "05:00-06:00",
    "06:00-07:00",
    "07:00-08:00",
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
    "19:00-20:00",
    "20:00-21:00",
    "21:00-22:00",
    "22:00-23:00",
    "23:00-00:00",
]

$('#timeblocks').on('click', 'button', function(){
    let hourPlan = $('<button>');
    timeblocks.button.append(hourPlan)
})



// if (currentHour === currentTime) {
//     display .present
// } else if (currentHour > currentTime) {
//     display .future
// } else if (currentHour < currentTime) {
//     display.past
// }