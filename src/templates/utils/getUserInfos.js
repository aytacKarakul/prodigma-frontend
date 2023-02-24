export default function getUserInfos(name, surname) {
  const logoffTemplateWrapper = document.querySelector(".site-header-login");

  let logoffTemplateRemoveWrapper = document.querySelector(".site-header-logoff");
  let logoffTemplate = document.createElement("div");
  logoffTemplate.className = "site-header-login-success";

  logoffTemplate.innerHTML += `
    <div class="site-header-login-success-project">
      <a
        class="btn btn-green btn-medium"
        title="Proje Başlat"
        href="/proje-baslat.html"
        ><span>Proje Başlat</span></a
      >
    </div>
    <div class="site-header-login-user"><span>TA</span></div>
    <div class="site-header-login-success-left">
      <span class="site-header-login-hello">Hoşgeldiniz</span
      ><span class="site-header-login-member">${name} ${surname}</span>
      <div class="site-header-member-menu">
        <div class="site-header-member-menu-header">
          <div class="tt1">Hoş geldiniz,</div>
          <div class="bttm">
            <div class="tt2">${name} ${surname}</div>
            <div class="tt3"><button>Çıkış Yap</button></div>
          </div>
        </div>
        <div class="site-header-member-menu-content">
          <ul>
            <li><a href="/siparislerim.html">Siparişlerim</a></li>
            <li><a href="/bildirimlerim.html">Bildirimlerim</a></li>
            <li><a href="/adreslerim.html">Adreslerim</a></li>
            <li><a href="/uyelik-bilgilerim.html">Üyelik Bilgilerim</a></li>
            <li><a href="/iletisim-izinlerim.html">İletişim İzinlerim</a></li>
            <li><a href="/sife-degistirme.html">Şifre Değiştirme</a></li>
            <li>
              <a href="/destek.html"
                >Destek<i class="icon icon-arrow-line"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="site-header-login-success-cart">
      <a href="/basket.html"><i class="icon icon-cart"></i></a>
    </div>
    `;

  logoffTemplateRemoveWrapper?.remove();
  logoffTemplateWrapper.append(logoffTemplate);
}
