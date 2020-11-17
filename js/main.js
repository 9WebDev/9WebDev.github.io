$(".catalog-ul > li.catalog-item > a").mouseover(function() {
    if ($(document).width() >= 1024) {
        if ($(".catalog-ul > li > a").hasClass("active")) {
            $(".catalog-ul > li > a").removeClass("active");
        }
        $(".subcatalog-ul li > a").removeClass("active");
        $(".sidebar-nav .info").removeClass("active");
        $(this).addClass("active");
        $("#back-drop").removeAttr("style");
        $(".sidebar-nav .info").removeAttr("style");
        var test = $(this).parent()[0];
        $(test).hasClass("direct-info") ? $(".sidebar-nav .info").addClass("direct-active") : $(".sidebar-nav .info").removeClass("direct-active");
        $(test).hasClass("direct-info-var2") ? $(".sidebar-nav .info2").addClass("direct-active") : $(".sidebar-nav .info2").removeClass("direct-active");
        switch ($(this).attr("data-id")) {
            case "7":
                $(".sidebar-nav .info .ad-offer").attr("href", "https://waste.ua/index.php?page=ads&parent_id=88&adtype=0");
                break;
            default:
                $(".sidebar-nav .info .ad-offer").attr("href", "#");
        }
    }
});
$(".subcatalog-ul > li > a").mouseover(function() {
    if ($(document).width() >= 1024) {
        if ($(".subcatalog-ul li > a").hasClass("active")) {
            $(".subcatalog-ul li > a").removeClass("active");
        }
        $(this).parent().parent().hasClass("mCS_no_scrollbar_y") ? $(".sidebar-nav .info").css("left", "538px") : $(".sidebar-nav .info").removeAttr("style");
        $(this).addClass("active");
        $(".sidebar-nav .info").addClass("active");
        switch ($(this).attr("data-id")) {
            case "1-1":
                $(".sidebar-nav .info .ad-offer").attr("href", "https://waste.ua/index.php?page=ads&category_id=20&adtype=0");
                break;
            case "3-1":
                $(".sidebar-nav .info .ad-search").attr("href", "https://waste.ua/index.php?page=ads&category_id=60&adtype=1");
                break;
            case "4-2":
                $(".sidebar-nav .info .ad-offer").attr("href", "https://waste.ua/index.php?page=ads&category_id=63&adtype=0");
                break;
            default:
                $(".sidebar-nav .info .ad-offer").attr("href", "#");
                $(".sidebar-nav .info .ad-search").attr("href", "#");
        }
    }
});

$(".sidebar-nav .info a").mouseover(function() {
    if ($(document).width() >= 1024) {
        if ($(".sidebar-nav .info a").hasClass("active")) {
            $(".sidebar-nav .info a").removeClass("active");
        }
        $(this).addClass("active");
    }
});

$(".sidebar-nav .info a").mouseout(function() {
    if ($(document).width() >= 1024) {
        if ($(".sidebar-nav .info a").hasClass("active")) {
            $(".sidebar-nav .info a").removeClass("active");
        }
    }
});

// $(document).on("click", function(e) {
//     if ($(document).width() >= 1024) {
//         var listOfLinks = $(".sidebar-nav a");
//         listOfLinks.each(function(item) {
//             if (e.target != listOfLinks[item]){
//                 $(".sidebar-nav a, .sidebar-nav .info").removeClass("active");
//                 $(".sidebar-nav .info").removeClass("direct-active")
//                 $(".sidebar-nav .info2").removeClass("direct-active");
//                 $("#back-drop").css("display", "none");
//             }
//         })
//     }
// });

$("#back-drop").on("click", function() {
    $(".sidebar-nav a, .sidebar-nav .info").removeClass("active");
    $(".sidebar-nav .info").removeClass("direct-active")
    $(".sidebar-nav .info2").removeClass("direct-active");
    $("#back-drop").css("display", "none");
});
$(".header").on("click", function() {
    $(".sidebar-nav a, .sidebar-nav .info").removeClass("active");
    $(".sidebar-nav .info").removeClass("direct-active")
    $(".sidebar-nav .info2").removeClass("direct-active");
    $("#back-drop").css("display", "none");
});

// Close open menu on tablet and mobile size

$(window).resize(function() {
    if ($(window).width() <= 1023) {
        $(".catalog-ul > .catalog-item > a").removeClass("active");
        $("#back-drop").css("display", "none");
        $(".info, .info2").removeClass("active");
        $(".info, .info2").removeClass("direct-active");
    }
});

// Searchbar

$(".header-menu .search-btn").on("click", function() {
    $(".searchbar-wrapper").toggleClass("hide");
    $(".header-menu .search-btn img").attr("src", function(index, attr) {
        return attr != "img/close.png" ? "img/close.png" : "img/icon3.png";
    });
})

// Mobile menu

$(".catalog-ul > li").on("click", function() {
    $(".mobile-menu-subcatalog").addClass("active");
    if ($(this).hasClass("direct-info")) {
        $(".mobile-menu-info2").addClass("active")
    } else if ($(this).hasClass("direct-info-var2")) {
        $(".mobile-menu-info3").addClass("active");
    }
});

// Close button

$(".mobile-menu-catalog .close-btn, .mobile-menu-subcatalog .close-btn").on("click", function() {
    $(".mobile-menu-catalog, .mobile-menu-subcatalog, .mobile-menu-info, .mobile-menu-info2, .mobile-menu-info3").removeClass("active");
    $(".mobile-menu-subcatalog ul div").empty();
    $(".mobile-menu-subcatalog .subtitle .arrow-back").css("display", "none");
    $(".mobile-menu-subcatalog").removeAttr("style");
    $("body").removeAttr("style");
})

// Data update

$(".catalog-ul li").on("click", function() {
    var liItems = $(this).find("ul li");
    var headLiItemText = $(this).children("a").text();
    $(".mobile-menu-subcatalog .subtitle a").text(headLiItemText);
    liItems.each((index) => {
        $(".mobile-menu-subcatalog ul div").append('<li class="mobile-subcatalog-item"><a href="#">' + $(liItems[index]).text() + '<span class="arrow"></span></a></li>');
    })
    if ($(".mobile-menu-subcatalog").hasClass("active")) {
        $("body").css("overflow", "hidden");
    }
})
// $(".mobile-menu-subcatalog .subtitle a").on("click", function() {
//     $("mobile-menu-info").removeClass("active");
// })

$(".mobile-menu-subcatalog div").on("click", "li.mobile-subcatalog-item",function() {
    var mobileInfoHeadText = $(this).children("a").text();
    $(".mobile-menu-info .title a").text(mobileInfoHeadText);
    $(".mobile-menu-subcatalog .subtitle .arrow-back").removeAttr("style");
    $(".mobile-menu-info").addClass("active");
    $(".mobile-menu-subcatalog").scrollTop(0);
    if ($(".mobile-menu-info").hasClass("active")) {
        $(".mobile-menu-subcatalog").css("overflow", "hidden");
    }
});

$(".mobile-menu-catalog li.mobile-catalog-item").on("click", function() {
    if ($(this).hasClass("mobile-direct-info")) {
        $(".mobile-menu-info2").addClass("active");
    } else if ($(this).hasClass("mobile-direct-info-var2")) {
        $(".mobile-menu-info3").addClass("active");
    }
});

var allCatalogItems = $(".catalog-ul").find(".catalog-item");
$(".mobile-menu-catalog li.mobile-catalog-item a").on("click", function() {
    var headTitleText = "";
    var subUl, subUlLiItems;
    allCatalogItems.each((index) => {
        if ($(this).text() === $(allCatalogItems[index]).children("a").text()) {
            headTitleText = $(allCatalogItems[index]).children("a").text();
            subUl = $(allCatalogItems[index]).children("ul")[0];
            subUlLiItems = $(subUl).find("li");

            $(subUlLiItems).each((index) => {
                console.log($(subUlLiItems[index]).children("a").text());
                $(".mobile-menu-subcatalog ul div").append('<li class="mobile-subcatalog-item"><a href="#">' + $(subUlLiItems[index]).children("a").text() + '<span class="arrow"></span></a></li>');
            })
            $(".mobile-menu-subcatalog .subtitle a").text(headTitleText);
        }
    })
});

$(".mobile-menu-subcatalog .title a").on("click", function() {
    $(".mobile-menu-subcatalog").removeClass("active");
    $(".mobile-menu-info").removeClass("active");
    $(".mobile-menu-info2").removeClass("active");
    $(".mobile-menu-info3").removeClass("active");
    $(".mobile-menu-catalog").addClass("active");
    $(".mobile-menu-subcatalog ul div").empty();
    $(".mobile-menu-subcatalog .subtitle .arrow-back").css("display", "none");
    $(".mobile-menu-subcatalog").removeAttr("style");
});

$(".mobile-menu-subcatalog .subtitle a").on("click", function() {
    $(".mobile-menu-info").removeClass("active");
    $(".mobile-menu-subcatalog .subtitle .arrow-back").css("display", "none");
    $(".mobile-menu-subcatalog").removeAttr("style");
});

$(".mobile-menu-catalog li.mobile-catalog-item a").on("click", function() {
    $(".mobile-menu-subcatalog").addClass("active");
    $(".mobile-menu-catalog").removeClass("active");
});


