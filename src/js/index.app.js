/**
 * Created by Abaddon on 06.02.2017.
 *  Application entry point
 */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "isMobile" }] */
import './vendors/migrate';
import App from './App';
$(document).ready(App.run());
