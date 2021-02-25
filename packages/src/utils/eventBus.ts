/**
 * 一个用来传递数据的中间件，通常用来完成兄弟组件间的数据传递任务
 * 使用方法：分别在两组件中引入该文件，import bus from 'eventBus'
 * 在用来传递值的组件中，使用 bus.$emit('事件标识': string, 传递的值: any)
 * 在用来接收值的组件中，使用 bus.$on('事件标识', data => { console.log(data) })
 */

import Vue from "vue";

export default new Vue();
