$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        if ($(window).width() > 768) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body, section').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        }

    });
});

window.onload = function() {
    Particles.init({
        selector: '.background',
        // maxParticles: 80,
        connectParticles: false,
        // color: ['#e31b6d', '#404B69', '#DBEDF3'],
        color: ['#3d3d3d'],
        connectParticles: true,

        responsive: [{
            breakpoint: 768,
            options: {
                maxParticles: 40
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 25
            }
        }, {
            breakpoint: 320,
            options: {
                maxParticles: 15
            }
        }]
    });
};