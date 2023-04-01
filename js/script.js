function openImage(src) {
    if (screen.width < 500) {
        return;
      }
    // создаем новое окно с картинкой
    var width = Math.round(window.innerWidth * 0.8);
    var height = Math.round(window.innerHeight * 0.8);
    var imageWindow = window.open("", "_blank", "width=" + width + ", height=" + height);
  
// создаем элемент изображения
var image = imageWindow.document.createElement("img");
image.src = src;
image.style.objectFit = "contain";
image.style.width = "100%";
image.style.height = "100%";

// добавляем изображение в новое окно
imageWindow.document.body.appendChild(image);

// добавляем кнопку для закрытия окна
var closeButton = imageWindow.document.createElement("button");
closeButton.innerHTML = "Закрыть";
closeButton.onclick = function() {
  imageWindow.close();
}
imageWindow.document.body.appendChild(closeButton);
}