// 日・英表示定義
var lang = localStorage.getItem('selectedLang') ? parseInt(localStorage.getItem('selectedLang')) : 0;

// ★共通の適用関数を定義（onclickの中身をここにまとめました）
function applyLanguage(currentLang, isAnimated) {
    const navJa = document.getElementsByClassName("nav-ja");
    const navEn = document.getElementsByClassName("nav-en");
    const langJa = document.getElementsByClassName("lang_ja");
    const langEn = document.getElementsByClassName("lang_en");

    const showEls = (currentLang === 1) ? langEn : langJa;
    const hideEls = (currentLang === 1) ? langJa : langEn;

    // ナビの色変更
    for (let nav of navJa) nav.style.color = (currentLang === 0) ? "#444" : "#bbb";
    for (let nav of navEn) nav.style.color = (currentLang === 1) ? "#444" : "#bbb";

    // 非表示処理
    for (let el of hideEls) {
        el.style.display = "none";
        el.style.opacity = 0;
    }

    // 表示処理
    for (let el of showEls) {
        el.style.display = "block";
        if (isAnimated) {
            el.style.opacity = 0;
            setTimeout(() => {
                el.style.transition = "opacity 1s ease";
                el.style.opacity = 1;
            }, 50);
        } else {
            el.style.transition = "none";
            el.style.opacity = 1;
        }
    }
}

// header.htmlの読み込み
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
      document.getElementById('header_fetch_target').innerHTML = data;

      // ★ページを読み込んだ瞬間に、保存されている言語を反映させる
      applyLanguage(lang, false);

      const toEnBtns = ["langToggleToEn", "langToggleToEn_Mob"]
      const toJaBtns = ["langToggleToJa", "langToggleToJa_Mob"]

      toEnBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = function() {
                if (lang == 0) {
                    lang = 1;
                    localStorage.setItem('selectedLang', 1);
                    applyLanguage(1, true);
                    closeLangMenu();
                }
            }
        }
      })

      toJaBtns.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = function() {
                if (lang == 1) {
                    lang = 0;
                    localStorage.setItem('selectedLang', 0);
                    applyLanguage(0, true);
                    closeLangMenu();
                }
            }
        }
      })
      function closeLangMenu() {
        const check = document.getElementById('lang-btn-check');
        if (check) check.checked = false;
      }
    })
    .catch(error => console.error('Error loading header:', error));
});

// footer.htmlの読み込み
document.addEventListener('DOMContentLoaded', () => {
  fetch('footer.html')
    .then(response => response.text()) 
    .then(data => {
      document.getElementById('footer_fetch_target').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});


function categorySort(targetCategory, isAnimated=true){
    const allBlocks = document.getElementsByClassName("news_block");
    const sortAll = document.getElementsByClassName("sort_all");
    const sortInfo = document.getElementsByClassName("sort_info");
    const sortLive = document.getElementsByClassName("sort_live");

    // ナビの色変更
    for (let nav of sortAll) nav.style.color = (targetCategory === 'category_all') ? "#444" : "#bbb";
    for (let nav of sortInfo) nav.style.color = (targetCategory === 'category_info') ? "#444" : "#bbb";
    for (let nav of sortLive) nav.style.color = (targetCategory === 'category_live') ? "#444" : "#bbb";

    for (let el of allBlocks) {
        const showEls = (targetCategory === 'category_all' || el.classList.contains(targetCategory));

        if (showEls) {
            if (isAnimated) {
                el.style.transition = "opacity 0.5s ease";
                el.style.opacity = 0;
                setTimeout(() => {
                    if (el.style.opacity == 0) el.style.display = "flex";
                }, 500);
                setTimeout(() => {
                    el.style.transition = "opacity 0.8s ease";
                    el.style.opacity = 1;
                }, 800);
            } else {
                el.style.opacity = 1;
            }
        } else {
            if (isAnimated) {
                el.style.transition = "opacity 0.5s ease";
                el.style.opacity = 0;
                setTimeout(() => {
                    if (el.style.opacity == 0) el.style.display = "none";
                }, 500);
            } else {
                el.style.display = "none";
                el.style.opacity = 0;
            }
        }
    }
}

