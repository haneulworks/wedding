$(function() {
	// 메인 섹션 스크롤 휠
	const $sections = $('.main-section');
	let currentIndex = 0;
	let isScrolling = false;

	function scrollToSection(index) {
		if (index < 0 || index >= $sections.length) return;
		isScrolling = true;

		const $targetSection = $sections.eq(index);

		$('html, body').stop().animate({
			scrollTop: $targetSection.offset().top
		}, 800, function() {
			isScrolling = false;
			currentIndex = index;

			// header whiteMode 토글
			if ($targetSection.is('#projects')) {
				$('header').addClass('whiteMode');
			} else {
				$('header').removeClass('whiteMode');
			}
		});
	}

	$(window).on('wheel', function(e) {
		if (isScrolling) return;

		const delta = e.originalEvent.deltaY;
		const scrollTop = $(window).scrollTop();
		const windowHeight = $(window).height();
		const sectionTop = $sections.eq(currentIndex).offset().top;
		const sectionHeight = $sections.eq(currentIndex).outerHeight();

		if (delta > 0) {
			// 아래로 스크롤
			const scrollBottom = scrollTop + windowHeight;
			const sectionBottom = sectionTop + sectionHeight;

			// 현재 섹션의 맨 아래 근처까지 내렸을 때만 다음 섹션으로 이동
			if (scrollBottom >= sectionBottom - 10) {
				scrollToSection(currentIndex + 1);
			}
		} else if (delta < 0) {
			// 위로 스크롤
			// 현재 섹션의 맨 위 근처에서만 이전 섹션으로 이동
			if (scrollTop <= sectionTop + 10) {
				scrollToSection(currentIndex - 1);
			}
		}
	});

	// 프로그래스 바
	$('.progress-bar').each(function() {
		var percent = $(this).find('.progress-per').text().trim();
		$(this).find('.progress-fill').animate({
			width: percent + '%'
		}, 1000);
	});
});


$(document).ready(function() {
    let activeFilters = [];
    const typeMap = {
        "홈페이지": "home",
        "쇼핑몰": "shop",
        "CMS": "cms",
        "자사솔루션": "solution"
    };

    // 필터 버튼 클릭
    $('.project-filter__wrap .btn').click(function() {
        const filterType = typeMap[$(this).text()];

        if (activeFilters.includes(filterType)) {
            activeFilters = activeFilters.filter(f => f !== filterType);
            $(this).removeClass('active');
        } else {
            activeFilters.push(filterType);
            $(this).addClass('active');
        }

        filterProjects();
    });

    // 초기화 버튼 클릭
    $('.btn-reset').click(function() {
        // 회전 애니메이션 클래스 추가
        $(this).addClass('rotate');
        // 애니메이션 끝나면 클래스 제거
        setTimeout(() => {
            $(this).removeClass('rotate');
        }, 500); // 애니메이션 시간과 동일

        // 필터 초기화
        activeFilters = [];
        $('.project-filter__wrap .btn').removeClass('active');
        $('.project-list__content').show();
    });

    // 필터링 함수
    function filterProjects() {
        if (activeFilters.length === 0) {
            $('.project-list__content').show();
        } else {
            $('.project-list__content').each(function() {
                const projectTypes = $(this).data('project-type').split(',');
                const show = activeFilters.some(f => projectTypes.includes(f));
                if (show) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    }
});


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

		$('.call-popup').addClass('active');
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