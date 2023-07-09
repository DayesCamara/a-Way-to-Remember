// Set the date at the top of the page
$("#currentDay").text(dayjs().format("dddd, MMMM Do"));

// Set the status of each time-block
$(".time-block").each(function () {
    var currentTime = dayjs().hour();
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlock < currentTime) {
        $(this).addClass("past");
    } else if (timeBlock === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});

// Load any saved data from localStorage
$(".description").each(function () {
    var timeBlock = $(this).parent().attr("id");
    var savedData = localStorage.getItem(timeBlock);
    if (savedData) {
        $(this).val(savedData);
    }
});

// Save the data to localStorage on change event
$(".description").on("change", function () {
    var timeBlock = $(this).parent().attr("id");
    var description = $(this).val();
    localStorage.setItem(timeBlock, description);
});
