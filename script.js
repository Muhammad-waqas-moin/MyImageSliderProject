'use strick';
let imgesArray = ['img1.gif', 'img2.gif', 'img3.gif', 'img4.gif', 'img5.gif'];

let image_counter = 0;
let imagesArray_length = imgesArray.length;

document.getElementById('left_arrow').setAttribute('disabled', true);

function imgslider(value) {
  image_counter += value;
  console.log(`value : ${image_counter}`);

  if (image_counter < imagesArray_length) {
    document.getElementById('left_arrow').removeAttribute('disabled');
    setImage(image_counter);
  }
  if (image_counter == 4) {
    document.getElementById('right_arrow').setAttribute('disabled', true);
  }
  if (image_counter < 4) {
    document.getElementById('right_arrow').removeAttribute('disabled');
  }
  if (image_counter == 0) {
    document.getElementById('left_arrow').setAttribute('disabled', true);
  }
}
function setImage(para) {
  document.getElementById('img').src = `${imgesArray[para]}`;
  // console.log(imgesArray[0]);
}
