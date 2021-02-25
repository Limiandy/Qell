/**
 * 核心文件
 */

import ToolBar from "../components/ToolBar";

class Qell {
  default_config = {};

  constructor(editNode, settings = {}) {
    this.editor = editNode;
    this.settings = this.merge(settings);
    this.root = this.editor.parentNode;
  }
  init() {
    const container = document.createElement("div");
    container.className = "qe-container";
    this.root.append(container);
    container.append(this.editor);
    container.prepend(ToolBar);
    this.editor.setAttribute("contenteditable", "");
  }

  merge(config) {
    return Object.assign(this["default_config"], config);
  }
}

export default Qell;
