/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// rs-theater
	if (document.querySelector('.rs-news')) {
		// До этой ширины слайдер будет активным
		const breakpoint = window.matchMedia('(max-width: 1169.98px)');

		let newsSlider;

		const breakpointChecker = function () {
			if (breakpoint.matches === true) {
				// Выключаем слайдер
				if (newsSlider !== undefined) newsSlider.destroy(true, true);
				return;
			} else if (breakpoint.matches === false) {
				// Включаем слайдер
				return enableSwiper();
			}
		};

		// Инициализация слайдера
		const enableSwiper = function () {
			const sliderBlocks = document.querySelectorAll('.rs-news');

			sliderBlocks.forEach(sliderBlock => {
				const sliderMain = sliderBlock.querySelector('.rs-news__list .rs-news__slider');
				const sliderPromo = sliderBlock.querySelector('.rs-news__promo .rs-news__slider');
				// const arrowNext = sliderBlock.querySelector('.rs-news__button-next');
				// const arrowPrev = sliderBlock.querySelector('.rs-news__button-prev');

				// Перечень слайдеров
				const sliderMainSwiper = new Swiper(sliderMain, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 1,
						// delay: 5000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: false,
						// Изменить направление
						// reverseDirection: true,
						// Не ждать анимацию
						waitForTransition: false,
					},

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 10000,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,

					// Цикличность слайдера
					loop: true,
					loopAdditionalSlides: 4,

					// Вертикальный слайдер
					direction: 'vertical',

					// Брекпоинты (адаптив)
					breakpoints: {
						1169.98: {
							slidesPerView: 3,
							spaceBetween: 0,
						},
					},
				});
				const sliderPromoSwiper = new Swiper(sliderPromo, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 1,
						// delay: 5000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: false,
						// Изменить направление
						// reverseDirection: true,
						// Не ждать анимацию
						waitForTransition: false,
					},

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 10000,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,

					// Цикличность слайдера
					loop: true,
					loopAdditionalSlides: 4,

					// Вертикальный слайдер
					direction: 'vertical',

					// Брекпоинты (адаптив)
					breakpoints: {
						1169.98: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
					},
				});

				// Остановка слайдера при наведении на него
				sliderMain.addEventListener('mouseenter', function (e) {
					sliderMainSwiper.autoplay.stop();
				})
				sliderMain.addEventListener('mouseleave', function (e) {
					sliderMainSwiper.autoplay.start();
				})

				// Остановка слайдера при наведении на него
				sliderPromo.addEventListener('mouseenter', function (e) {
					sliderPromoSwiper.autoplay.stop();
				})
				sliderPromo.addEventListener('mouseleave', function (e) {
					sliderPromoSwiper.autoplay.start();
				})
			});
		};

		breakpoint.addListener(breakpointChecker);
		breakpointChecker();
	}

	// rs-theater
	if (document.querySelector('.rs-theater')) {
		const sliderBlocks = document.querySelectorAll('.rs-theater');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-theater__slider');
			const arrowNext = sliderBlock.querySelector('.rs-theater__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-theater__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-theater__pagination');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Курсор
				grabCursor: true,

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	// clickable: true,
				// 	// dynamicBullets: true
				// 	type: 'progressbar',
				// },

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 0,
						grid: {
							fill: 'row',
							rows: 1,
						},
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 0,
						grid: {
							fill: 'row',
							rows: 1,
						},
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 0,
						grid: {
							fill: 'row',
							rows: 1,
						},
					},
					991.98: {
						slidesPerView: 2,
						spaceBetween: 0,
						grid: {
							fill: 'row',
							rows: 2,
						},
					},
					1169.98: {
						slidesPerView: 3,
						spaceBetween: 0,
						grid: {
							fill: 'row',
							rows: 2,
						},
					},
				},
			});
		});
	}

	// rs-partners
	if (document.querySelector('.rs-partners')) {
		const sliderBlocks = document.querySelectorAll('.rs-partners');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-partners__slider');
			const arrowNext = sliderBlock.querySelector('.rs-partners__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-partners__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-partners__pagination');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Курсор
				grabCursor: true,

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	// clickable: true,
				// 	// dynamicBullets: true
				// 	type: 'progressbar',
				// },

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 2.1,
						spaceBetween: 10,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					991.98: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				},
			});
		});
	}

	// rs-gos-slider
	if (document.querySelector('.rs-gos-slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-gos-slider');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-gos-slider__slider');
			const arrowNext = sliderBlock.querySelector('.rs-gos-slider__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-gos-slider__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-gos-slider__pagination');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Курсор
				grabCursor: true,

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	// clickable: true,
				// 	// dynamicBullets: true
				// 	type: 'progressbar',
				// },

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				// Брейкпоинты(адаптив)
				// Шрина экрана
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					539.98: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					991.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 4,
						spaceBetween: 28,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});