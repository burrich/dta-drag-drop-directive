import angular from 'angular'
import { dtaDrag } from './dta-drag.directive'
import { dtaDrop } from './dta-drop.directive'

export const DtaDragDropModule =
  angular.module('dtaDragDrop', [])
  .directive('dtaDrag', dtaDrag)
  .directive('dtaDrop', dtaDrop)
  .name
