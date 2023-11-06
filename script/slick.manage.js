$(document).ready(function () {
  $('.banner-slider').slick({
    infinite: true,
    speed: 1000,
    prevArrow: `<svg class="banner-prev" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.366227 9.88375C0.131889 9.64934 0.000244141 9.33146 0.000244141 9C0.000244141 8.66855 0.131889 8.35066 0.366227 8.11625L7.43748 1.045C7.55279 0.925614 7.69072 0.830386 7.84322 0.764875C7.99573 0.699363 8.15975 0.664881 8.32573 0.663438C8.4917 0.661996 8.6563 0.693624 8.80992 0.756475C8.96354 0.819326 9.10311 0.912142 9.22047 1.02951C9.33784 1.14687 9.43065 1.28644 9.4935 1.44006C9.55636 1.59368 9.58798 1.75828 9.58654 1.92425C9.5851 2.09023 9.55062 2.25425 9.4851 2.40676C9.41959 2.55926 9.32437 2.69719 9.20498 2.8125L3.01748 9L9.20498 15.1875C9.43268 15.4233 9.55867 15.739 9.55582 16.0668C9.55297 16.3945 9.42151 16.708 9.18975 16.9398C8.95799 17.1715 8.64447 17.303 8.31673 17.3058C7.98898 17.3087 7.67323 17.1827 7.43748 16.955L0.366227 9.88375Z" fill="currentColor"/>
      </svg>
      `,
    nextArrow: `<svg class="banner-next" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63377 8.11625C9.86811 8.35066 9.99976 8.66854 9.99976 9C9.99976 9.33145 9.86811 9.64934 9.63377 9.88375L2.56252 16.955C2.44721 17.0744 2.30928 17.1696 2.15678 17.2351C2.00427 17.3006 1.84025 17.3351 1.67427 17.3366C1.5083 17.338 1.3437 17.3064 1.19008 17.2435C1.03646 17.1807 0.896894 17.0879 0.779529 16.9705C0.662163 16.8531 0.569346 16.7136 0.506496 16.5599C0.443645 16.4063 0.412018 16.2417 0.41346 16.0757C0.414902 15.9098 0.449385 15.7457 0.514897 15.5932C0.580407 15.4407 0.675635 15.3028 0.795023 15.1875L6.98252 9L0.795024 2.8125C0.567326 2.57674 0.441333 2.26099 0.444181 1.93325C0.44703 1.6055 0.578491 1.29199 0.810251 1.06023C1.04201 0.828464 1.35553 0.697002 1.68327 0.694154C2.01102 0.691306 2.32677 0.8173 2.56252 1.045L9.63377 8.11625Z" fill="currentColor"/>
    </svg>
    `,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.carousel-slider').slick({
    infinite: true,
    slidesToShow: 5,

    slidesToScroll: 1,
    prevArrow: `<svg class="carousel-slider__prev" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.366227 9.88375C0.131889 9.64934 0.000244141 9.33146 0.000244141 9C0.000244141 8.66855 0.131889 8.35066 0.366227 8.11625L7.43748 1.045C7.55279 0.925614 7.69072 0.830386 7.84322 0.764875C7.99573 0.699363 8.15975 0.664881 8.32573 0.663438C8.4917 0.661996 8.6563 0.693624 8.80992 0.756475C8.96354 0.819326 9.10311 0.912142 9.22047 1.02951C9.33784 1.14687 9.43065 1.28644 9.4935 1.44006C9.55636 1.59368 9.58798 1.75828 9.58654 1.92425C9.5851 2.09023 9.55062 2.25425 9.4851 2.40676C9.41959 2.55926 9.32437 2.69719 9.20498 2.8125L3.01748 9L9.20498 15.1875C9.43268 15.4233 9.55867 15.739 9.55582 16.0668C9.55297 16.3945 9.42151 16.708 9.18975 16.9398C8.95799 17.1715 8.64447 17.303 8.31673 17.3058C7.98898 17.3087 7.67323 17.1827 7.43748 16.955L0.366227 9.88375Z" fill="currentColor"/>
    </svg>
    `,
    nextArrow: `<svg class="carousel-slider__next" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63377 8.11625C9.86811 8.35066 9.99976 8.66854 9.99976 9C9.99976 9.33145 9.86811 9.64934 9.63377 9.88375L2.56252 16.955C2.44721 17.0744 2.30928 17.1696 2.15678 17.2351C2.00427 17.3006 1.84025 17.3351 1.67427 17.3366C1.5083 17.338 1.3437 17.3064 1.19008 17.2435C1.03646 17.1807 0.896894 17.0879 0.779529 16.9705C0.662163 16.8531 0.569346 16.7136 0.506496 16.5599C0.443645 16.4063 0.412018 16.2417 0.41346 16.0757C0.414902 15.9098 0.449385 15.7457 0.514897 15.5932C0.580407 15.4407 0.675635 15.3028 0.795023 15.1875L6.98252 9L0.795024 2.8125C0.567326 2.57674 0.441333 2.26099 0.444181 1.93325C0.44703 1.6055 0.578491 1.29199 0.810251 1.06023C1.04201 0.828464 1.35553 0.697002 1.68327 0.694154C2.01102 0.691306 2.32677 0.8173 2.56252 1.045L9.63377 8.11625Z" fill="currentColor"/>
  </svg>
  `,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $('.carousel-slider_info').slick({
    infinite: true,
    slidesToShow: 4,

    slidesToScroll: 1,
    prevArrow: `<svg class="carousel-slider__prev" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.366227 9.88375C0.131889 9.64934 0.000244141 9.33146 0.000244141 9C0.000244141 8.66855 0.131889 8.35066 0.366227 8.11625L7.43748 1.045C7.55279 0.925614 7.69072 0.830386 7.84322 0.764875C7.99573 0.699363 8.15975 0.664881 8.32573 0.663438C8.4917 0.661996 8.6563 0.693624 8.80992 0.756475C8.96354 0.819326 9.10311 0.912142 9.22047 1.02951C9.33784 1.14687 9.43065 1.28644 9.4935 1.44006C9.55636 1.59368 9.58798 1.75828 9.58654 1.92425C9.5851 2.09023 9.55062 2.25425 9.4851 2.40676C9.41959 2.55926 9.32437 2.69719 9.20498 2.8125L3.01748 9L9.20498 15.1875C9.43268 15.4233 9.55867 15.739 9.55582 16.0668C9.55297 16.3945 9.42151 16.708 9.18975 16.9398C8.95799 17.1715 8.64447 17.303 8.31673 17.3058C7.98898 17.3087 7.67323 17.1827 7.43748 16.955L0.366227 9.88375Z" fill="currentColor"/>
    </svg>
    `,
    nextArrow: `<svg class="carousel-slider__next" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63377 8.11625C9.86811 8.35066 9.99976 8.66854 9.99976 9C9.99976 9.33145 9.86811 9.64934 9.63377 9.88375L2.56252 16.955C2.44721 17.0744 2.30928 17.1696 2.15678 17.2351C2.00427 17.3006 1.84025 17.3351 1.67427 17.3366C1.5083 17.338 1.3437 17.3064 1.19008 17.2435C1.03646 17.1807 0.896894 17.0879 0.779529 16.9705C0.662163 16.8531 0.569346 16.7136 0.506496 16.5599C0.443645 16.4063 0.412018 16.2417 0.41346 16.0757C0.414902 15.9098 0.449385 15.7457 0.514897 15.5932C0.580407 15.4407 0.675635 15.3028 0.795023 15.1875L6.98252 9L0.795024 2.8125C0.567326 2.57674 0.441333 2.26099 0.444181 1.93325C0.44703 1.6055 0.578491 1.29199 0.810251 1.06023C1.04201 0.828464 1.35553 0.697002 1.68327 0.694154C2.01102 0.691306 2.32677 0.8173 2.56252 1.045L9.63377 8.11625Z" fill="currentColor"/>
  </svg>
  `,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});

$('.project-slider').slick({
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 474,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      },
    },
  ],
});

$(window).on('resize', function () {
  $('.project-slider').slick('resize');
});

$(document).ready(function () {
  $('.sale-slider').slick({
    infinite: true,
    slidesToShow: 2,

    slidesToScroll: 1,
    prevArrow: `<svg class="carousel-slider__prev" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.366227 9.88375C0.131889 9.64934 0.000244141 9.33146 0.000244141 9C0.000244141 8.66855 0.131889 8.35066 0.366227 8.11625L7.43748 1.045C7.55279 0.925614 7.69072 0.830386 7.84322 0.764875C7.99573 0.699363 8.15975 0.664881 8.32573 0.663438C8.4917 0.661996 8.6563 0.693624 8.80992 0.756475C8.96354 0.819326 9.10311 0.912142 9.22047 1.02951C9.33784 1.14687 9.43065 1.28644 9.4935 1.44006C9.55636 1.59368 9.58798 1.75828 9.58654 1.92425C9.5851 2.09023 9.55062 2.25425 9.4851 2.40676C9.41959 2.55926 9.32437 2.69719 9.20498 2.8125L3.01748 9L9.20498 15.1875C9.43268 15.4233 9.55867 15.739 9.55582 16.0668C9.55297 16.3945 9.42151 16.708 9.18975 16.9398C8.95799 17.1715 8.64447 17.303 8.31673 17.3058C7.98898 17.3087 7.67323 17.1827 7.43748 16.955L0.366227 9.88375Z" fill="currentColor"/>
    </svg>
    `,
    nextArrow: `<svg class="carousel-slider__next" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.63377 8.11625C9.86811 8.35066 9.99976 8.66854 9.99976 9C9.99976 9.33145 9.86811 9.64934 9.63377 9.88375L2.56252 16.955C2.44721 17.0744 2.30928 17.1696 2.15678 17.2351C2.00427 17.3006 1.84025 17.3351 1.67427 17.3366C1.5083 17.338 1.3437 17.3064 1.19008 17.2435C1.03646 17.1807 0.896894 17.0879 0.779529 16.9705C0.662163 16.8531 0.569346 16.7136 0.506496 16.5599C0.443645 16.4063 0.412018 16.2417 0.41346 16.0757C0.414902 15.9098 0.449385 15.7457 0.514897 15.5932C0.580407 15.4407 0.675635 15.3028 0.795023 15.1875L6.98252 9L0.795024 2.8125C0.567326 2.57674 0.441333 2.26099 0.444181 1.93325C0.44703 1.6055 0.578491 1.29199 0.810251 1.06023C1.04201 0.828464 1.35553 0.697002 1.68327 0.694154C2.01102 0.691306 2.32677 0.8173 2.56252 1.045L9.63377 8.11625Z" fill="currentColor"/>
  </svg>
  `,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          // arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          // arrows: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
