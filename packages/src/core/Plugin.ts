import Quill from "quill";

const toolbar = {
  iconPath: "", // 配置用户自定义的icon路径
  items: [
    { format: ["bold", "itae"] }, // 抽屉模式
    ["h1", "h2"] // 平铺模式
  ]
};

export default class Plugin {
  private quill: Quill;
  constructor(quill: Quill) {
    this.quill = quill;
  }
  handle() {
    this.quill.formatText(0, 5, "bold", true);
  }
}
