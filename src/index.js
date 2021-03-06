// import _ from "lodash";
// import "normalize";
import "./css/style.css";
import "./scss/style.scss";


import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import './js/jquery.formstyler.min';
    $(function(){

        // jQuery methods go here...
      $('select').styler();
      });