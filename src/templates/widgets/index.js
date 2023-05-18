import MainSwiperSlider from "./home-page-main-slider";
import QuickSolutionBanner from "./quick-solution-easy-use";
import SwiperParalax from "./paralax-banner";
import OurSerivesSwiper from "./our-services";
import CreateProjectBanner from "./create-project-banner";
import HomePageBlogBanner from "./prodigma-plus-banner";
import BenefitsBrandBanner from "./benefits-brands";
import ProdigmaPlusPage from "./prodigma-plus-page";
import CncGallerySwiper from "./cnc-gallery";
import Blog from "./blog";
import CreateProject from "./create-project";
import { QuadrapleBanner } from "./quadraple-banner";
import { Thermoplastics } from "./thermoplastics";
import { ContinousFiber } from "./continous-fiber";
import { Fotopolimers } from "./fotopolimers";
import { Polimers } from "./polimers";
import CncPlastics from "./cnc-plastics-materials";
import CncMetals from "./cnc-metal-materials";
import { AboutUsBanners } from "./double-listed-banner";
import HomePageFAQBanner from "./home-page-sss";
import ContactPageForm from "./contact-banner";

class Widgets {
  constructor() {
    new MainSwiperSlider();
    new QuickSolutionBanner();
    new SwiperParalax();
    new OurSerivesSwiper();
    new CreateProjectBanner();
    new HomePageBlogBanner();
    new BenefitsBrandBanner();
    new ProdigmaPlusPage();
    new CncGallerySwiper();
    new Blog();
    new HomePageFAQBanner();
    new CreateProject();
    new ContactPageForm();
    //- imports Function files
    QuadrapleBanner();
    Thermoplastics();
    ContinousFiber();
    Fotopolimers();
    Polimers();
    CncPlastics();
    CncMetals();
    AboutUsBanners();

    const aboutPage = document.querySelector(".page-about-us");
    if (aboutPage) {
      document.addEventListener("scroll", () => {
        const body = document.body;
        const ws = window.scrollY;
        if (ws >= 100) {
          body.classList.add("onScrollAnimate");
        } else {
          body.classList.remove("onScrollAnimate");
        }
      });
    }
  }
}

export default Widgets;

import "Images/hakkimizda_hero.jpg";
import "Images/hakkimizda_hero_sm.jpg";
import "Images/hero_type_single_mb.jpg";
import "Images/hero_type_single.jpg";
import "Images/manifesto_cover_mb.jpg";
import "Images/manifesto_cover_lg.jpg";
import "Images/surdurebilirlik_mb.png";
import "Images/surdurebilirlik_lg.jpg";
import "Images/kariyer_mb.jpg";
import "Images/kariyer_lg.jpg";
import "Images/webinar_cover_lg.jpg";
import "Images/webinar_cover_mb.jpg";
import "Images/webinar_list_1_mb.png";
import "Images/webinar_list_1_lg.png";
import "Images/webinar_list_2_mb.png";
import "Images/webinar_list_2_lg.png";
import "Images/webinar_other_1.png";
import "Images/webinar_other_2.png";
import "Images/webinar_other_3.png";
import "Images/paralax-banner-mb.jpg";
import "Images/paralax-banner.png";

//Upload Files Image import
import "Upload/kariyer-hero-banner-mb.jpg";
import "Upload/kariyer-hero-banner.jpg";
import "Upload/manifesto-hero-cover-mb.jpg";
import "Upload/manifesto-hero-cover.jpg";
import "Upload/surdurulebilirlik-hero-cover-mb.jpg";
import "Upload/surdurulebilirlik-hero-cover.jpg";
import "Upload/hakkimizda-hero-cover-mb.jpg";
import "Upload/hakkimizda-hero-cover.jpg";
import "Upload/iletisim-hero-banner-mb.jpg";
import "Upload/iletisim-hero-banner.jpg";
import "Upload/malzemeler-hero-banner-mb.jpg";
import "Upload/malzemeler-hero-banner.jpg";
import "Upload/hizmetler-3d-cover-mb.jpg";
import "Upload/hizmetler-3d-cover-lg.jpg";
import "Upload/hizmetler-3d-tarama-cover-mb.jpg";
import "Upload/hizmetler-3d-tarama-cover-lg.jpg";
import "Upload/hizmetler-endustriyel-tasarim-cover-mb.jpg";
import "Upload/hizmetler-endustriyel-tasarim-cover-lg.jpg";
import "Upload/hizmetler-ardil-islemler-cover-mb.jpg";
import "Upload/hizmetler-ardil-islemler-cover-lg.jpg";
import "Upload/hakkimizda-detail-cover-mb.jpg";
import "Upload/hakkimizda-detail-cover-lg.jpg";
import "Upload/manifesto-detail-cover-mb.jpg";
import "Upload/manifesto-detail-cover-lg.jpg";
import "Upload/hizmetler-hero-banner-mb.jpg";
import "Upload/hizmetler-hero-banner.jpg";
import "Upload/ana-sayfa-sikca-sorulan-sorular.jpg";
import "Upload/hizmetler-3D-baski-banner-mb.jpg";
import "Upload/hizmetler-3D-baski-banner.jpg";
import "Upload/hizmetler-3d-tarama-tersine-muhendislik-banner-mb.jpg";
import "Upload/hizmetler-3d-tarama-tersine-muhendislik-banner.jpg";
import "Upload/hizmetler-ardil-islemler-banner-mb.jpg";
import "Upload/hizmetler-ardil-islemler-banner.jpg";
import "Upload/hizmetler-endustriyel-tasarim-banner-mb.jpg";
import "Upload/hizmetler-endustriyel-tasarim-banner.jpg";
import "Upload/etkinlik-ve-isbirlikleri-banner-mb.jpg";
import "Upload/etkinlik-ve-isbirlikleri-banner.jpg";
//DOC
import "Upload/prodigma-musteri-acik-riza-metni.docx";
import "Upload/customer-wxpress-written-consent.docx";
import "Upload/prodigma-tedarikci-formu.docx";
