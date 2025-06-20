document.addEventListener('DOMContentLoaded', function () {
  const fixedCTA = document.querySelector('.fixed_cta');
  const header = document.querySelector('#header');
  const ctaArea = document.querySelector('#formArea');

  let isCTAHidden = false;
  let isHeaderHidden = false;

  if ((fixedCTA || header) && ctaArea) {
    window.addEventListener('scroll', () => {
      const ctaRect = ctaArea.getBoundingClientRect();
      const offset = 100;

      // fixedCTA 처리
      if (fixedCTA) {
        if (ctaRect.top < window.innerHeight - offset) {
          if (!isCTAHidden) {
            fixedCTA.classList.add('fade-out');
            isCTAHidden = true;
          }
        } else {
          if (isCTAHidden) {
            fixedCTA.classList.remove('fade-out');
            isCTAHidden = false;
          }
        }
      }

      // header 처리
      if (header) {
        if (ctaRect.top < window.innerHeight - offset) {
          if (!isHeaderHidden) {
            header.classList.add('fade-out');
            isHeaderHidden = true;
          }
        } else {
          if (isHeaderHidden) {
            header.classList.remove('fade-out');
            isHeaderHidden = false;
          }
        }
      }
    });
  }

  // 버튼 클릭 시 모달 표시
const submitBtn = document.querySelector('.btn_submit');
const modal = document.querySelector('.modal');

if (submitBtn && modal) {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    modal.classList.add('active');

    setTimeout(() => {
      modal.classList.remove('active');
    }, 2000);
  });
}


});
