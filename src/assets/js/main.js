import html2canvas from 'html2canvas';
import bfi from 'better-file-input';
import IMask from 'imask';
// import MicroModal from 'micromodal';


const form = document.querySelector('#setData');
const capture = document.querySelector('#capture');
const canvasBlock = document.querySelector('.canvas-img');
const saveImg = document.querySelector('#saveImg');

const fio = form.querySelector('#setData__fio');
const workFunc = form.querySelector('#setData__function');
const department = form.querySelector('#setData__department');
const email = form.querySelector('#setData__email');
const phone = form.querySelector('#setData__phone');
const addPhone = form.querySelector('#setData__phoneAdd');
const mobile = form.querySelector('#setData__mobile');
const photo = form.querySelector('#setData__photo');


fio.oninput = function() {
  capture.querySelector('.set-name').innerText = fio.value;
}

workFunc.oninput = function() {
  capture.querySelector('.function span').innerText = workFunc.value;
}

department.oninput = function() {
  capture.querySelector('.department').classList.remove('hidden');
  capture.querySelector('.department span').innerText = department.value;
}


email.oninput = function() {
  capture.querySelector('.email').classList.remove('hidden');
  capture.querySelector('.email span').innerText = email.value;
}

phone.oninput = function() {
  capture.querySelector('.phone').classList.remove('hidden');
  capture.querySelector('.phone .phone__main').innerText = phone.value;
}

addPhone.oninput = function() {
  capture.querySelector('.phone .phone__additional').classList.remove('hidden');
  capture.querySelector('.phone .phone__additional span').innerText = addPhone.value;
}

mobile.oninput = function() {
  capture.querySelector('.mobile').classList.remove('hidden');
  capture.querySelector('.mobile span').innerText = mobile.value;
}

const phoneMask = IMask(
  document.getElementById('setData__phone'), {
    mask: '+{7} (000) 000-00-00'
});

const mobileMask = IMask(
  document.getElementById('setData__mobile'), {
    mask: '+{7} (000) 000-00-00'
});

photo.oninput = function() {
  const reader = new FileReader()
  const tmpPhoto = photo.files[0];
  reader.readAsDataURL(tmpPhoto);
  reader.onloadend = function() {
    const base64data = reader.result;
    capture.querySelector('.personal-card__photo img').src = base64data;
  }
  // const blob = URL.createObjectURL(tmpPhoto);

  // capture.querySelector('.personal-card__photo img').src = blob;
}

document.addEventListener("DOMContentLoaded", () => {

  saveImg.addEventListener('click', () => {
    // window.scrollTo(0, 0);
    console.log('Скачать картинку')

    if(document.querySelector('.canvas-img canvas')) {
      document.querySelector('.canvas-img canvas').remove();
    }

    html2canvas(
      capture, { scrollY: (window.pageYOffset * -1), backgroundColor: '#595959' },
      document.querySelector("#capture"),
      )
      .then(canvas => {
        canvasBlock.appendChild(canvas);
        const cnvs = document.querySelector('canvas');
        
        canvas.toBlob((blob) => {
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.style = "display: none";
          const name = fio.value.replace(/ /g, '_');
          const fileName = `${name}_${Date.now()}.png`;
          const url = URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
        });


        

        // const base = cnvs.toDataURL();
        // document.location = base;
        // saveImg.href = base;
        // saveImg.setAttribute(download, `new_coop_${Date.now()}.png`);
      });

  });

  // bfi_init({
  //   'containerColor': '#b8bfd8', // The color of the file container
  //   'labelColor': 'rgb(77, 79, 86)',                    // The color of the file container label
  //   'fileColor': 'linear-gradient(#84f189, #53b658)',   // The color of the files
  //   'fileNameColor': 'darkblue',                        // The color of the file names
  //   'fileInfoColor': 'rgba(55, 55, 55, 0.75)',          // The color of the file size info
  //   'dragDropBorder': '3px dotted #374f6d'              // The drag & drop border
  // });

  // document.querySelector('#preview').addEventListener('click', () => {
  //   // window.scrollTo(0, 0);

  //   if(document.querySelector('.modal__content canvas')) {
  //     document.querySelector('.modal__content canvas').remove();
  //   }
  //   setTimeout(() => {
  //     html2canvas(
  //       capture, { scrollY: (window.pageYOffset * -1) },
  //       document.querySelector("#capture")).then(canvas => {
  //       document.querySelector('.modal__content').appendChild(canvas);
  //       const cnvs = document.querySelector('canvas');
  //       // const link = document.getElementById('link');
  //       // link.setAttribute('download', 'MintyPaper.png');
  //       // link.setAttribute('href', cnvs.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  //     });
  //   }, 300);
    
  // });
  // const mailSender = './mail.php';

  // document.querySelector('#sendImg').addEventListener('click', () => {

  //   let base = null
  //   console.log('click')
  //   html2canvas(
  //     capture, { scrollY: (window.pageYOffset * -1) },
  //     document.querySelector("#capture")
  //     )
  //     .then(canvas => {
  //       document.body.appendChild(canvas);
  //       const cnvs = document.querySelector('canvas');
  //       base = cnvs.toDataURL();
  //       console.log('canvas', base);

  //       postData('./mail.php', { img: base })
  //       .then((data) => {
  //         console.log('postData', data); // JSON data parsed by `response.json()` call
  //       });
  //     });

  // });

  // MicroModal.init();

})

// async function postData(url = '', data = {}) {
//   // debugger;
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.text(); // parses JSON response into native JavaScript objects
// }