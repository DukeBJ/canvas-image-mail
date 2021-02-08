import html2canvas from 'html2canvas';
// import IMask from 'imask';
// import MicroModal from 'micromodal';


const form = document.querySelector('#setData');
const capture = document.querySelector('#capture');
const canvasBlock = document.querySelector('.canvas-img');
const saveImg = document.querySelector('#saveImg');

const dateStart = form.querySelector('#setData__dateStart');
const timeStart = form.querySelector('#setData__timeStart');
const timeSwitcher = form.querySelectorAll('input[name=timeSwitcher]');
const dateDone = form.querySelector('#setData__dateDone');

capture.style.backgroundImage = "url('./images/random/800-1.png')";
capture.querySelector('.banner-filter').style.backgroundImage = "url('./images/filter.png')";


dateStart.oninput = function() {
  const arDate = dateStart.value.split('-');
  const strDate = `${arDate[2]}.${arDate[1]}.${arDate[0]}`
  capture.querySelector('.date-start').innerText = strDate;
}

timeStart.oninput = function() {
  if(capture.querySelector('.hidden')) {
    capture.querySelector('.hidden').classList.remove('hidden');
  }
  capture.querySelector('.time-start').innerText = timeStart.value;
  
}

timeSwitcher.forEach(radio => {
  radio.addEventListener('change', el => {
    const val = el.path[0].value
    if(val == 'before') {
      capture.querySelector('.switch').innerText = 'до';
    } else {
      capture.querySelector('.switch').innerText = 'после';
    }
  })
});

dateDone.oninput = function() {
  const arDate = dateDone.value.split('-');
  const strDate = `${arDate[2]}.${arDate[1]}.${arDate[0]}`
  capture.querySelector('.date-done').innerText = strDate;
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
          const fileName = `Order-date-${Date.now()}.png`;
          const url = URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
        });

    });

  });

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