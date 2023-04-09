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
    
            $("#zoom-in").waypoint(
                    function() {
                    $("#zoom-in").addClass("animate__animated animate__zoomIn");
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
});




