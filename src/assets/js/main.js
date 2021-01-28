import html2canvas from 'html2canvas';

html2canvas(document.querySelector("#capture")).then(canvas => {
  document.body.appendChild(canvas);
  const cnvs = document.querySelector('canvas');

  const link = document.getElementById('link');
  link.setAttribute('download', 'MintyPaper.png');
  link.setAttribute('href', cnvs.toDataURL("image/png").replace("image/png", "image/octet-stream"));
});