var cupcakes = [{
    title: "עוגת בננה",
    img: "",
    groceries: ["", "", ""],
    description: ""
}, {
    title: "אינגליש קייק",
    img: "",
    groceries: ["", "", ""],
    description: ""
}, {
    title: "עוגת גזר",
    img: "",
    groceries: ["", "", ""],
    description: ""
}];

$("#cupcake").click(function () {
    $('#popup-cupcake #table').empty();
    cupcakes.forEach(function (obj) {
        var str = '<div class="recipe-button">' + obj.title + '</div>';
        $('#popup-cupcake #table').append(str);
    })
    // $('#sweets').css("display", "block");
});












/*JS example append chile from json*/
/*
 document.getElementById("cupcake").addEventListener("click", function(){

 for(var i = 0; i < cupcakes.length; i++){
 var div = document.createElement('div');
 div.innerHTML = cupcakes[i].title;
 div.className = "recipe-button";
 document.getElementById('table').appendChild(div);
 }
 //tbl.style.margin= '100px';
 });
 */