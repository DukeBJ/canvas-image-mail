import html2canvas from 'html2canvas';
import { createApi } from "unsplash-js";
import Litepicker from 'litepicker';

import myKey from './key';

const api = createApi({
  accessKey: myKey.key
});

const nowDate = new Date();
const firstDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);

console.log('today', nowDate);
console.log('first day', firstDate);

const checkStartDay = document.getElementById('check-first');
const checkEndDay = document.getElementById('check-end');

const startDay = document.getElementById('daystatrt');
const endDay = document.getElementById('dayend');

const picker = new Litepicker({ 
  element: document.getElementById('start-date'),
  elementEnd: document.getElementById('end-date'),
  singleMode: false,
  // autoApply: false,
  // autoRefresh: false,
  startDate: firstDate,
  endDate: new Date(),
  // inlineMode: true,
  lang: 'ru-RU',
  format: 'DD.MM.YYYY',
  delimiter: ' по ',
  dropdowns: {"minYear":1990,"maxYear":null,"months":false,"years":false},
  allowRepick: true,
  maxDate: new Date(),
  numberOfColumns: 1,
  numberOfMonths: 1,
  position: 'bottom',
  showTooltip: true,
  tooltipNumber: (totalDays) => {
    return totalDays;
 },
  tooltipText: {
    one: 'день',
    few: 'дня',
    many: 'дней'
  },
  // parentEl: document.getElementById('date-test'),
//   lockDaysFilter: (day) => {
//     const d = day.getDay();
//     return [6, 0].includes(d);
//  },
  setup: (picker) => {
    picker.on('preselect', (date1, date2) => {
      startDay.innerText = date1.format('DD.MM.YYYY');
      endDay.innerText = date2.format('DD.MM.YYYY');
      console.log('date1', date1.format('DD.MM.YYYY'));
      console.log('date2', date2.format('DD.MM.YYYY'));
    });
  },
});

const picker2 = new Litepicker({ 
  element: checkStartDay,
  elementEnd: checkEndDay,
  singleMode: false,
  startDate: firstDate,
  endDate: new Date(),
  lang: 'ru-RU',
  format: 'DD.MM.YYYY',
  delimiter: ' по ',
  allowRepick: true,
  maxDate: new Date(),
  numberOfColumns: 1,
  numberOfMonths: 1,
  position: 'bottom',
  showTooltip: true,
  tooltipNumber: (totalDays) => {
    return totalDays;
 },
  tooltipText: {
    one: 'день',
    few: 'дня',
    many: 'дней'
  },
  setup: (picker2) => {
    picker2.on('preselect', (date1, date2) => {
      checkStartDay.innerText = date1.format('DD.MM.YYYY');
      checkEndDay.innerText = date2.format('DD.MM.YYYY');
      console.log('date1', date1.format('DD.MM.YYYY'));
      console.log('date2', date2.format('DD.MM.YYYY'));
    });
  },
});

console.log(picker.DateTime());
console.log('EndDate',picker.getEndDate().format('DD.MM.YYYY'));
console.log('StartDate',picker.getStartDate().format('DD.MM.YYYY'));

checkStartDay.innerText = picker2.getStartDate().format('DD.MM.YYYY');
checkEndDay.innerText = picker2.getEndDate().format('DD.MM.YYYY');

// const form = document.querySelector('#setData');
// const capture = document.querySelector('#capture');
// const canvasBlock = document.querySelector('.canvas-img');
// const saveImg = document.querySelector('#saveImg');
// const reloadImg = document.querySelector('#reloadImg');

// const loader = document.querySelector('.loader');

// const dateStart = form.querySelector('#setData__dateStart');
// const timeStart = form.querySelector('#setData__timeStart');

// const dateDoneBefore = form.querySelector('#setData__dateDoneBefore');
// const dateDoneAfter = form.querySelector('#setData__dateDoneAfter');

// capture.querySelector('.banner-filter').style.backgroundImage = "url('./images/filter.png')";

// const getUnsplashImg = () => {
//   loader.classList.remove('hidden');
//   api.photos
//   .getRandom({ query: "nature", collections: "327760" })
//   .then(result => {
//     console.log('Получаем url картинки');
//     const imgUrl = result.response.urls.full;
//     changeToBase(imgUrl);
//     // capture.style.backgroundImage = `url("${result.response.urls.full}")`;
//   })
//   .catch(() => {
//     console.log("something went wrong!");
//   });
// }

// getUnsplashImg();

// const changeToBase = (img) => {
//   fetch(img)
//     .then(function (response) {
//       console.log('Конвертим в blob')
//       return response.blob();
//     })
//     .then(function (blob) {
//       console.log('Конвертим в base')
//       const render  = new FileReader()

//       render.readAsDataURL(blob)
//       render.onload = () => {
//         capture.style.backgroundImage = `url("${render.result}")`;
//         loader.classList.add('hidden');
//       }
//     });
//   }




// dateStart.oninput = function() {
//   const arDate = dateStart.value.split('-');
//   const strDate = `${arDate[2]}.${arDate[1]}.${arDate[0]}`
//   capture.querySelector('.date-start').innerText = strDate;
// }

// timeStart.oninput = function() {
//   if(capture.querySelector('.switch.hidden')) {
//     capture.querySelector('.switch').classList.remove('hidden');
//     capture.querySelector('.after').classList.remove('hidden');
//   }
//   capture.querySelectorAll('.time-start').forEach( (el) => {
//     el.innerText = timeStart.value;
//   })
  
// }

// // timeSwitcher.forEach(radio => {
// //   radio.addEventListener('change', el => {
// //     const val = el.path[0].value
// //     if(val == 'before') {
// //       capture.querySelector('.switch').innerText = 'до';
// //     } else {
// //       capture.querySelector('.switch').innerText = 'после';
// //     }
// //   })
// // });

// dateDoneBefore.oninput = function() {
//   const arDate = dateDoneBefore.value.split('-');
//   const strDate = `${arDate[2]}.${arDate[1]}.${arDate[0]}`
//   capture.querySelector('.date-done-before').innerText = strDate;
// }

// dateDoneAfter.oninput = function() {
//   const arDate = dateDoneAfter.value.split('-');
//   const strDate = `${arDate[2]}.${arDate[1]}.${arDate[0]}`
//   capture.querySelector('.date-done-after').innerText = strDate;
// }

// document.addEventListener("DOMContentLoaded", () => {

//   reloadImg.addEventListener('click', getUnsplashImg);

//   saveImg.addEventListener('click', () => {
//     // window.scrollTo(0, 0);
//     console.log('Скачать картинку')

//     if(document.querySelector('.canvas-img canvas')) {
//       document.querySelector('.canvas-img canvas').remove();
//     }

//     html2canvas(
//       capture, { scrollY: (window.pageYOffset * -1), backgroundColor: '#595959' },
//       document.querySelector("#capture"),
//       )
//       .then(canvas => {
//         canvasBlock.appendChild(canvas);
//         const cnvs = document.querySelector('canvas');
        
//         canvas.toBlob((blob) => {
//           const a = document.createElement("a");
//           document.body.appendChild(a);
//           a.style = "display: none";
//           const fileName = `Order-date-${Date.now()}.png`;
//           const url = URL.createObjectURL(blob);
//           a.href = url;
//           a.download = fileName;
//           a.click();
//           window.URL.revokeObjectURL(url);
//         });

//     });

//   });

// })

// // async function postData(url = '', data = {}) {
// //   // debugger;
// //   // Default options are marked with *
// //   const response = await fetch(url, {
// //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
// //     mode: 'cors', // no-cors, *cors, same-origin
// //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// //     credentials: 'same-origin', // include, *same-origin, omit
// //     headers: {
// //       'Content-Type': 'application/json'
// //       // 'Content-Type': 'application/x-www-form-urlencoded',
// //     },
// //     redirect: 'follow', // manual, *follow, error
// //     referrerPolicy: 'no-referrer', // no-referrer, *client
// //     body: JSON.stringify(data) // body data type must match "Content-Type" header
// //   });
// //   return await response.text(); // parses JSON response into native JavaScript objects
// // }