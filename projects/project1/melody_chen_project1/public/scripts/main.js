'use strict';

var app = {};

// app.changeLanguage = () => {
//     let englishTrue = 1;
//     const languageButton = $("#en");
//     languageButton.on("click", function(){
//         if(englishTrue){
//             languageButton.html(`Fr <span class="drop-down">
//                 <i class="fas fa-angle-down"></i><span>`);
//             englishTrue = 0;
//         }else{
//             languageButton.html(`En <span class="drop-down">
//                 <i class="fas fa-angle-down"></i><span>`);
//             englishTrue = 1;
//         }
//     });
// };

function googleTranslateElementInit() {
    var gt = new google.translate.TranslateElement({
        pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
    console.log(gt);
}

app.init = function () {
    app.stylingGoogleTranslate();
};

// document ready;
$(function () {
    app.init();
});

//https://codepen.io/j_holtslander/pen/PjPWMe
//Pen BY Jay Holtslander

app.stylingGoogleTranslate = function () {

    // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *").css({
            'color': '#4c6280'
            // 'background-color': '#fafcff'
        });
        // Change menu's padding
        // $("iframe").contents().find('.goog-te-menu2-item-selected').css('display', 'none');

        // Change menu's padding
        // $("iframe").contents().find('.goog-te-menu2').css('padding', '0px');

        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '10px');

        // Change the width of the languages
        // $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        // $("iframe").contents().find('td').css('width', '100%');

        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#ff5c72').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0px 20px 30px 0px rgba(125, 147, 178, 0.3)');

        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '45%',
            'width': '100%',
            'top': '0px'
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
    });
};