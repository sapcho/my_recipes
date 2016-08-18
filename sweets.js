var cupcakes = [{
    name: "עוגת בננה",
    img: "images/banana_bread.jpg",
    groceries: ["100 גרם שוקולד מריר", "1.5 כוסות חלב", "1/3 כוס סוכר"],
    description: "לערבב הכל בקערה, לשמן תבנית ולאפות 40 דקות ב-150 מעלות חום"
}, {
    name: "אינגליש קייק",
    img: "",
    groceries: ["גבינה", "סוכר"],
    description: ""
}, {
    name: "עוגת גזר",
    img: "images/carrot_cake.jpg",
    groceries: ["כוס סוכר", "4-5 גזרים גדולים", "2 כוסות קמח תופח"],
    description: "להקציף ביצים ובהדרגה להוסיף קמח. בסוף לאפות ב-50 מעלות חום כ-40 דקות"
}, {
    name: "עוגת שוקולד",
    img: "",
    groceries: ["כוס קמח", "כוס וחצי סוכר"],
    description: "לערבב הכל ולתנור"
}, {
    name: "עוגה יבשה",
    img: "",
    groceries: ["חלב", "סוכר", "קמח"],
    description: "לערבב לאפות ולאכול"
}];

$(function () {
    $("#cupcake").click(function () {
        $('#popup-cupcake #cake-list').empty();
        var index = 0;
        cupcakes.forEach(function (obj) {
            var str = '<div index="' + index + '" class="recipe-cupcakes">' + obj.name + '</div>';
            $('#popup-cupcake #cake-list').append(str);
            index++;
        })
    });

    $(document).on("click",".recipe-cupcakes",function () {
        $('#popup-cupcake #recipe-item').empty();
        $(".recipe-cupcakes").hide();
        var itemIndex = $(this).attr('index');
        var x = 0;
        cupcakes.forEach(function (obj) {
            if (x == itemIndex) {
                var name = '<h1 class="recipe-title">' + obj.name + '</h1>';
                $('#popup-cupcake #recipe-item').append(name);
                if ((obj.img).length) {
                    var img = '<a><img class="recipe-img" src="' + obj.img + ' "></a>';
                    $('#popup-cupcake #recipe-item').append(img);
                }
                else {
                    console.log((obj.img).length);
                    var img = '<a><img class="recipe-img" src="images/image-coming-soon.png"></a>';
                    $('#popup-cupcake #recipe-item').append(img);
                }
                var gro = '<p class="recipe-gro"><u>מצרכים:</u><br>' + obj.groceries + '</p>';
                $('#popup-cupcake #recipe-item').append(gro);
                var des = '<p class="recipe-des"><u>הוראות הכנה:</u><br>' + obj.description + '</p>';
                $('#popup-cupcake #recipe-item').append(des);
            }
            x++;
        });
    });
})







/*


$("#groceries-list").click(function () {
    $('#popup-cupcake #recipe-item').empty();
    cupcakes.forEach(function (obj) {
        var title = '<div class="recipe-item">' + obj.title + '</div>';
        $('#popup-cupcake #cake-list').append(title);
        var img = '<div class="recipe-item">' + obj.img + '</div>';
        $('#popup-cupcake #cake-list').append(img);
        var groc = '<div class="recipe-item">' + obj.groceries + '</div>';
        $('#popup-cupcake #cake-list').append(groc);
        var des = '<div class="recipe-item">' + obj.description + '</div>';
        $('#popup-cupcake #cake-list').append(des);
    })
    // $('#sweets').css("display", "block");
});

*/










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