/**
 * 编辑器工具栏单文件组件，用于整合工具栏按钮
 * 接收一个按钮名称的数组
 * 按数组中的元素，显示工具按钮，或按钮组
 */
// 封装一个 register 注册方法，将默认配置的或者用户配置的工具栏组件进行注册，然后渲染
// 传入的 工具栏按钮 应该是一个对象，其包含了，本身的名字描述、icon图标、功能事件，改变其图标的接口，改变功能事件的接口

// 接收 quill 对象，并传递到 工具栏按钮中

import { Component, Vue } from "vue-property-decorator";
import bus from "../utils/eventBus";

@Component
export default class ToolBar extends Vue {
  quill: object | undefined;
  render(
    h: (
      arg0: string,
      arg1: { attrs: { id: string } },
      arg2: string
    ) => Vue.VNode
  ) {
    return h("ul", { attrs: { id: "qe-toolbar" } }, "hello toolbar");
  }

  public mounted() {
    bus.$on("sendQuill", (data: object) => {
      this.quill = data;
    });
  }
}
