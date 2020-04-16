<template>
  <div class="container">
    <el-row class="header course">
      <span class="title">Danh sách khóa học</span>
      <template>
        <el-input placeholder="Tìm kiếm khóa học" v-model="searchItem" class="search-input"></el-input>
        <el-button
          type="primary"
          round
          v-bind:class="{'active': layout == 'grid'}"
          class="grid-icon"
          v-on:click="layout = 'grid'"
        >Grid</el-button>
        <el-button
          type="danger"
          round
          v-bind:class="{'active': layout == 'list'}"
          class="list-icon"
          v-on:click="layout = 'list'"
        >List</el-button>
      </template>
    </el-row>
    <el-row class="content">
      <form id="courseForm">
        <div v-if="layout == 'grid'" class="grid">
          <ul class="grid">
            <li v-for="(item, index) in filterCourseList" :key="index">
              <a v-bind:href="item.url" target="_blank">
                <img v-bind:src="item.image.large" alt="Hình ảnh khóa học" />
              </a>
            </li>
          </ul>
        </div>
        <div v-else class="list">
          <ul class="list">
            <li v-for="(item, index) in filterCourseList" :key="index">
              <a v-bind:href="item.url" target="_blank">
                <img v-bind:src="item.image.small" alt="Hình ảnh khóa học" />
              </a>
              <p>{{item.title}}</p>
            </li>
          </ul>
        </div>
      </form>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import { Button } from "element-ui";
import Vue from "vue";
Vue.use(Button);
export default {
  // el: '#courseForm',
  data() {
    return {
      searchItem: "",
      layout: "list",
      courseList: [],
      errors: []
    };
  },
  mounted() {
    axios
      .get("https://5e96b99a77f5430016338b39.mockapi.io/vp182/category")
      .then(response => {
        this.courseList = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      })
      .finally(() => {
        console.log("Đã load xong dữ liệu");
      });
  },
  computed: {
    filterCourseList: function() {
      var courseArray = this.courseList,
        searchItem = this.searchItem;
      if (!searchItem) {
        return courseArray;
      }
      searchItem = searchItem.trim().toLowerCase();
      courseArray = courseArray.filter(function(item) {
        if (item.title.toLowerCase().indexOf(searchItem) !== -1) {
          return item;
        }
      });
      return courseArray;
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.search-input.el-input > input.el-input__inner {
  height: 35px;
  line-height: 35px;
  width: 250px;
  border-radius: 25px;
  font-family: "Comfortaa", cursive;
}
.search-input.el-input {
  width: unset;
  margin-right: 10px;
}
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #41b883;
}
.top > .search {
  flex: 1;
  margin-left: 25px;
}
.top > .option {
  flex: 1;
  text-align: right;
  margin-right: 25px;
}
.search > input {
  background: #fff no-repeat 13px 13px;
  border: none;
  width: 100%;
  line-height: 19px;
  padding: 15px 0;

  border-radius: 30px;
  box-shadow: 0 2px 8px #c4c4c4 inset;
  text-align: left;
  font-size: 14px;
  font-family: inherit;
  color: #738289;
  font-weight: bold;
  outline: none;
  text-indent: 40px;
}
.option {
  color: white;
  margin: 30px 0;
}
.option > a {
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
}
.option > a.active {
  background: #35495e;
}
.option > a:hover {
  background: #35495e;
}
.option > a.list-icon {
  border-left: 2px solid white;
}
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
ul.list {
  list-style: none;
  /* width: 80%; */
  margin: 0 auto;
  text-align: left;
}

ul.list li {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}

ul.list li img {
  width: 250px;
  height: 200px;
  float: left;
  border: none;
  object-fit: cover;
}

ul.list li p {
  margin-left: 260px;
  font-weight: bold;
  color: #6e7a7f;
  line-height: 200px;
}

ul.grid {
  list-style: none;
  margin: 0 auto;
  text-align: left;
}

ul.grid li {
  padding: 2px;
  float: left;
}

ul.grid li img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  display: block;
  border: none;
}
.container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.header.course.el-row {
  border-bottom: 1px dashed #039be5;
  box-shadow: 0px 10px 15px 0px rgba(0,0,0,.37);
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
}
.header > .title {
  flex: 1;
}
</style>