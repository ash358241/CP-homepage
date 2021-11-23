$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


let videoElement = document.getElementById("video-modal");
videoElement.style.display = "none";

function openVideo() {
    let videoElement = document.getElementById("video-modal");
    videoElement.style.display = "block";
}

function closeVideo() {
    let videoElement = document.getElementById("video-modal");
    videoElement.style.display = "none";
}