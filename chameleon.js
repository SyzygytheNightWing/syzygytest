function changeStyles() {
    // generates random rgb values (colors)
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
    // change background color
    var body = document.querySelector("body");
    body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  
    // calculate color
    var brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    // change heading color
    var headingTwo = document.getElementById("headingTwo");
    headingTwo.style.color = brightness > 128 ? "black" : "white";

    // change notice color
    var notice = document.getElementById("notice");
    notice.style.color = brightness > 128 ? "black" : "white";
  }