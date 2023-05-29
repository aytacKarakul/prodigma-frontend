import axios from "axios";

class HomePageFAQBanner{
    constructor(){
      this.api = localStorage.getItem("apitoken");
      this.initFunc();
    }
    async initFunc(){
        const wrapper = document.querySelector(".page-home-sss-left");
        if(wrapper){
            await axios.get((`${process.env.API_KEY}` + "/widgets/get"), {
                auth: {
                  username: "prodigma3d",
                  password: `${this.api}`,
                },
              }).then(function (res){
                const contents = res.data.filter(item => item.dil === document.documentElement.lang && item.url === "home-page-sss-cover");
                  const data = JSON.parse(contents[0].json_data);
                  //foreach
                  data.forEach((element) => {
                    let imgTemp = document.createElement("picture");
                    imgTemp.innerHTML += `
                        <source media="(max-width: 1024px)" srcset="${process.env.SITE_DOMAIN}${element.yazi}"><source media="(min-width: 1025px)" srcset="${process.env.SITE_DOMAIN}${element.yazi}"><img src="${process.env.SITE_DOMAIN}${element.yazi}" alt="${element.id}">`;
                        wrapper.append(imgTemp);
                  });
              }).catch((error) => console.log(error));
        }
    }
}

export default HomePageFAQBanner;