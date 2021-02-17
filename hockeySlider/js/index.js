"use strict"

const menuTrigger = (button, overly, nav) => {
  const lines = button.querySelectorAll('.line')
  if (!button.classList.contains('active')) {
    button.classList.add('active')
    lines.forEach((item, index) => item.classList.add(`line-${index + 1}`))
    overly.classList.add('show')
    nav.classList.add('show')
    document.body.classList.add('modal-open')
    document.body.style.paddingRight = '17px'
  } else {
    button.classList.remove('active')
    lines.forEach((item, index) => item.classList.remove(`line-${index + 1}`))
    overly.classList.remove('show')
    nav.classList.remove('show')
    document.body.classList.remove('modal-open')
    document.body.style.paddingRight = ''
  }
}

const sortTrigger = (button, allButtons) => {
  const sortIcon = button.querySelector('.sort-icon')

  allButtons.forEach(btn => {
    if (btn !== button) {
      btn.querySelector('.sort-icon').classList.remove('active')
      btn.querySelector('.sort-icon').classList.add('d-none')
    }
  })
  sortIcon.classList.remove('d-none')
  sortIcon.classList.contains('active') ? sortIcon.classList.remove('active') : sortIcon.classList.add('active')
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
  })

  // gamers sort (only switch sort-icon)
  const sortBtn = document.querySelectorAll('[data-role="sort-btn"]')

  sortBtn.forEach(btn => btn.addEventListener('click', () => sortTrigger(btn, sortBtn)))

  //range
  ionRangeSlider('#weight', {
    type: "double",
    min: 62,
    max: 188,
    grid: true,
    grid_num: 5
  })
  ionRangeSlider('#age', {
    type: "double",
    min: 17,
    max: 42,
    grid: true,
    grid_num: 5
  })
  ionRangeSlider('#height', {
    type: "double",
    min: 170,
    max: 205,
    grid: true,
    grid_num: 5
  })
})