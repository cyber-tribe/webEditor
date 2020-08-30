import Vue from 'vue'
import Moveable from 'vue-moveable'
import ace from "ace-builds"
import "ace-builds/webpack-resolver"
import "ace-builds/src-noconflict/ext-language_tools.js"
Vue.component('Moveable', Moveable)
Vue.component('ace', ace)
