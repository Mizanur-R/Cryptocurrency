function selectId(selection){
    return document.getElementById(selection)
}

// add nav background
// let nav = selectId('nav')
let nav = document.querySelector('.navbar')
window.addEventListener('scroll', function(){
    if(this.scrollY > 50){
        nav.classList.add('nav-active')
    }else{
        nav.classList.remove('nav-active')
    }
})

// mobile menu
let navBtn = selectId('bur-icon')
let closeBtn = document.querySelector('#close');
let mobileMenu = selectId('mobile-menu');
closeBtn.addEventListener('click', function(){
    mobileMenu.style.width = '0%'
})

navBtn.addEventListener('click', function(){
    mobileMenu.style.width = '100%'
})


    // owl carousel
    $('.road-map-carousel.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplayHoverPause:false,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items: 2
            },
            768:{
                items:3
            },
            992: {
                items: 4
            }
        }
    })

    // animation image / video box

    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

// chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Year 2019', 'Year 2020', 'Year 2021', 'Year 2022', 'Year 2023', 'Year 2024'],
            datasets: [{
                label: 'Token Price $',
                data: [5, 8, 6, 5, 12, 16],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    // form validation

    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

      // smooth scroll for IE / EDGE / SAFARI
$('a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 400, function(){
            window.location.hash = hash;
        })
    }
})