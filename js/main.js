!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0]; if(!d.getElementById(id)){
        js=d.createElement(s);js.id=id; js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js,fjs);
    }
}(document,"script","twitter-wjs");

jQuery(document).ready(function($) {
    if (jQuery('.accordion')[0]) {
        jQuery('.accordion').find('h3').click(function(e) {
            e.preventDefault();
            var h3 = jQuery(this);
            var next = h3.next();
            if (next.hasClass('hidden-phone')) {
                next.hide();
                next.toggleClass('hidden-phone').slideDown('slow');
            } else {
                next.show();
                next.slideUp('slow', function() {
                    $(this).addClass('hidden-phone');
                });
            }
        } );
    }
});

var checkTwitterFrame = function(callback) {
    if (jQuery('.twitter-timeline-rendered').length > 0) {
        callback();
    } else {
        setTimeout(function() {
            checkTwitterFrame(callback);
        }, 100);
    }
};

checkTwitterFrame(function() {
    jQuery('.twitter-timeline-rendered').addClass('hidden-phone');
});

var options = {
    "url": "/wp-content/themes/flat-ui/css/twitter.css"
};
if (typeof CustomizeTwitterWidget !== "undefined") {
    CustomizeTwitterWidget(options);
}

