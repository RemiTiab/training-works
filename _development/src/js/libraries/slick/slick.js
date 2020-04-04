import $ from 'jquery';
import 'slick-carousel';

export const launchSlick = _ => {
  $(document).ready(function () {
    $('.carousel').slick({
      slide: 'div',
      rows: 0,
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });
}
