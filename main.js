/*date
document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
*/


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

$("#home-btn").click(function () {
    $("#home").show();
    $("#sweets").hide();
    $("#food").hide();
});

$("#sweets-btn").click(function () {
    $("#sweets").show();
    $("#home").hide();
    $("#food").hide();
});

$("#food-btn").click(function () {
    $("#food").show();
    $("#home").hide();
    $("#sweets").hide();
});


/*
$("#sweets-btn").on("click", function () {
    if (displayIsNone($("#sweets-icon"))) {
        $("#sweets-icon").css("display", "flex");
    } else {

    }
})

$("#cupcake").on("click", function () {
    $("#sweets-icon").css("display", "none");
    $("#popup-cupcake").css("display", "block");
})



function displayIsNone (item) {
    if (item.css('display') == 'none') {
        return true;
    }
    else
       return false;
}*/

















