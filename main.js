/*new date*/
document.getElementById("date_time").innerHTML = date_time();

function date_time()
{
    var date = new Date;
    // var year = date.getFullYear();
    var month = date.getMonth();
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var d = date.getDate();
    var day = date.getDay();
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var h = date.getHours();
    if(h<10)
    {
        h = "0"+h;
    }
    var m = date.getMinutes();
    if(m<10)
    {
        m = "0"+m;
    }
    var s = date.getSeconds();
    if(s<10)
    {
        s = "0"+s;
    }
    var result = ''+days[day]+' '+months[month]+' '+d+' - '+h+':'+m+':'+s;
    document.getElementById('date_time').innerHTML = result;
    setTimeout('date_time("'+'date_time'+'");','1000');
    return true;
}
/*new date*/

/*menu options*/
$("#home-btn").click(function () {
    $("#home").show();
    $("#sweets").hide();
    $("#food").hide();
});

$("#sweets-btn").click(function () {
    $("#sweets").show();
    $("#home").hide();
    $("#food").hide();
    $(".recipes").hide();
    $("#sweets-icon").show();
    $('#popup-cupcake #recipe-item').empty();

});

$("#food-btn").click(function () {
    $("#food").show();
    $("#home").hide();
    $("#sweets").hide();
});
/*menu options*/

/*back button*/
$(".back").click(function (event) {
    var target = $( event.target );
    if ( target.is( "button" ) ) {
        $('#popup-cupcake #recipe-item').empty();
        target.parent().hide();
        $("#sweets-icon").show();
    }
});
/*back button*/

/*sweets options*/
$("#cupcake").click(function () {
    $("#popup-cupcake").show();
    $("#sweets-icon").hide();
});

/*sweets options*/












