$(document).ready(function () {
    $("li#javascript").click(function () {
        $("p#say").prepend("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quam nulla tenetur officiis sit? Quoautnumquam minima itaque consequuntur?</p >")
        $("p").children("p").first().click(function () {
            $(this).remove();
        });

    });
$("li#operators").click(function () {
    $("p#lorem1").prepend("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quam nulla tenetur officiis sit? Quoautnumquam minima itaque consequuntur?</p >")
    $("p").children("p").first().click(function () {
        $(this).remove();
    });
});
$("li#variables").click(function () {
    $("p#lorem2").prepend("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quam nulla tenetur officiis sit? Quoautnumquam minima itaque consequuntur?</p >")
    $("p").children("p").first().click(function () {
        $(this).remove();
    });
});
$("li#functions").click(function () {
    $("p#lorem4").prepend("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quam nulla tenetur officiis sit? Quoautnumquam minima itaque consequuntur?</p >")
    $("p").children("p").first().click(function () {
        $(this).remove();
    });
});
$("li#strings").click(function () {
    $("p#lorem5").prepend("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quam nulla tenetur officiis sit? Quoautnumquam minima itaque consequuntur?</p >")
    $("p").children("p").first().click(function () {
        $(this).remove();
    });
});

});
