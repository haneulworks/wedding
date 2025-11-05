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
  const targetDate = new Date('2026-02-28'); // 목표 날짜
  const today = new Date();                  // 오늘 날짜

  // 시간(시/분/초) 영향 제거 → 날짜만 비교
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  // 남은 일수 계산
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 출력 (예: D-123, D-Day, D+1 형태)
  let displayText = '';

  if (diffDays > 0) {
    displayText = `D-${diffDays}`;
  } else if (diffDays === 0) {
    displayText = 'D-Day';
  } else {
    displayText = `D+${Math.abs(diffDays)}`; // 날짜가 지났을 때도 대응 가능
  }

  $('.firstDate').text(displayText);
});

$(function () {
  const targetDate2 = new Date('2026-03-14'); // 목표 날짜
  const today = new Date();                  // 오늘 날짜

  // 시간(시/분/초) 영향 제거 → 날짜만 비교
  today.setHours(0, 0, 0, 0);
  targetDate2.setHours(0, 0, 0, 0);

  // 남은 일수 계산
  const diffTime = targetDate2 - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // 출력 (예: D-123, D-Day, D+1 형태)
  let displayText = '';

  if (diffDays > 0) {
    displayText = `D-${diffDays}`;
  } else if (diffDays === 0) {
    displayText = 'D-Day';
  } else {
    displayText = `D+${Math.abs(diffDays)}`; // 날짜가 지났을 때도 대응 가능
  }

  $('.realDate').text(displayText);
});


var weddingSwiper = new Swiper(".weddingSlide", {
	slidesPerView: 'auto',
	spaceBetween: 16,
	centeredSlides: true,
	initialSlide: 1,
	observer: true,  
	observeParents: true,
	autoplay: true,
	loop: true,
	loopAdditionalSlides: 1,
	speed: 800,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	effect: "coverflow",
});
//메인비주얼 슬라이드 (E)