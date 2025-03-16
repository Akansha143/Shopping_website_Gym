var myCarousel = document.querySelector('#carouselExample');
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000,  // 3 seconds
            ride: 'carousel', // Ensures autoplay continues
            pause: false // Prevents pausing on hover
        });