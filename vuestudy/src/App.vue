<template>
  <div id="app">
    <keep-alive :include="['indexKeepAlive', 'index']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
