import { projectSectionGenerator } from './modules/card.js';
import formListener from './modules/formValidation.js';
import menuHandler from './modules/menu.js';
import popupListenner from './modules/popup.js';

menuHandler();
projectSectionGenerator();
popupListenner();
formListener();