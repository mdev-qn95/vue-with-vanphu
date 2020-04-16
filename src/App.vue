<template>
  <div id="app">
    <el-row class="vp-container">
      <el-col :span="5" class="vp-col-left">
        <el-row>
          <div class="avatar"></div>
        </el-row>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#282c36"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
        >
          <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <router-link to="/">Trang chủ</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <router-link to="/members">Thành viên</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <router-link to="/courses">Khóa học</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <router-link to="/count-down">Đếm ngược thời gian</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19" class="vp-col-right">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Comfortaa&family=Roboto:wght@100&display=swap);
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Comfortaa", cursive;
}
.avatar {
  width: 120px;
    height: 120px;
    background: #039be5;
    border: 2px solid white;
    margin: 30px auto;
    border-radius: 50%;
    background-image: url("~@/assets/bg-love.png");
}
a {
  text-decoration: none;
  /* color: white; */
}
.vp-col-left {
  position: fixed;
  height: 100%;
  left: 0;
  background: #282c36;
  color: white;
}
a {
  color: white;
}
.el-menu-item{
  height: 40px;
  line-height: 40px;
}
.el-menu-item.is-active {
  background-color: #039be5 !important;
  border-radius: 0 25px 25px 0;
}
ul.el-menu-vertical-demo.el-menu {
  border-right: none;
}
.vp-col-right {
  position: fixed;
  height: 100%;
  right: 0;
}
</style>
