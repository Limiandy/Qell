/**
 * 功能插件，字体加粗
 */
// 工具栏按钮 应该是一个对象，其包含了，本身的名字描述、icon图标、功能事件，改变其图标的接口，改变功能事件的接口

import Plugin from "../core/Plugin";

class Bold extends Plugin {
  constructor(quill: object) {
    super(this.quill);
  }
}

export default Bold;
