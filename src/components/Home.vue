<template>
  <div id="app">
    <el-row class="header home">
      <span class="title">Trang chủ</span>
      <el-button type="primary" round>
        <router-link to="/">Xem thêm</router-link>
      </el-button>
    </el-row>
    <el-row class="content">Nội dung</el-row>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.header.home.el-row {
  border-bottom: 1px dashed #039be5;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
}
.content.el-row {
  padding: 24px;
  font-size: 14px;
}
.header > .title {
  flex: 1;
}
.el-button.is-round {
  border-radius: 25px;
  padding: 10px 15px;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
}
</style>
