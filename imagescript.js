window.onload = function () {
  document.getElementById('pic1').addEventListener('mouseover', function() {
      document.getElementById('pic1').src = "resources/about_me_pic3.jpg";
  });
  document.getElementById('pic1').addEventListener('mouseleave', function() {
      document.getElementById('pic1').src = "resources/about_me_pic.jpg";
  });
  document.getElementById('pic2').addEventListener('mouseover', function() {
      document.getElementById('pic2').src = "resources/about_me_pic4.jpg";
  });
  document.getElementById('pic2').addEventListener('mouseleave', function() {
      document.getElementById('pic2').src = "resources/about_me_pic2.jpg";
  });
}
