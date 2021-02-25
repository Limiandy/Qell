/**
 * 编辑器单文件组件，对外暴露
 */

import { Component, Prop, Vue } from "vue-property-decorator";
import Quill from "quill";
import ToolBar from "./ToolBar";
import bus from "../utils/eventBus";

const defaultOptions = {
  theme: "snow",
  boundary: document.body,
  modules: {
    toolbar: "#qe-toolbar"
  },
  placeholder: "Insert text here ...",
  readOnly: false
};

if (typeof Object.assign !== "function") {
  Object.assign = function(
    t: { [index: string]: never },
    ...sources: { [x: string]: never }[]
  ) {
    if (t === null) {
      throw new TypeError("Cannot convert undefined or null object");
    }
    t = Object(t);
    for (let i = 1; i < sources.length; i++) {
      const s = sources[i];
      if (s !== null) {
        for (const p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) {
            t[p] = s[p];
          }
        }
      }
    }
    return t;
  };
}

@Component
export default class QellEditor extends Vue {
  @Prop() private settings!: object;
  // 将 quill 对象传递给 toolbar 组件
  quill: Quill | undefined;
  data() {
    return {};
  }

  render(
    createElement: (
      ElementName: string | Vue.Component,
      Attribute?: object,
      SubElement?: Vue.VNode[] | string
    ) => Vue.VNode
  ): Vue.VNode {
    return createElement("div", { attrs: { class: "qe-container" } }, [
      createElement(ToolBar),
      createElement("div", { attrs: { id: "qe-editor" } })
    ]);
  }

  public mounted() {
    require("../StyleSheet/theme_default.scss");
    this.init();
  }

  init() {
    this.quill = new Quill("#qe-editor", defaultOptions);
    bus.$emit("sendQuill", this.quill);
  }
}
