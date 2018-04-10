/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
global.$ = global.jQuery = require('jquery')
require('jquery-ujs')
global.React = require('react')
global.ReactDOM = require('react-dom')
import { mountComponents } from 'react-rails-ujs'

import Page from 'page/App'

global.$(function() {
  mountComponents({ Page })
})
