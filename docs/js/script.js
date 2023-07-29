"use strict";
const burger = document.querySelector(".burger"),
   header = document.querySelector(".header"),
   body = document.querySelector("body");

window.addEventListener("load", () => {
   function qs(element) {
      let newEl = document.querySelector(element);
      if (newEl) return newEl;
   }
   function qa(element) {
      let newEl = document.querySelectorAll(element);
      if (newEl) return newEl;
   }

   // ! Burger

   if (burger) {
      body.addEventListener("click", burgerToggle);
      function burgerToggle(e) {
         if (e.target.closest(".burger")) {
            if (burger.classList.contains("active")) {
               burger.classList.remove("active");
               header.classList.remove("active");
               body.classList.remove("lock-scroll");
            } else {
               burger.classList.add("active");
               header.classList.add("active");
               body.classList.add("lock-scroll");
               window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
            }
         } else if (!e.target.closest(".burger") && !e.target.closest(".menu")) {
            burger.classList.remove("active");
            header.classList.remove("active");
            body.classList.remove("lock-scroll");
            window.removeEventListener("scroll", closeBurger);
         }
      }
      function closeBurger() {
         //Необязательная дополнительная проверка
         if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            menu.classList.remove("active");
            header.classList.remove("active");
            body.classList.remove("lock-scroll");
            window.removeEventListener("scroll", closeBurger);
         }
      }
   }

   // ! Catalog

   const headerLinkOpen = document.querySelector('.header__link-open');
   const catalogMainLink = document.querySelector('.catalog__main-link');

   headerLinkOpen.addEventListener('click', function () {
      header.classList.add('current');
   });

   catalogMainLink.addEventListener('click', function () {
      header.classList.remove('current');
   });


   // ! Dropdown 
   // const dropdowns = document.querySelectorAll('.dropdown');

   // dropdowns.forEach(dropdown => {
   //    const select = dropdown.querySelector('.dropdown__select');
   //    const caret = dropdown.querySelector('.dropdown__caret');
   //    const menu = dropdown.querySelector('.dropdown__menu');
   //    const options = dropdown.querySelectorAll('.dropdown__item');
   //    const selected = dropdown.querySelector('.dropdown__selected');

   //    select.addEventListener('click', () => {
   //       caret.classList.toggle('caret-rotate');
   //       menu.classList.toggle('menu-open');
   //    })
   //    options.forEach(option => {
   //       option.addEventListener('click', () => {
   //          selected.innerText = option.innerText;
   //          caret.classList.remove('caret-rotate');
   //          menu.classList.remove('menu-open');
   //          options.forEach(option => {
   //             option.classList.remove('dropdown-active');
   //          })
   //          option.classList.add('dropdown-active');
   //       })
   //    })
   // })
});


// ! Accordeon

// const previewElements = document.querySelectorAll(".accord__preview");

// previewElements.forEach(function (preview) {
//    preview.addEventListener("click", toggleAccordion);
// });

// function toggleAccordion(e) {
//    const currentColumn = e.currentTarget.closest(".accord__column");
//    const columnText = currentColumn.querySelector(".accord__column-block-text");

//    if (currentColumn.classList.contains("opened")) {
//       // Если текущий аккордеон уже открыт, закрываем его
//       currentColumn.classList.remove("opened");
//       columnText.style.height = "0";
//    } else {
//       // Если текущий аккордеон закрыт, закрываем все остальные и открываем текущий
//       const openedColumns = document.querySelectorAll(".accord__column.opened");
//       openedColumns.forEach(function (column) {
//          column.classList.remove("opened");
//          const text = column.querySelector(".accord__column-block-text");
//          text.style.height = "0";
//       });

//       currentColumn.classList.add("opened");
//       columnText.style.height = columnText.scrollHeight + "px";
//    }
// }


// ! Preloader Normal

// window.addEventListener('load', function () {
//    var preloader = document.getElementById('preloader');
//    var preloaderOverlay = document.getElementById('preloader-overlay');

//    preloader.style.display = 'none';
//    preloaderOverlay.style.display = 'none';
// });


// const section = document.querySelector('.hero');
// const category = section.getAttribute('data-category');
// const author = section.getAttribute('data-author');

// console.log(category); // Выводит "news"
// console.log(author); // Выводит "John Doe"


// ! Swiper

new Swiper('.hero__block-picture', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   speed: 600,
   direction: "vertical",
   // mousewheel: true,
   pagination: {
      el: ".hero__pagination",
      clickable: true,
      renderBullet: function (index, className) {
         let number = (index + 1).toString().padStart(2, "0");
         let bulletContent = '<span class="bullet-number">' + number + '</span>';
         if (className.includes("swiper-pagination-bullet-active")) {
            bulletContent = '<span class="bullet-number bullet-active">' + number + '</span>';
         }
         return '<span class="' + className + '">' + bulletContent + '</span>';
      }
   },

   slidesPerView: 1,
   spaceBetween: 30,
});

new Swiper('.features', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },

   breakpoints: {
      0: {
         slidesPerView: 1.1,
         spaceBetween: 15

      },
      800: {
         slidesPerView: 2.1,
         spaceBetween: 30
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 40
      }
   }
})

// ! Rating stars 

const starContainers = document.querySelectorAll('.stars');

starContainers.forEach(starContainer => {
   const stars = starContainer.querySelectorAll('.stars__star');

   stars.forEach((star, index1) => {
      star.addEventListener("click", () => {
         stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
         });
      });
   });
});


// ! Отмена скролла при клике на ссылку

const allLinks = document.querySelectorAll('a');

allLinks.forEach((link) => {
   link.addEventListener('click', (event) => {
      event.preventDefault(); // Отменяем действие по умолчанию (скроллинг вверх)

      // Дополнительный код для всех ссылок
      // ...
   });
});


// ! pop-up 

// Получаем ссылки на элементы кнопки и попапа
const buttonUser = document.querySelector('.header__bar-btn-user');
const popUp = document.querySelector('.pop-up');
const btnClose = document.querySelector('.pop-up__btn-close');

// Добавляем обработчик события клика на кнопку "Открыть попап"
buttonUser.addEventListener('click', () => {
   // При каждом клике переключаем класс "active" у попапа
   popUp.classList.toggle('active');

   // Добавляем или удаляем класс "lock-scroll" у body в зависимости от состояния попапа
   document.body.classList.toggle('lock-scroll', popUp.classList.contains('active'));
});

// Добавляем обработчик события клика на кнопку "Закрыть попап"
btnClose.addEventListener('click', () => {
   // Убираем класс "active" у попапа и удаляем класс "lock-scroll" у body
   popUp.classList.remove('active');
   document.body.classList.remove('lock-scroll');
});

// ! pop-up-log-in

// Получаем ссылки на элементы
const btnPopUp = document.querySelector('.btn-pop-up');
const popUpLog = document.querySelector('.pop-up-log');
const btnCloseLog = document.querySelector('.pop-up-log__btn-close');

// Добавляем обработчик события клика на кнопку
btnPopUp.addEventListener('click', () => {
   // При клике добавляем класс "active" к попапу pop-up-log
   popUpLog.classList.add('active');

   // Убираем класс "active" у другого попапа pop-up
   popUp.classList.remove('active');
});

// Добавляем обработчик события клика на кнопку "Закрыть" в pop-up-log
btnCloseLog.addEventListener('click', () => {
   // Убираем класс "active" у попапа pop-up-log при клике на кнопку "Закрыть"
   popUpLog.classList.remove('active');
});

// ! pop-up-password

const linkPassword = document.querySelector('.pop-up-log__password-link');
const popUpPassword = document.querySelector('.pop-up-password');

linkPassword.addEventListener('click', () => {
   popUpLog.classList.remove('active');
   popUpPassword.classList.add('active');
});

const btnClosePassword = document.querySelector('.pop-up-password__btn-close');

btnClosePassword.addEventListener('click', () => {
   popUpPassword.classList.remove('active'); // Убираем класс "active" у pop-up-password при закрытии
});


// ! breadcrumbs Btn

// Получаем все элементы "breadcrumb" для каждого блока
const productsBreadcrumbs = document.querySelectorAll('.products__breadcrumbs .breadcrumb');
const trendBreadcrumbs = document.querySelectorAll('.trend__breadcrumbs .breadcrumb');

// Добавляем обработчик события "click" для каждого элемента в блоке "products__breadcrumbs"
productsBreadcrumbs.forEach(breadcrumb => {
   breadcrumb.addEventListener('click', () => {
      // Удаляем класс "active" у всех элементов "breadcrumb" внутри текущего блока
      productsBreadcrumbs.forEach(crumb => {
         crumb.classList.remove('active');
      });

      // Добавляем класс "active" только для текущего элемента
      breadcrumb.classList.add('active');
   });
});

// Добавляем класс "active" только первому элементу в блоке "products__breadcrumbs"
productsBreadcrumbs[0].classList.add('active');

// Добавляем обработчик события "click" для каждого элемента в блоке "trend__breadcrumbs"
trendBreadcrumbs.forEach(breadcrumb => {
   breadcrumb.addEventListener('click', () => {
      // Удаляем класс "active" у всех элементов "breadcrumb" внутри текущего блока
      trendBreadcrumbs.forEach(crumb => {
         crumb.classList.remove('active');
      });

      // Добавляем класс "active" только для текущего элемента
      breadcrumb.classList.add('active');
   });
});

// Добавляем класс "active" только первому элементу в блоке "trend__breadcrumbs"
trendBreadcrumbs[0].classList.add('active');



// ! breadcrumbs sizes

// Получаем все элементы "card__sizes"
const cardSizes = document.querySelectorAll('.card__sizes');

// Добавляем класс "active" к второй кнопке в каждом блоке
cardSizes.forEach(sizes => {
   const buttons = sizes.querySelectorAll('.card__btn');
   buttons[1].classList.add('active');
});

// Получаем все элементы "card__btn"
const breadcrumbsBtn = document.querySelectorAll('.card__btn');

// Добавляем обработчик события "click" для каждого элемента
breadcrumbsBtn.forEach(breadcrumb => {
   breadcrumb.addEventListener('click', () => {
      // Получаем родительский элемент текущей кнопки
      const parentSizes = breadcrumb.closest('.card__sizes');

      // Получаем все элементы "card__btn" внутри родительского элемента
      const btnsInParent = parentSizes.querySelectorAll('.card__btn');

      // Удаляем класс "active" у всех элементов "card__btn" внутри родительского элемента
      btnsInParent.forEach(btn => {
         btn.classList.remove('active');
      });

      // Добавляем класс "active" только для текущей кнопки
      breadcrumb.classList.add('active');
   });
});
