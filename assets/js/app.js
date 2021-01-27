

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
