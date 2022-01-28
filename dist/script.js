const $dynamicGallery = document.getElementById("dynamic-gallery-demo");
const dynamicGallery = window.lightGallery($dynamicGallery, {
  dynamic: true,
  plugins: [lgZoom],
  dynamicEl: [
    {
      src:
        "../img/1.jpg",
      subHtml: `<div class="lightGallery-captions">
                <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                <p>Description of the slide 1</p>
            </div>`
    },
    {
      src:
        "../img/2.jpg",
    },
    {
      src: "//www.youtube.com/watch?v=egyIeygdS_E",
    }
  ]
});
$dynamicGallery.addEventListener("click", (e) => {
  dynamicGallery.openGallery(0);
});