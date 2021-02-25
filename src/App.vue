<template>
  <div id="app">
    <QellEditor></QellEditor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { QellEditor } from "../packages/src/index";

@Component({
  components: {
    QellEditor
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
