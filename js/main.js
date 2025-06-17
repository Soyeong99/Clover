document.addEventListener('DOMContentLoaded', function () {


  // <!-- fixed_cta / cta 영역 스크롤 감지 -->
  const fixedCTA = document.querySelector('.fixed_cta');
  const ctaArea = document.querySelector('#formArea');
  let isHidden = false;

  if (fixedCTA && ctaArea) {
    window.addEventListener('scroll', () => {
      const ctaRect = ctaArea.getBoundingClientRect();
      const offset = 100; // 사라지는 지점을 조금 아래로

      if (ctaRect.top < window.innerHeight - offset) {
        if (!isHidden) {
          fixedCTA.classList.add('fade-out');
          isHidden = true;
        }
      } else {
        if (isHidden) {
          fixedCTA.classList.remove('fade-out');
          isHidden = false;
        }
      }
    });
  }

  $('.btn_submit').click(function(){
    $(this).find('.modal').stop().fadeIn();
  });

});