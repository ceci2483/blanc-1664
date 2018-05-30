 function openNav() {
     document.getElementById("myNav").style.width = "100%";
 }

 function closeNav() {
     document.getElementById("myNav").style.width = "0%";
 } /* Scroll ned til næste sektion */
 let btnNextSektion = document.querySelector(".btnNextSektion");
 btnNextSektion.addEventListener("click", e => {
     let nextSektion = document.querySelector(".flex-ContainerBlanc1");
     nextSektion.scrollIntoView({
         behavior: "smooth",
         block: "start"
     });
 }) $(document).ready(function () { /* Every time the window is scrolled ... */
     $(window).scroll(function () { /* Check the location of each desired element */
         $('.hideme').each(function (i) {
             var bottom_of_object = $(this).position().top + $(this).outerHeight();
             var bottom_of_window = $(window).scrollTop() + $(window).height(); /* If the object is completely visible in the window, fade it it */
             if (bottom_of_window > bottom_of_object) {
                 $(this).animate({
                     'opacity': '1'
                 }, 600);
             }
         });
     });
 });