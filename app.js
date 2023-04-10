/*JavaScript text animation*/
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

/* Jquery on scroll animations*/ 
$(document).ready(function () {
    let offset = {offset: "80%"}

            $(".faded-right").waypoint(
                    function() {
                        $(".faded-right").addClass("animate__animated animate__fadeInRight");
                }, 
                offset
            );
    
            $("#zoom-in1").waypoint(
                    function() {
                    $("#zoom-in1").addClass("animate__animated animate__zoomIn");
                }, 
                offset
            );

            $("#zoom-in2").waypoint(
                function() {
                $("#zoom-in2").addClass("animate__animated animate__zoomIn");
            }, 
            offset
            );
    
            $(".animation-pulse").waypoint(
                    function() {
                    $(".animation-pulse").addClass("animate__animated animate__pulse");
                }, 
                offset
            );

            $(".faded-left").waypoint(
                    function() {
                    $(".faded-left").addClass("animate__animated animate__fadeInLeft");
                }, 
                offset
            );

            $("#heart-beat").waypoint(
                function() {
                $("#heart-beat").addClass("animate__animated animate__heartBeat");
            }, 
            offset
            );

            $("#faded-left1").waypoint(
                function() {
                $("#faded-left1").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );

            $("#faded-left2").waypoint(
                function() {
                $("#faded-left2").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );

            $("#dev-icon1").waypoint(
                function() {
                $("#dev-icon1").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );

            $("#dev-icon2").waypoint(
                function() {
                $("#dev-icon2").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );

            $("#dev-icon3").waypoint(
                function() {
                $("#dev-icon3").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );

            $("#dev-icon4").waypoint(
                function() {
                $("#dev-icon4").addClass("animate__animated animate__fadeInLeft");
            }, 
            offset
            );
});




