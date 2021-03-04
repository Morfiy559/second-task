// import _ from "lodash";

import "./scss/style.scss";
import "./css/style.css";

import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import './js/jquery.formstyler.min';
    $(function(){

        // jQuery methods go here...
      $('select').styler();
      });