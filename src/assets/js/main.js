import html2canvas from 'html2canvas';
import bfi from 'better-file-input';
import IMask from 'imask';


const form = document.querySelector('#setData');
const capture = document.querySelector('#capture');

const fio = form.querySelector('#setData__fio');
const workFunc = form.querySelector('#setData__function');
const department = form.querySelector('#setData__department');
const email = form.querySelector('#setData__email');
const phone = form.querySelector('#setData__phone');
const addPhone = form.querySelector('#setData__phoneAdd');
const mobile = form.querySelector('#setData__mobile');
  
fio.oninput = function() {
  capture.querySelector('.set-name').innerText = fio.value;
};
workFunc.oninput = function() {
  capture.querySelector('.function span').innerText = workFunc.value;
};
department.oninput = function() {
  capture.querySelector('.department span').innerText = department.value;
};
email.oninput = function() {
  capture.querySelector('.email span').innerText = email.value;
};
phone.oninput = function() {
  capture.querySelector('.phone span').innerText = phone.value;
};
// addPhone.oninput = function() {
//   capture.querySelector('.department span').innerText = addPhone.value;
// };
mobile.oninput = function() {
  capture.querySelector('.mobile span').innerText = mobile.value;
};

const phoneMask = IMask(
  document.getElementById('setData__phone'), {
    mask: '+{7} (000) 000-00-00'
});

const mobileMask = IMask(
  document.getElementById('setData__mobile'), {
    mask: '+{7} (000) 000-00-00'
});

const tmpPhoto = form.getElementById('setData__photo').files[0];

const blob = window.URL.createObjectURL(tmpPhoto);


document.addEventListener("DOMContentLoaded", () => {

  bfi_init({
    'containerColor': '#b8bfd8', // The color of the file container
    'labelColor': 'rgb(77, 79, 86)',                    // The color of the file container label
    'fileColor': 'linear-gradient(#84f189, #53b658)',   // The color of the files
    'fileNameColor': 'darkblue',                        // The color of the file names
    'fileInfoColor': 'rgba(55, 55, 55, 0.75)',          // The color of the file size info
    'dragDropBorder': '3px dotted #374f6d'              // The drag & drop border
  })

// html2canvas(document.querySelector("#capture")).then(canvas => {
//   document.body.appendChild(canvas);
//   const cnvs = document.querySelector('canvas');

//   const link = document.getElementById('link');
//   link.setAttribute('download', 'MintyPaper.png');
//   link.setAttribute('href', cnvs.toDataURL("image/png").replace("image/png", "image/octet-stream"));
// });

})