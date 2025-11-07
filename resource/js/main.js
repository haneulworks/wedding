$(function () {
	let scrollY = 0; // 현재 스크롤 위치 저장 변수

	// 팝업 열기
	$('.btn-call').on('click', function () {
		scrollY = window.scrollY; // 현재 스크롤 위치 저장

		// body 고정 (스크롤 막기 + 위치 유지)
		$('body').css({
			position: 'fixed',
			top: `-${scrollY}px`,
			left: 0,
			width: '100%',
			overflow: 'hidden'
		});

		$(this).next('.call-popup').addClass('active');
	});

	// 팝업 닫기
	$('.call-popup .closeBtn').on('click', function () {
		closePopup();
	});

	// 바깥 영역 클릭 시 닫기
	$('.call-popup').on('click', function (e) {
		if ($(e.target).hasClass('call-popup')) {
			closePopup();
		}
	});

	// 닫는 공통 함수
	function closePopup() {
		$('.call-popup').removeClass('active');

		// body 스타일 제거 + 기존 위치로 복구
		$('body').css({
			position: '',
			top: '',
			left: '',
			width: '',
			overflow: ''
		});

		window.scrollTo(0, scrollY); // 스크롤 원래대로 이동
	}
});

$(function () {
  // ✅ 식전 피로연
  const targetDate1 = new Date('2026-02-28');
  const today1 = new Date();
  today1.setHours(0, 0, 0, 0);
  targetDate1.setHours(0, 0, 0, 0);
  const diffDays1 = Math.ceil((targetDate1 - today1) / (1000 * 60 * 60 * 24));

  if (diffDays1 > 0) {
    $('.dday-before-first').show();
    $('.dday-today-first, .dday-after-first').hide();
    $('.firstDate').text(`D-${diffDays1}`);
  } else if (diffDays1 === 0) {
    $('.dday-today-first').show();
    $('.dday-before-first, .dday-after-first').hide();
  } else {
    $('.dday-after-first').show();
    $('.dday-before-first, .dday-today-first').hide();
  }

  // ✅ 본식
  const targetDate2 = new Date('2026-03-14');
  const today2 = new Date();
  today2.setHours(0, 0, 0, 0);
  targetDate2.setHours(0, 0, 0, 0);
  const diffDays2 = Math.ceil((targetDate2 - today2) / (1000 * 60 * 60 * 24));

  if (diffDays2 > 0) {
    $('.dday-before-main').show();
    $('.dday-today-main, .dday-after-main').hide();
    $('.realDate').text(`D-${diffDays2}`);
  } else if (diffDays2 === 0) {
    $('.dday-today-main').show();
    $('.dday-before-main, .dday-after-main').hide();
  } else {
    $('.dday-after-main').show();
    $('.dday-before-main, .dday-today-main').hide();
  }
});



var weddingSwiper = new Swiper(".weddingSlide", {
	slidesPerView: 'auto',
	spaceBetween: 0,
	centeredSlides: true,
	initialSlide: 1,
	observer: true,  
	observeParents: true,
	autoplay: {
		delay: 3000,
	},
	loop: true,
	loopAdditionalSlides: 1,
	speed: 1000,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	effect: "coverflow",
});
//메인비주얼 슬라이드 (E)