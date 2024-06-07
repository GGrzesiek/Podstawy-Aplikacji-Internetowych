$(document).ready(function() {
  const carousel = $('.carousel ul');
  const items = carousel.find('li');
  const itemWidth = carousel.width(); // Szerokość kontenera karuzeli
  let currentIndex = 0;

  function slideTo(index) {
    index = Math.max(0, Math.min(items.length - 1, index));
    currentIndex = index;
    const offset = -index * itemWidth;
    carousel.animate({marginLeft: offset}, 500);
  }

  $('.next').click(function() {
    slideTo(currentIndex + 1);
  });

  $('.prev').click(function() {
    slideTo(currentIndex - 1);
  });
});
