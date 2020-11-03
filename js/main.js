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

// Searchbar

$(".header-menu .search-btn").on("click", function() {
    $(".searchbar-wrapper").toggleClass("hide");
    $(".header-menu .search-btn img").attr("src", function(index, attr) {
        return attr != "img/close.png" ? "img/close.png" : "img/icon3.png";
    });
})

// Mobile menu

$(".catalog-ul > li.catalog-item > a").on("click", function() {
    $(".mobile-menu-subcatalog").addClass("active");
});

$(".catalog-ul > li").on("click", function() {
    console.log(this);
})

// Close button

$(".mobile-menu-catalog .close-btn, .mobile-menu-subcatalog .close-btn").on("click", function() {
    $(".mobile-menu-catalog, .mobile-menu-subcatalog").removeClass("active");
})
