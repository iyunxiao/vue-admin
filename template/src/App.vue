<template>
  <div v-if="comeOn" id="app" class="layout">
    <layout-header />
    <div class="layout-wrap">
      <router-view />
    </div>
    <layout-footer />
  </div>
  <!-- 启动页面 -->
  <div class="comeOn" v-else id="app">
    <div>
      <div v-loading="!comeOn" element-loading-text="欢迎使用管理后台"></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        comeOn: false,
      };
    },
  };
</script>

<style lang="sass" rel="stylesheet/scss">
</style>
