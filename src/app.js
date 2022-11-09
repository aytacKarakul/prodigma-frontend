import 'Theme/base.scss';
import './index.scss';

import Partials from 'Partials';
import Components from 'Components';
import LoginTabs from './templates/components/tab/index';
import MainSwiperSlider from './templates/widgets/home-page-main-slider';
import QuadrapleBanner from './templates/widgets/quadraple-banner';
import SwiperParalax from './templates/widgets/paralax-banner';
import OurSerivesSwiper from './templates/widgets/our-services';
import HomePageBlogBanner from './templates/widgets/prodigma-plus-banner';
import CreateProjectBanner from './templates/widgets/create-project';
import BasketAddressInvoiceTab from './templates/basket/addresses';

new Partials();
new Components();
new MainSwiperSlider();
new QuadrapleBanner();
new SwiperParalax();
new OurSerivesSwiper();
new HomePageBlogBanner();
new LoginTabs();
new CreateProjectBanner();
new BasketAddressInvoiceTab();

import 'Images/google-icon.svg';
import 'Images/facebook-icon.svg';