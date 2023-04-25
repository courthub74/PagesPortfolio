// Query through the blog circles

// The Blog Circles
const blogCircles = document.querySelectorAll(".blogcircles") ;
console.log("BLOGCIRCLES === ", blogCircles);

// The Left Scroll Arrow
const scrollThrough = document.querySelector("#scrollthrough");
console.log("SCROLLTHROUGH === ", scrollThrough);

// The Right Scroll Arrow
const scrollBack = document.querySelector("#scrollback");
console.log("SCROLLBACK === ", scrollBack);


// Iterate through each blog circle
blogCircles.forEach((item, i) => {
    let containerBlogDimensions = item.getBoundingClientRect();
    let containerWidth = containerBlogDimensions.width;

    // add event listeners

    // Left Scroll
    scrollThrough[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    // Right Scroll
    scrollBack[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});