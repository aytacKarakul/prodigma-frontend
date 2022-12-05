import 'Theme/base.scss';
import './index.scss';

import 'Images/google-icon.svg';
import 'Images/facebook-icon.svg';

import Partials from 'Partials';
import Components from 'Components';
import Widgets from './templates/widgets';
import Flatpages from './templates/flatpages';
import Basket from './templates/basket';
import LoginTabs from './templates/components/tab/index';
import MainSwiperSlider from './templates/widgets/home-page-main-slider';
import SwiperParalax from './templates/widgets/paralax-banner';
import OurSerivesSwiper from './templates/widgets/our-services';
import HomePageBlogBanner from './templates/widgets/prodigma-plus-banner';
import CreateProjectBanner from './templates/widgets/create-project';
import BasketAddressInvoiceTab from './templates/basket/addresses';

new Partials();
new Components();
new Widgets();
new Flatpages();
new Basket();
new MainSwiperSlider();
new SwiperParalax();
new OurSerivesSwiper();
new HomePageBlogBanner();
new LoginTabs();
new CreateProjectBanner();
new BasketAddressInvoiceTab();