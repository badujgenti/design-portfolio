let image = document.querySelector(".image");



// let imageWidth= image.clientWidth;
// console.log(imageWidth);

let imageWidth= image.clientWidth;
console.log(image.clientWidth);




let imageCont = document.querySelector(".images");
let gap = parseFloat(window.getComputedStyle(imageCont).gap);



window.onload = function() {
    let padding = (imageCont.clientWidth - image.clientWidth) / 2
    imageCont.style.paddingLeft = padding + "px";
    imageCont.style.paddingRight = padding + "px";
    imageCont.scrollLeft= ((imageCont.scrollWidth-imageCont.clientWidth )/2) ;

}


image.onload = function() {
   imageWidth = (this.width);
}



let leftArrow= document.getElementById("left-arrow");
leftArrow.addEventListener("click", function(){
    imageCont.scrollLeft -= imageWidth + gap;

})
let rightArrow= document.getElementById("right-arrow");
rightArrow.addEventListener("click", function(){
    imageCont.scrollLeft += imageWidth + gap;
    

})



// $('.owl-ima').owlCarousel(
//     {
//         lazyLoad:true,
//         items:1,
//         autoplay: true,
//         smartSpeed: 1500,
//         nav:false,
//         dots: true,
//         loop : true,
//         animateOut: "fadeOut"
//       }
//     );