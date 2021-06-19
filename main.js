var gallery = document.querySelector('main');

var imagesUrls = [
  "https://www.denofgeek.com/wp-content/uploads/2016/05/gb_main.jpg?fit=620%2C370",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F05%2Fmsdduan_ec013-2000.jpg",
  "https://pyxis.nymag.com/v1/imgs/b3e/0da/d915ff145503c90d125f34d6ce865d4771-11-dave-chappelle-rick-james.2x.h473.w710.jpg"
];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (){
  if (imageUrlInput.value !== "") {
    imagesUrls.push(imageUrlInput.value);
  } imageUrlInput.value = "";
});

function updateGallery() {
  gallery.innerHTML = "";
  for (var i = 0; i < imagesUrls.length; i++){
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src =imagesUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
addImageButton.addEventListener('click', updateGallery);
