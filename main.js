// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   // $("a").on('click', function(event) {

//   //   // Make sure this.hash has a value before overriding default behavior
//   //   if (this.hash !== "") {
//   //     // Prevent default anchor click behavior
//   //     event.preventDefault();

//   //     // Store hash
//   //     var hash = this.hash;

//   //     // Using jQuery's animate() method to add smooth page scroll
//   //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//   //     $('html, body').animate({
//   //       scrollTop: $(hash).offset().top
//   //     }, 800, function(){

//   //       // Add hash (#) to URL when done scrolling (default click behavior)
//   // window.location.hash = hash;
//   //     });
//   //   } // End if
//   // });

//   $("#showvs").click(function () {
//     $("#main-section").show("slow");
//     $("#sub-section").hide("slow");
//   });

//   $("#hidevs").click(function () {
//     $("#sub-section").show("slow");
//     $("#main-section").hide("slow");
//   });

//   $("#hidevs-retail").click(function () {
//     $("#sub-section-retail").show("slow");
//     $("#main-section").hide("slow");
//   });

//   $("#hidevs-hr").click(function () {
//     $("#sub-section-hr").show("slow");
//     $("#main-section").hide("slow");
//   });

//   $("#showvs-edu").click(function () {
//     $("#main-section").show("slow");
//     $("#sub-edu-section").hide("slow");
//   });

//   $(".show-suggestionuvs").click(function () {
//     $("#qik-suggestionsuvs").show("slow");
//   });

//   $("#hidevs-edu").click(function () {
//     $("#sub-edu-section").show("slow");
//     $("#main-section").hide("slow");
//   });

//   $("#showvs-hr").click(function () {
//     $("#main-section").show("slow");
//     $("#sub-section-hr").hide("slow");
//   });

//   $("#showvs-retail").click(function () {
//     $("#main-section").show("slow");
//     $("#sub-section-retail").hide("slow");
//   });

//   $(".uimgvs img")
//     .mouseover(function () {
//       $(this).removeClass().addClass("uimgvshove");
//       $(".uimgvs img ").removeClass("uimgvshover");
//       $(".uimgvs img:eq(1)").removeClass();
//     })
//     .mouseout(function () {
//       $(".uimgvs img ").removeClass("uimgvshove");
//       $(".uimgvs img:eq(1)").removeClass().addClass("uimgvshove");
//     });

//   if ($(".nav-menu").length) {
//     var $mobile_nav = $(".nav-menu").clone().prop({
//       class: "mobile-nav d-lg-none",
//     });
//     $("body").append($mobile_nav);
//     $("body").prepend(
//       '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>'
//     );
//     $("body").append('<div class="mobile-nav-overly"></div>');

//     $(document).on("click", ".mobile-nav a,.mobile-nav-toggle", function (e) {
//       $("body").toggleClass("mobile-nav-active");
//       $(".mobile-nav-toggle i").toggleClass("fa fa-bars fa fa-times");
//       $(".mobile-nav-overly").toggle();
//     });

//     $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
//       e.preventDefault();
//       $(this).next().slideToggle(300);
//       $(this).parent().toggleClass("active");
//     });

//     $(document).click(function (e) {
//       var container = $(".mobile-nav, .mobile-nav-toggle");
//       if (!container.is(e.target) && container.has(e.target).length === 0) {
//         if ($("body").hasClass("mobile-nav-active")) {
//           $("body").removeClass("mobile-nav-active");
//           $(".mobile-nav-toggle i").toggleClass("fa fa-bars fa fa-times");
//           $(".mobile-nav-overly").fadeOut();
//         }
//       }
//     });
//   } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
//     $(".mobile-nav, .mobile-nav-toggle").hide();
//   }
// });
