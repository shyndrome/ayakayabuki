// index.js

//日・英表示定義
var lang = 0; //日が0, 英が1

// header.htmlの読み込み
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
      document.getElementById('header_fetch_target').innerHTML = data;
      
      const langToggleToEn = document.getElementById("langToggleToEn");
      if (langToggleToEn) {
        langToggleToEn.onclick = function(){
            const navJa = document.getElementsByClassName("nav-ja");
            const navEn = document.getElementsByClassName("nav-en");
            const langJa = document.getElementsByClassName("lang_ja");
            const langEn = document.getElementsByClassName("lang_en");
            if (lang == 0) {
                for (let nav of navJa) {
                    nav.style.color = "#bbb";
                }
                for (let nav of navEn) {
                    nav.style.color = "#444";
                }
                for (let el of langJa) {
                    el.style.display = "none";
                    el.style.opacity = 0;
                }
                for (let el of langEn) {
                    el.style.display = "block";
                    el.style.opacity = 0;
                }
                setTimeout(function () {
                    for (let el of langEn) {
                        el.style.transition = "opacity 1s ease";
                        el.style.opacity = 1;
                    }
                    lang = 1;
                }, 50);
            }
        }
      }

      const langToggleToJa = document.getElementById("langToggleToJa");
      if (langToggleToJa) {
        langToggleToJa.onclick = function(){
            const navJa = document.getElementsByClassName("nav-ja");
            const navEn = document.getElementsByClassName("nav-en");
            const langJa = document.getElementsByClassName("lang_ja");
            const langEn = document.getElementsByClassName("lang_en");
            if (lang == 1) {
                for (let nav of navJa) {
                    nav.style.color = "#444";
                }
                for (let nav of navEn) {
                    nav.style.color = "#bbb";
                }
                for (let el of langJa) {
                    el.style.display = "block";
                    el.style.opacity = 0;
                }
                for (let el of langEn) {
                    el.style.display = "none";
                    el.style.opacity = 0;
                }
                setTimeout(function () {
                    for (let el of langJa) {
                        el.style.transition = "opacity 1s ease";
                        el.style.opacity = 1;
                    }
                    lang = 0;
                }, 50);
            }
        }
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