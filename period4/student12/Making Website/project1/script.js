document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(MorphSVGPlugin);
    let morphed1 = false;
    let morphed2 = false;
    let morphed3 = false;
    let svgContainer = document.getElementById("container");
    svgContainer.addEventListener("click", function () {
        if (morphed1) {
            gsap.to('#banana', {
                duration: 1,
                morphSVG: '#banana',
            });
            morphed1 = false;
            return;
        }

        gsap.to('#banana', {
            duration: 1,
            morphSVG: '#cherry',
            onComplete: function () {
                morphed1 = true;
            }
        });

        let svgContainer2 = document.getElementById("container2");
        svgContainer2.addEventListener("click", function () {
            if (morphed2) {
                gsap.to('#cat', {
                    duration: 1,
                    morphSVG: '#cat',
                });
                morphed2 = false;
                return;
            }

            gsap.to('#cat', {
                duration: 1,
                morphSVG: '#leaf',
                onComplete: function () {
                    morphed2 = true;
                }
            });

        });

        let svgContainer3 = document.getElementById("container3");
        svgContainer3.addEventListener("click", function () {
            if (morphed3) {
                gsap.to('#flower', {
                    duration: 1,
                    morphSVG: '#flower',
                });
                morphed3 = false;
                return;
            }

            gsap.to('#flower', {
                duration: 1,
                morphSVG: '#petal',
                onComplete: function () {
                    morphed3 = true;
                }
            });

        });
    });
});
