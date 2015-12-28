(function () {
    "use strict";

    // declare the constructor function
    var constants = {};

    // site name 
    constants.siteName = "Kirpal Singh";

    // site settings
    constants.siteSettings = {};

    // Is user found
    constants.isUserFound = true;

    constants.user = {
        name: "Kirpal Singh",
        gender: "male"
    };
    
    // Enroll module constants
    constants.enrollFormClasses = ["form-group", "animated", "fadeInDown"];

    constants.oAuthClasses = ["connectOptionGrid", "animated", "zoomIn"];


    // Main app controller 
    constants.userActionClasses = ["userActions"];

    // Reg-Exp for form validations
    constants.validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // create hints options
    constants.createHints = [{
        wrapperClass: "selectPicture",
        iconClass: "fa-file-image-o",
        autoOpen: true,
        header: "Sherlock mode !!!",
        id: 1
    }, {
        wrapperClass: "drawPicture",
        iconClass: "fa-paint-brush",
        brushWidths: ["font-19", "font-24", "font-31", "font-39"],
        selectedBrushWidth: "font-19",
        brushTypes: [{
            modeClass: "pencilMode",
            typeClass: "fa-pencil"
        }, {
            modeClass: "paintMode",
            typeClass: "fa-paint-brush"
        }, {
            modeClass: "eraserMode",
            typeClass: "fa-eraser"
        }],
        colorPallet: ["rgba(153, 153, 153, 0.75)", "#DD4E4E", "#F52", "#0CB", "rgb(76, 171, 82)", "rgb(193, 30, 82)", "rgba(193, 164, 21, 0.81)"],
        composedColor: { red: 100, green: 100, blue: 100 },
        composedStyle: { color: "rgb(100,100,100)" },
        colorComponents: [{ color: "red", colorClass: "redComponent" }, { color: "green", colorClass: "greenComponent" }, { color: "blue", colorClass: "blueComponent" }],
        header: "Picasso mode !!!",
        id: 2
    }, {
        wrapperClass: "capturePicture",
        autoOpen: true,
        iconClass: "fa-camera",
        header: "Paparazzi mode !!!",
        id: 3
    }, {
        wrapperClass: "recordSound",
        iconClass: "fa-microphone",
        header: "Rockstar mode !!!",
        id: 4
    }];


    constants.createIconOptions = [{
        id: 1,
        title: "Type it",
        typeClass: "fa-keyboard-o"
    }, {
        id: 2,
        title: "Browse it",
        autoOpen: true,
        typeClass: "fa-file-image-o"
    }, {
        id: 3,
        title: "Select it",
        faIconList: ['fa-adjust','fa-anchor','fa-archive','fa-area-chart','fa-arrows','fa-arrows-h','fa-arrows-v','fa-asterisk','fa-at','fa-balance-scale','fa-ban','fa-bar-chart','fa-barcode','fa-bars','fa-battery-empty','fa-battery-full','fa-battery-half','fa-battery-quarter','fa-battery-three-quarters','fa-bed','fa-beer','fa-bell','fa-bell-o','fa-bell-slash','fa-bell-slash-o','fa-bicycle','fa-binoculars','fa-birthday-cake','fa-bluetooth','fa-bluetooth-b','fa-bolt','fa-bomb','fa-book','fa-bookmark','fa-bookmark-o','fa-briefcase','fa-bug','fa-building','fa-building-o','fa-bullhorn','fa-bullseye','fa-bus','fa-calculator','fa-calendar','fa-calendar-check-o','fa-calendar-minus-o','fa-calendar-o','fa-calendar-plus-o','fa-calendar-times-o','fa-camera','fa-camera-retro','fa-car','fa-caret-square-o-down','fa-caret-square-o-left','fa-caret-square-o-right','fa-caret-square-o-up','fa-cart-arrow-down','fa-cart-plus','fa-cc','fa-certificate','fa-check','fa-check-circle','fa-check-circle-o','fa-check-square','fa-check-square-o','fa-child','fa-circle','fa-circle-o','fa-circle-o-notch','fa-circle-thin','fa-clock-o','fa-clone','fa-cloud','fa-cloud-download','fa-cloud-upload','fa-code','fa-code-fork','fa-coffee','fa-cog','fa-cogs','fa-comment','fa-comment-o','fa-commenting','fa-commenting-o','fa-comments','fa-comments-o','fa-compass','fa-copyright','fa-creative-commons','fa-credit-card','fa-crop','fa-crosshairs','fa-cube','fa-cubes','fa-cutlery','fa-database','fa-desktop','fa-diamond','fa-dot-circle-o','fa-download','fa-ellipsis-h','fa-ellipsis-v','fa-envelope','fa-envelope-o','fa-envelope-square','fa-eraser','fa-exchange','fa-exclamation','fa-exclamation-circle','fa-exclamation-triangle','fa-external-link','fa-external-link-square','fa-eye','fa-eye-slash','fa-eyedropper','fa-fax','fa-female','fa-fighter-jet','fa-file-archive-o','fa-file-audio-o','fa-file-code-o','fa-file-excel-o','fa-file-image-o','fa-file-pdf-o','fa-file-powerpoint-o','fa-file-video-o','fa-file-word-o','fa-film','fa-filter','fa-fire','fa-fire-extinguisher','fa-flag','fa-flag-checkered','fa-flag-o','fa-flask','fa-folder','fa-folder-o','fa-folder-open','fa-folder-open-o','fa-frown-o','fa-futbol-o','fa-gamepad','fa-gavel','fa-gift','fa-glass','fa-globe','fa-graduation-cap','fa-hand-lizard-o','fa-hand-paper-o','fa-hand-peace-o','fa-hand-pointer-o','fa-hand-rock-o','fa-hand-scissors-o','fa-hand-spock-o','fa-hashtag','fa-hdd-o','fa-headphones','fa-heart','fa-heart-o','fa-heartbeat','fa-history','fa-home','fa-hourglass','fa-hourglass-end','fa-hourglass-half','fa-hourglass-o','fa-hourglass-start','fa-i-cursor','fa-inbox','fa-industry','fa-info','fa-info-circle','fa-key','fa-keyboard-o','fa-language','fa-laptop','fa-leaf','fa-lemon-o','fa-level-down','fa-level-up','fa-life-ring','fa-lightbulb-o','fa-line-chart','fa-location-arrow','fa-lock','fa-magic','fa-magnet','fa-male','fa-map','fa-map-marker','fa-map-o','fa-map-pin','fa-map-signs','fa-meh-o','fa-microphone','fa-microphone-slash','fa-minus','fa-minus-circle','fa-minus-square','fa-minus-square-o','fa-mobile','fa-money','fa-moon-o','fa-motorcycle','fa-mouse-pointer','fa-music','fa-newspaper-o','fa-object-group','fa-object-ungroup','fa-paint-brush','fa-paper-plane','fa-paper-plane-o','fa-paw','fa-pencil','fa-pencil-square','fa-pencil-square-o','fa-percent','fa-phone','fa-phone-square','fa-picture-o','fa-pie-chart','fa-plane','fa-plug','fa-plus','fa-plus-circle','fa-plus-square','fa-plus-square-o','fa-power-off','fa-print','fa-puzzle-piece','fa-qrcode','fa-question','fa-question-circle','fa-quote-left','fa-quote-right','fa-random','fa-recycle','fa-refresh','fa-registered','fa-reply','fa-reply-all','fa-retweet','fa-road','fa-rocket','fa-rss','fa-rss-square','fa-search','fa-search-minus','fa-search-plus','fa-server','fa-share','fa-share-alt','fa-share-alt-square','fa-share-square','fa-share-square-o','fa-shield','fa-ship','fa-shopping-bag','fa-shopping-basket','fa-shopping-cart','fa-sign-in','fa-sign-out','fa-signal','fa-sitemap','fa-sliders','fa-smile-o','fa-sort','fa-sort-alpha-asc','fa-sort-alpha-desc','fa-sort-amount-asc','fa-sort-amount-desc','fa-sort-asc','fa-sort-desc','fa-sort-numeric-asc','fa-sort-numeric-desc','fa-space-shuttle','fa-spinner','fa-spoon','fa-square','fa-square-o','fa-star','fa-star-half','fa-star-half-o','fa-star-o','fa-sticky-note','fa-sticky-note-o','fa-street-view','fa-suitcase','fa-sun-o','fa-tablet','fa-tachometer','fa-tag','fa-tags','fa-tasks','fa-taxi','fa-television','fa-terminal','fa-thumb-tack','fa-thumbs-down','fa-thumbs-o-down','fa-thumbs-o-up','fa-thumbs-up','fa-ticket','fa-times','fa-times-circle','fa-times-circle-o','fa-tint','fa-toggle-off','fa-toggle-on','fa-trademark','fa-trash','fa-trash-o','fa-tree','fa-trophy','fa-truck','fa-tty','fa-umbrella','fa-university','fa-unlock','fa-unlock-alt','fa-upload','fa-user','fa-user-plus','fa-user-secret','fa-user-times','fa-users','fa-video-camera','fa-volume-down','fa-volume-off','fa-volume-up','fa-wheelchair','fa-wifi','fa-wrench','fa-hand-o-down','fa-hand-o-left','fa-hand-o-right','fa-hand-o-up','fa-ambulance','fa-subway','fa-train','fa-genderless','fa-mars','fa-mars-double','fa-mars-stroke','fa-mars-stroke-h','fa-mars-stroke-v','fa-mercury','fa-neuter','fa-transgender','fa-transgender-alt','fa-venus','fa-venus-double','fa-venus-mars','fa-file','fa-file-o','fa-file-text','fa-file-text-o','fa-cc-amex','fa-cc-diners-club','fa-cc-discover','fa-cc-jcb','fa-cc-mastercard','fa-cc-paypal','fa-cc-stripe','fa-cc-visa','fa-credit-card-alt','fa-google-wallet','fa-paypal','fa-btc','fa-eur','fa-gbp','fa-gg','fa-gg-circle','fa-ils','fa-inr','fa-jpy','fa-krw','fa-rub','fa-try','fa-usd','fa-align-center','fa-align-justify','fa-align-left','fa-align-right','fa-bold','fa-chain-broken','fa-clipboard','fa-columns','fa-files-o','fa-floppy-o','fa-font','fa-header','fa-indent','fa-italic','fa-link','fa-list','fa-list-alt','fa-list-ol','fa-list-ul','fa-outdent','fa-paperclip','fa-paragraph','fa-repeat','fa-scissors','fa-strikethrough','fa-subscript','fa-superscript','fa-table','fa-text-height','fa-text-width','fa-th','fa-th-large','fa-th-list','fa-underline','fa-undo','fa-angle-double-down','fa-angle-double-left','fa-angle-double-right','fa-angle-double-up','fa-angle-down','fa-angle-left','fa-angle-right','fa-angle-up','fa-arrow-circle-down','fa-arrow-circle-left','fa-arrow-circle-o-down','fa-arrow-circle-o-left','fa-arrow-circle-o-right','fa-arrow-circle-o-up','fa-arrow-circle-right','fa-arrow-circle-up','fa-arrow-down','fa-arrow-left','fa-arrow-right','fa-arrow-up','fa-arrows-alt','fa-caret-down','fa-caret-left','fa-caret-right','fa-caret-up','fa-chevron-circle-down','fa-chevron-circle-left','fa-chevron-circle-right','fa-chevron-circle-up','fa-chevron-down','fa-chevron-left','fa-chevron-right','fa-chevron-up','fa-long-arrow-down','fa-long-arrow-left','fa-long-arrow-right','fa-long-arrow-up','fa-backward','fa-compress','fa-eject','fa-expand','fa-fast-backward','fa-fast-forward','fa-forward','fa-pause','fa-pause-circle','fa-pause-circle-o','fa-play','fa-play-circle','fa-play-circle-o','fa-step-backward','fa-step-forward','fa-stop','fa-stop-circle','fa-stop-circle-o','fa-youtube-play','fa-500px','fa-adn','fa-amazon','fa-android','fa-angellist','fa-apple','fa-behance','fa-behance-square','fa-bitbucket','fa-bitbucket-square','fa-black-tie','fa-buysellads','fa-chrome','fa-codepen','fa-codiepie','fa-connectdevelop','fa-contao','fa-css3','fa-dashcube','fa-delicious','fa-deviantart','fa-digg','fa-dribbble','fa-dropbox','fa-drupal','fa-edge','fa-empire','fa-expeditedssl','fa-facebook','fa-facebook-official','fa-facebook-square','fa-firefox','fa-flickr','fa-fonticons','fa-fort-awesome','fa-forumbee','fa-foursquare','fa-get-pocket','fa-git','fa-git-square','fa-github','fa-github-alt','fa-github-square','fa-google','fa-google-plus','fa-google-plus-square','fa-gratipay','fa-hacker-news','fa-houzz','fa-html5','fa-instagram','fa-internet-explorer','fa-ioxhost','fa-joomla','fa-jsfiddle','fa-lastfm','fa-lastfm-square','fa-leanpub','fa-linkedin','fa-linkedin-square','fa-linux','fa-maxcdn','fa-meanpath','fa-medium','fa-mixcloud','fa-modx','fa-odnoklassniki','fa-odnoklassniki-square','fa-opencart','fa-openid','fa-opera','fa-optin-monster','fa-pagelines','fa-pied-piper','fa-pied-piper-alt','fa-pinterest','fa-pinterest-p','fa-pinterest-square','fa-product-hunt','fa-qq','fa-rebel','fa-reddit','fa-reddit-alien','fa-reddit-square','fa-renren','fa-safari','fa-scribd','fa-sellsy','fa-shirtsinbulk','fa-simplybuilt','fa-skyatlas','fa-skype','fa-slack','fa-slideshare','fa-soundcloud','fa-spotify','fa-stack-exchange','fa-stack-overflow','fa-steam','fa-steam-square','fa-stumbleupon','fa-stumbleupon-circle','fa-tencent-weibo','fa-trello','fa-tripadvisor','fa-tumblr','fa-tumblr-square','fa-twitch','fa-twitter','fa-twitter-square','fa-usb','fa-viacoin','fa-vimeo','fa-vimeo-square','fa-vine','fa-vk','fa-weixin','fa-whatsapp','fa-wikipedia-w','fa-windows','fa-wordpress','fa-xing','fa-xing-square','fa-y-combinator','fa-yahoo','fa-yelp','fa-youtube','fa-youtube-square','fa-h-square','fa-hospital-o','fa-medkit','fa-stethoscope','fa-user-md'],
        typeClass: "fa-th-large"
    }, {
        title: "Capture it",
        autoOpen: true,
        id: 4,
        typeClass: "fa-camera"
    }];

    constants.passSteps = [{
        id: 1,
        state: "dashboard.secret",
        nextStepIndex: 1,
        stepClass: "savePassword",
        primaryHeader: "Hushhhhhh !!",
        headerClass: "fa-key",
        secondaryHeader: ""
    }, {
        id: 2,
        nextStepIndex: 2,
        state: "dashboard.hint",
        stepClass: "createPassHint",
        primaryHeader: "Set hints",
        headerClass: "fa-lightbulb-o",
        secondaryHeader: ""
    }, {
        id: 3,
        state: "dashboard.icon",
        stepClass: "savePassword",
        primaryHeader: "Set icon",        
        headerClass: "fa-eye",
        passStrengthClass: "",
        secondaryHeader: ""
    }];

    constants.guessSecret = {
        id: 4,
        state: "dashboard.guess",
        stepClass: "savePassword",
        primaryHeader: "Guess What",
        headerClass: "fa-question-circle",
        passStrengthClass: "",
        secondaryHeader: ""
    };

    constants.iconStorageKey = "KS_SECRET_STORAGE_KEY";

    constants.siteSettingsKey = "KS_SITE_SETTINGS_KEY";

    // Create directive module under app 
    angular.module('common')

    // add the constants 
    .constant("constants", constants);
}());