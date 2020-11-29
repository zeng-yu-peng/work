< !DOCTYPE html >
  <
  html lang = "en" >

  <
  head >
  <
  meta charset = "UTF-8" >
  <
  meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
  <
  title > Document < /title> < /
  head >

  <
  body >
  <
  script >
  var jsImg = new Array("image/5.jpg", "image/6.jpg");
var jsImg_len = jsImg.length; // 圖檔數量
// 要用另一個變數存，是不想在 function 中每次都要算陣列的大小
var i = 0; //起始照片 2 為 003.jpg
//設定每兩秒執行一次sequentialImg() ，此行要在 function 之外
setInterval("sequentialImg()", 2000);

function sequentialImg() { //循序播放
  document.getElementById("gain").innerHTML = "<img src='" + jsImg[i] + "' width=200 height=200>";
  i++;
  if (i >= jsImg_len) i = 0;
}


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var
      panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} <
/script> < /
body >

  <
  /html>