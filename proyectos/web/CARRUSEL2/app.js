document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel = document.querySelectorAll('.carousel')
M.Carousel.init(elementosCarousel,{

    duration:80,
    dist:-80,
    shift:5,
    padding:5,
    numVisible:5,
    indicators:5,

});

});