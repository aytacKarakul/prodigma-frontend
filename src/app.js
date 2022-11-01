import 'Theme/base.scss';
import './index.scss';

import Partials from 'Partials';
import Components from 'Components';
import LoginTabs from './templates/components/tab/index';
import MainSwiperSlider from './templates/widgets/home-page-main-slider';
import SwiperParalax from './templates/widgets/paralax-banner';
import OurSerivesSwiper from './templates/widgets/our-services';
import CreateProjectBanner from './templates/widgets/create-project';

new Partials();
new Components();
new MainSwiperSlider();
new SwiperParalax();
new OurSerivesSwiper();
new LoginTabs();
new CreateProjectBanner();

import 'Images/google-icon.svg';
import 'Images/facebook-icon.svg';