'use strict';
Vue.component('my-component', {
  template: '<div>부모:{{ myMessage }}</div>',
  props: ['myMessage']
});

Vue.component('my-checkbox', {
  template: '<input type="checkbox" id="checkbox" v-model="checked">\
  <label for="checkbox">{{checked}}</label>\
  ',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    // 다른 목적을 위해 `value` prop를 사용할 수 있습니다.
    checked: Boolean,
    value: String
  }
  // ...
});