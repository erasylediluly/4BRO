// window.onresize = function(event){
//     var barbers = document.getElementsByClassName("image");
//     if(document.getElementsByTagName("html")[0].offsetWidth < 1125) {
//         for (var i = 1; i < barbers.length; i++) {
//             //this.alert(typeof parseInt(i));
//             barbers[parseInt(i)].style.display = 'none';
//         }
//         console.log(barbers);
//     }
//     else{
//         for (var i = 1; i < barbers.length; i++) {
//             //this.alert(typeof parseInt(i));
//             barbers[parseInt(i)].style.display = 'block';
//         } 
//     }
// }
// $(document).ready(function(){
//     $("#myCarousel").carousel();
//       if ( $(window).width() < 640 ) {
//          $('.col-sm-6').unwrap().addClass('item');
//          $('.col-sm-6:first').addClass('active');
//       }
//   });

$('.carousel-sync').on('slide.bs.carousel', function(ev) {
    var dir = ev.direction == 'right' ? 'prev' : 'next';
  $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
});
$('.carousel-sync').on('slid.bs.carousel', function(ev) {
  $('.carousel-sync').removeClass('sliding');
});