//CHANGE NAV OPACITY ON  SCROLL
const under = document.getElementsByClassName('nav-link');
// console.log(under);




const nav = document.querySelector('#nav1');

// nav.classList.add('fadeNavOut');

var w = $(window), d = $(document);
w.scroll(function () {
    if (w.scrollTop() + w.height() >= 1100) {
        nav.classList.remove('fadeNavOut');
        nav.classList.add('fadeNavIn');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        // under.classList.remove('under-white');
        // under.classList.add('under-black');
        for (i = 0; i < under.length; i++) {
            under[i].classList.remove('under-white');
            under[i].classList.add('under-black');

        }



    }
});

w.scroll(function () {
    if (w.scrollTop() + w.height() <= 1100) {
        nav.classList.add('fadeNavOut');
        nav.classList.remove('fadeNavIn');
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        // under.classList.add('under-white');
        // under.classList.remove('under-black');
        for (i = 0; i < under.length; i++) {
            under[i].classList.remove('under-black');
            under[i].classList.add('under-white');


        }



    }
});


//Scroll on nav click
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 200, 'swing', function () {
            window.location.hash = target - 5;
        });
    });
});

// const under = document.querySelector('.element'), ':before'

