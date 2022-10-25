import 'Theme/base.scss';
import './index.scss';

import Partials from 'Partials';
import Components from 'Components';
import LoginTabs from './templates/components/tab/index';
import OurSerivesSwiper from './templates/widgets/our-services';
import SwiperParalax from './templates/widgets/paralax-banner';

new Partials();
new Components();
new OurSerivesSwiper();
new SwiperParalax();
new LoginTabs();

import 'Images/google-icon.svg';
import 'Images/facebook-icon.svg';