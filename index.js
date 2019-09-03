/*
$(document).ready(function () {
    $("#image").animate({ width: 'toggle' }), "fast";

});
*/
/*COPIE EMAIL TO CLIPBOARD*/

/* Copy text (email) to clipboard. */
/*
var textarea = "cerrotti@protonmail.com"
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
*/
/* lazy load */
$(document).ready(function () {
    let images = document.querySelectorAll(".lazyload");
    lazyload(images);
});

$(document).ready(function () {
    $(".section").hide();
    /*  $(".moveUp").hide();*/
});

function loadDocument() {
    $(document).ready(function () {
        $(".section").hide();
    });
};

/* Animation for custome buttons */
function changeImageOnHover(element, imageName1, imageName2) {
    $(element).hover(function () {
        newImgSrc = imageName1;
        $(this).attr("src", newImgSrc);
        $(element).mouseout(function () {
            oldImgSrc = imageName2;
            $(this).attr("src", oldImgSrc);
        });
    });
};
/* ANIMATED ARROW BUTTON */
changeImageOnHover('#moveUp', "images/arrowUp.png", "images/arrow.png");
/* ANIMATED ENVELOPE BUTTON*/
changeImageOnHover('#emailImage', "images/emailOpen.png", "images/emailClosed.png");


/*Scroll to top of page */
function scrollPageToTop(element) {
    $(element).click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });
};

/*Go to external page */
var urlLMB = "https://www.ccv.adobe.com/v1/player/ccv/3o6bAEcNfCs/embed?bgcolor=%23191919&lazyLoading=true";

function goToExternalPage(element, urlName) {
    $(element).click(function (event) {
        event.preventDefault();
        $(location).attr('href', urlName);
    });
};

/* Scroll to target*/
function scrollPageToSection(element, target) {
    $(element).click(function () {
        $(".moveUp").show(); // shows arrow button.//
        $(".homeImage").hide(); //hides home image.//
        $(".MyName").hide(); //hides my name.//
        $(".section").hide(); // hides all sections.//
        $(target).show();
        $("html,body").animate({
            scrollTop: $(target).offset().top
        }, "slow");
    });
};

scrollPageToSection(".Part2", "#sanduskyPagePart2");
scrollPageToSection(".iconFrontend", "#FrontEnd");
scrollPageToSection(".iconUX", "#UXDesign");
scrollPageToSection(".iconAnimation", "#AnimationSamplesPage");
scrollPageToSection(".iconIllustration", "#IllustrationKinds");


/* Show and scroll to target*/
function scrollToAndShow(element, target, buttonName) {
    $(element).click(function () {
        $(".moveUp").show(); // shows arrow button.//
        $(".homeImage").hide(); //hides home image.//
        $(".MyName").hide(); //hides my name.//
        $(".section").hide(); // hides all sections.//
        $(target).show();
        $(buttonName).show();
        $("html,body").animate({
            scrollTop: $(header).offset().top
        }, "slow");

    });
};

//Go Home//
function goHome(element) {
    $(element).click(function () {
        $(".moveUp").hide();
        $(".homeImage").show();
        $(".MyName").show();
        $(".section").hide();
    });
}

/*ARROW UP BUTTON */
scrollPageToTop('#moveUp');
/*LOGO BUTTON*/

goHome(".blinkImage");
goHome("#homeFooter", "");

/*TOP NAV BUTTONS*/

/*TOP NAV HOME BUTTON*/
goHome("#homeMenu", "");
/*TOP NAV ABOUT BUTTON*/
scrollToAndShow("#aboutMenu", "#about", "#empty");

/*TOP NAV- DROP DOWN MENU BUTTONS*/

/*UX SAMPLES BUTTONS*/
scrollToAndShow("#goToSandusky", "#sanduskyPagePart1", "#backUX"); //FROM UX PAGE//
scrollToAndShow("#goToLunch", "#LunchMoneyBuddyPage", "#backUX"); //FROM UX PAGE//
scrollToAndShow("#goToReminder", "#ReminderXPage", "#backUX"); //FROM UX PAGE//
scrollToAndShow("#goToPapaJohns", "#PapaJohnsPage", "#backUX"); //FROM UX PAGE//
scrollToAndShow("#goToBeautiful", "#BeautifulPage", "#backUX"); //FROM UX PAGE//
scrollToAndShow("#cartoon", "#childIllustration", "#backIllustrations"); //FROM ILLUSTRATION PAGE//
scrollToAndShow("#infographic", "#InfoIllustration", "#backIllustrations"); //FROM ILLUSTRATION PAGE//

/*DROP MENU SECTION BUTTONS*/
scrollToAndShow("#ui", "#FrontEnd", "#empty"); //FROM DROP. MENU//
scrollToAndShow("#backFrontEnd", "#FrontEnd", "#empty"); //BACK BUTTON//
scrollToAndShow("#anima", "#AnimationSamplesPage", "#empty"); //FROM DROP. MENU//
scrollToAndShow("#illust", "#IllustrationKinds", "#empty"); //FROM DROP. MENU//
scrollToAndShow("#backIllustrations", "#IllustrationKinds", "#empty"); //BACK BUTTON//
scrollToAndShow("#ux", "#UXDesign", "#empty"); //FROM DROP. MENU//
scrollToAndShow("#backUX", "#UXDesign", "#empty"); //BACK BUTTON//

/*HOME PAGE ICON BUTTONS*/
scrollToAndShow(".iconFrontend", "#FrontEnd", "#empty");
scrollToAndShow(".iconUX", "#UXDesign", "#empty");
scrollToAndShow(".iconAnimation", "#AnimationSamplesPage", "#empty");
scrollToAndShow(".iconIllustration", "#IllustrationKinds", "#empty");


/*FROM GALERY CARDS*/
scrollToAndShow("#sanduskyCardUX", "#sanduskyPagePart1", "#backUX");
scrollToAndShow("#sanduskyCardImage", "#sanduskyPagePart2", "#backFrontEnd");
scrollToAndShow("#rfidCardImage", "#rfidDesignPage", "#backFrontEnd");
scrollToAndShow("#spoonCardImage", "#spoonDesignPage", "#backFrontEnd");
scrollToAndShow("#childrenCardIllust", "#childIllustration", "#backIllustrations");
scrollToAndShow("#otherCardIllust", "#InfoIllustration", "#backIllustrations");
scrollToAndShow("#lunchMoneyCardUX", "#LunchMoneyBuddyPage", "#backUX");
scrollToAndShow("#reminderCardUX", "#ReminderXPage", "#backUX");
scrollToAndShow("#beautifulCardUX", "#BeautifulPage", "#backUX");
scrollToAndShow("#papaCardUX", "#PapaJohnsPage", "#backUX");

/*UI FRONT END PROJECT PAGE BUTTONS*/
scrollToAndShow("#sandusky", "#sanduskyPagePart2", "#backFrontEnd");
scrollToAndShow("#rfid", "#rfidDesignPage", "#backFrontEnd");
scrollToAndShow("#restaurante", "#spoonDesignPage", "#backFrontEnd");

/*Internal link to UX section*/
scrollToAndShow(".UXLink", "#UXDesign", "#backSpoon");
scrollToAndShow(".PartILink", "#sanduskyPagePart1", "#backFrontEnd");
scrollToAndShow(".PartIILink", "#sanduskyPagePart2", "#backUX");
scrollToAndShow("#backSpoon", "#spoonDesignPage", "#backFrontEnd");

/*Email from the Envelope image*/
$(".emailImage").click(function () {
    var email = 'cerrotti@protonmail.com';
    window.location = 'mailto:' + email;
});

/*Move to specific section*/
/*
$(document).ready(function () {

    $("#up").click(function () {
        $("#blink").show();
        $("#home").hide();
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1000);
    });
});
*/

/*Tool tip Function*/
function toolTipFunction(element) {
    $(document).ready(function () {
        $(element).tooltip()
    });
};
/* EMAIL TOOL TIP */
toolTipFunction("#emailTooltip");
toolTipFunction("#OpenNewSiteTooltip");
toolTipFunction("#LightningPageTooltip");
toolTipFunction("#SpoonPageTooltip");
toolTipFunction("#photographyPageTooltip");
toolTipFunction(".BehanceTooltip");
toolTipFunction("#quizPageTooltip");
toolTipFunction("#dribbbleTooltip");
toolTipFunction("#dribbbleCardTooltip");
toolTipFunction("#QuizCardTooltip");



/* Social Media Sharing */
function SocialSharing(socialButton, url) {
    $(socialButton).click(function () {
        window.open(url, '_blank');
    });
}
SocialSharing("#social-tw", "https://www.twitter.com/home?status=www.cerrottiadriana.com%20Adriana%20Cerrotti's%20Portfolio.%20UX/UI%20Designer%20and%20Developer.");
SocialSharing("#social-fb", "https://www.facebook.com/sharer/sharer.php?u=www.cerrottiadriana.com");
SocialSharing("#social-lk", "https://www.linkedin.com/shareArticle?mini=true&url=www.cerrottiadriana.com&title=Adriana%20Cerrotti's%20Portfolio%20(UI/UX%20Designer%20and%20Developer)&summary=&source=");
