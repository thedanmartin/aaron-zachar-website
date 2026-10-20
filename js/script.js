document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave",
            duration: "200%"
        }
    });

    var panels = document.querySelectorAll("section.slide");

    for (var i = 0; i < panels.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: panels[i]
        })
            .setPin(panels[i], { pushFollowers: false })
            .addTo(controller);
    }
});

