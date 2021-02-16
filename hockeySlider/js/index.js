"use strict"

const menuTrigger = (button, overly, nav) => {
  const lines = button.querySelectorAll('.line')
  if (!button.classList.contains('active')) {
    button.classList.add('active')
    lines.forEach((item, index) => item.classList.add(`line-${index + 1}`))
    overly.classList.add('show')
    nav.classList.add('show')
  } else {
    button.classList.remove('active')
    lines.forEach((item, index) => item.classList.remove(`line-${index + 1}`))
    overly.classList.remove('show')
    nav.classList.remove('show')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  //dropdown-menu
  const nav = document.getElementById('navigation')
  const navDropdown = nav.querySelectorAll('.dropdown')
  const dropdownElementList = [].slice.call(nav.querySelectorAll('.dropdown-toggle'))
  const dropdownList = dropdownElementList.map(dropdownToggleEl => {
    return new bootstrap.Dropdown(dropdownToggleEl)
  })

  navDropdown.forEach((elem, index) => {
    elem.addEventListener('mouseover', () => dropdownList[index].show())
    elem.addEventListener('mouseout', () => dropdownList[index].hide())
  })

  //mobile menu
  const menuBtn = document.querySelector('.nav-toggle-btn')
  const navOverly = document.querySelector('.mobile-nav-overly')
  const mobileNav = document.querySelector('.mobile-nav')

  menuBtn.addEventListener('click', () => menuTrigger(menuBtn, navOverly, mobileNav))
  navOverly.addEventListener('click', e => e.target.classList.contains('mobile-nav-overly') && menuTrigger(menuBtn, navOverly, mobileNav))
  
  //slider
  new Swiper('.slider-score', {
    // slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.score-button-next',
      prevEl: '.score-button-prev',
    },
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      375: {
        slidesPerView: 2,
      },
    }
  })

  new Swiper('.main-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
});