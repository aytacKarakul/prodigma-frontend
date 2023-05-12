import axios from "axios";
import { apitoken } from "../../auth/authentication";
import modalPopup from "../../components/web-component/modal/index";

class ProdigmaPlusPage {
  constructor() {
    this.onLoadBlogLists();
    const containerWrapper = document.querySelector(".pprodigma-plus");
    if (containerWrapper) {
      modalPopup();
    }
  }
  async onLoadBlogLists(){
    await axios.get((`${process.env.API_KEY}` + "/blogs/get"), {
      auth: {
        username: "prodigma3d",
        password: `${apitoken}`,
      },
    }).then(function (res){
      if(res.status === 200){
        const blogs = res.data.filter(item => item.dil === document.documentElement.lang);
        //blog list sorts
        const blogList = blogs.sort((a, b) => a.id - b.id);

        blogList.forEach((element) => {
          const wrapper = document.querySelector(".pprodigma-plus-body > ul");
          const langList = [ {tr:"Devamını Oku", en:"Read More"} ];
          
          function getStaticLang(lng) {
            if(document.documentElement.lang === "tr"){
              return lng = langList[0].tr; 
            }else if(document.documentElement.lang === "en"){
              return lng = langList[0].en;
            }
          }

          if(wrapper){
            let html = document.createElement("li");

            html.innerHTML += `<div>
            <a href="${process.env.SITE_DOMAIN}/blog/${element.url}">
            <picture>
              <source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${element.mobil_resim}">
              <source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${element.resim}">
              <img src="${process.env.SITE_DOMAIN}${element.mobil_resim}" alt="${element.title}">
            </picture>
            <div class="btxt">
              <div class="bt1">${element.title}</div>
              <div class="bt2">${getStaticLang()}</div>
              </div>
            </a>
            </div>`;
            wrapper.appendChild(html);
          }
        });
      }
    }).catch((error) => console.log(error))
  }
}
export default ProdigmaPlusPage;