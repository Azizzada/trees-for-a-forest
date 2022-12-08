// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import { CountUp } from 'countup.js';

window.onload = function() {
  new CountUp('tree-counter', 12956, {enableScrollSpy: true, duration: 5});
}
