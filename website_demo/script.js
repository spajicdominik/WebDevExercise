document.addEventListener('DOMContentLoaded', function(){
    const images = [
        'pic_1.jpg',
        'pic_2.jpg',
        'pic_3.jpg'
    ];

    const imageElement = document.getElementById('myImage');
    let currentIndex = 0;

    function changeImage(){
        currentIndex = (currentIndex+1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 6000);
});