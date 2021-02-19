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
    spaceBetween: 20,
    navigation: {
      nextEl: '.score-button-next',
      prevEl: '.score-button-prev',
    },
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      375: {
        slidesPerView: 1,
      },
    }
  })

  new Swiper('.main-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
  })

  // gamers sort (only switch sort-icon)
  const sortBtn = document.querySelectorAll('[data-role="sort-btn"]')

  sortBtn.forEach(btn => btn.addEventListener('click', () => sortTrigger(btn, sortBtn)))

  //range
  // ionRangeSlider('#weight', {
  //   type: "double",
  //   min: 62,
  //   max: 188,
  //   grid: true,
  //   grid_num: 5
  // })
  // ionRangeSlider('#age', {
  //   type: "double",
  //   min: 17,
  //   max: 42,
  //   grid: true,
  //   grid_num: 5
  // })
  // ionRangeSlider('#height', {
  //   type: "double",
  //   min: 170,
  //   max: 205,
  //   grid: true,
  //   grid_num: 5
  // })

  const weightSlider = document.getElementById('weight-slider')
  const weight = document.getElementById('weight')
  const weightInputs = [].slice.call(weight.querySelectorAll('.range-form__input'))
  
  noUiSlider.create(weightSlider, {
      start: [62, 188],
      connect: true,
      range: {
          'min': 62,
          'max': 188
      },
      step: 1
  })

  weightSlider.noUiSlider.on('update', function(values, handler) {
    weightInputs[handler].value = Math.round(values[handler])
  })

  const ageSlider = document.getElementById('age-slider')
  const age = document.getElementById('age')
  const ageInputs = [].slice.call(age.querySelectorAll('.range-form__input'))

  noUiSlider.create(ageSlider, {
      start: [17, 42],
      connect: true,
      range: {
          'min': 17,
          'max': 42
      },
      step: 1
  })

  ageSlider.noUiSlider.on('update', function(values, handler) {
    ageInputs[handler].value = Math.round(values[handler])
  })

  const heightSlider = document.getElementById('height-slider')
  const height = document.getElementById('height')
  const heightInputs = [].slice.call(height.querySelectorAll('.range-form__input'))

  noUiSlider.create(heightSlider, {
      start: [170, 205],
      connect: true,
      range: {
          'min': 170,
          'max': 205
      },
      step: 1
  })

  heightSlider.noUiSlider.on('update', function(values, handler) {
    heightInputs[handler].value = Math.round(values[handler])
  })
})