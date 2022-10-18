import 'Images/google-icon.svg';
import 'Images/facebook-icon.svg';

import 'Theme/base.scss';
import './index.scss';

import Partials from 'Partials';

import './templates/components/';
import Inputs from './templates/components/web-component/inputs/index';
import WebComponents from './templates/components/web-component/index';
import LoginTabs from './templates/components/tab/index';

new Partials();
new WebComponents();
new LoginTabs();
new Inputs();