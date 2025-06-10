document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(MorphSVGPlugin);
    let morphed1 = false
    let morphed2 = false
    let morphed3 = false
    let svgContainer1 = document.getElementById("container-1");
    svgContainer1.addEventListener("click", function () {
        //c&a
        if (morphed1) {
            gsap.to('#cat', {
                duration: 1,
                morphSVG: '#cat'
            });
            morphed1 = false;
            return;
        } gsap.to('#cat', {
            duration: 1,
            morphSVG: '#alpaca',
            onComplete: function () {
                morphed1 = true;
            }
        });
    });
    let svgContainer2 = document.getElementById("container-2");
    svgContainer2.addEventListener("click", function () {
        //b&f
        if (morphed2) {
            gsap.to('#boar', {
                duration: 1,
                morphSVG: '#boar'
            });
            morphed2 = false;
            return;
        } gsap.to('#boar', {
            duration: 1,
            morphSVG: '#flamingo',
            onComplete: function () {
                morphed2 = true;
            }
        });
    });
    let svgContainer3 = document.getElementById("container-3");
    svgContainer3.addEventListener("click", function () {
        if (morphed3) {
            gsap.to('#flower', {
                duration: 1,
                morphSVG: '#flower'
            });
            morphed3 = false;
            return;
        } gsap.to('#flower', {
            duration: 1,
            morphSVG: '#pig',
            onComplete: function () {
                morphed3 = true;
            }
        });
    });
});