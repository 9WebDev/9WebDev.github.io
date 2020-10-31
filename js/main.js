$(".catalog-ul > li > a").mouseover(function() {
    if ($(".catalog-ul > li > a").hasClass("active")) {
        $(".catalog-ul > li > a").removeClass("active");
    }
    $(".subcatalog-ul > li > a").removeClass("active");
    $(".sidebar-nav .info").removeClass("active");
    $(this).addClass("active");
});
$(".subcatalog-ul > li > a").mouseover(function() {
    if ($(".subcatalog-ul > li > a").hasClass("active")) {
        $(".subcatalog-ul > li > a").removeClass("active");
    }
    $(this).addClass("active");
    $(".sidebar-nav .info").addClass("active")
});
$(".subcatalog-ul > li > a").mouseout(function() {
    // $(".sidebar-nav .info").removeClass("active");
});
$(".sidebar-nav .info a").mouseover(function() {
    if ($(".sidebar-nav .info a").hasClass("active")) {
        $(".sidebar-nav .info a").removeClass("active");
    }
    $(this).addClass("active");
})
$(".sidebar-nav .info a").mouseout(function() {
    if ($(".sidebar-nav .info a").hasClass("active")) {
        $(".sidebar-nav .info a").removeClass("active");
    }
})

$(document).on("click", function(e) {
    var listOfLinks = $(".sidebar-nav a");
    listOfLinks.each(function(item) {
        if (e.target != listOfLinks[item]){
            $(".sidebar-nav a, .sidebar-nav .info").removeClass("active");
        }
    })
})
// var listOfLinks = $(".sidebar-nav a");
// listOfLinks.each(function(item) {
//     console.log(listOfLinks[item]);
// })
// $(".catalog-ul a, .info").mouseover(function() {
//     $(".sidebar-nav .info").addClass("active")
// });
// $(".catalog-ul a").mouseout(function() {
//     $(".sidebar-nav, .info").removeClass("active")
// });
