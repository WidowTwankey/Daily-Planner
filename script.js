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
    colorCode();
    setInterval(colorCode, 60000);
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

$('#timeblocks').on('click', "div", function (event) {
    let hourPlan = event.target.closest('div')
    console.log(hourPlan)
    $('<input>')
   // hourPlan.attr('type', 'text')
})

function colorCode() {
    let currentHour = moment().hour();
    let hourDivs = $('#timeblocks div');

    hourDivs.each(function () {

        const thisHour = parseInt($(this).attr("data-hour"));

        if (currentHour > thisHour) {
            $(this).removeClass("present")
            $(this).addClass("past")
        } else if (currentHour < thisHour) {
            $(this).removeClass("present")
            $(this).addClass("future")
        } else if (currentHour === thisHour) {
            $(this).removeClass("future")
            $(this).addClass("present")
        }
    })
}


