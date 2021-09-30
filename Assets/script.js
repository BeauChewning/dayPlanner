function unpdateTime() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(time);
};

unpdateTime();
setInterval(function () {
    unpdateTime();

}, 1000);


$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        console.log("test")
        var value = $(this).siblings('.description').val();
        var time = $('this').parent().attr('id');
        console.log(value);
        console.log(time)

    })
    var currentHour = moment().hours();
    console.log(currentHour);

})

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
    
    }
  }
}
