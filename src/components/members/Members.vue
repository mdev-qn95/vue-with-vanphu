<template>
  <div id="app">
    <el-row class="header members">
      <span class="title">Danh sách thành viên</span>
      <el-button type="primary" round><router-link to="/add-member">Thêm thành viên</router-link> </el-button>
    </el-row>
    <el-row class="content">
      <el-table class="list-user" v-loading="loading" :data="usersArray" style="width: 100%">
        <el-table-column label="ID" width="50">
          <template slot-scope="scope">
            <span>{{ scope.row.userID }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Tên đăng nhập" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Họ và tên" width="200">
          <template slot-scope="scope">
            <span v-if="!(update && enableIndex == scope.$index)">{{ scope.row.fullName }}</span>
            <el-input v-else v-model="scope.row.fullName" placeholder="Vui lòng nhập lại họ tên" class="member-list"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Email" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Số điện thoại">
          <template slot-scope="scope">
            <span v-if="!(update && enableIndex == scope.$index)">{{ scope.row.phoneNumber }}</span>
            <el-input
              v-else
              v-model="scope.row.phoneNumber"
              placeholder="Vui lòng nhập lại số điện thoại"
              class="member-list"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="Tùy chọn">
          <template slot-scope="scope">
            <el-tooltip
              v-if="!(update && enableIndex == scope.$index)"
              content="Sửa"
              placement="top"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="editUser(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip v-else content="Lưu" placement="top">
              <el-button
                type="success"
                icon="el-icon-success"
                circle
                @click="updateUser(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <span>|</span>
            <el-tooltip
              v-if="!(update && enableIndex == scope.$index)"
              content="Xóa"
              placement="top"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="deleteUser(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip v-else content="Hủy" placement="top">
              <el-button
                type="danger"
                icon="el-icon-error"
                circle
                @click="cancelUser(scope.$index, scope.row)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      usersArray: [],
      errors: [],
      update: false,
      enableIndex: null,
      loading: true
    };
  },
  mounted() {
    axios
      .get("https://5e9682175b19f10016b5e59c.mockapi.io/cm182/users")
      .then(response => {
        this.usersArray = response.data;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    editUser(index) {
      this.update = true;
      this.enableIndex = index;
    },
    deleteUser(index) {
      axios
        .delete(
          `https://5e9682175b19f10016b5e59c.mockapi.io/cm182/users/${this.usersArray[index].userID}`
        )
        .then(this.usersArray.splice(index, 1))
        .finally(() => {
          this.$notify({
            title: "Thành công",
            message: "Xóa người dùng thành công!",
            type: "success"
          });
        });
    },
    updateUser(index) {
      axios
        .put(
          `https://5e9682175b19f10016b5e59c.mockapi.io/cm182/users/${this.usersArray[index].userID}`,
          this.usersArray[index]
        )
        .then()
        .catch()
        .finally(() => {
          this.update = false;
          this.$notify({
            title: "Thành công",
            message: "Cập nhật người dùng thành công!",
            type: "success"
          });
        });
    },
    cancelUser() {
      this.update = false;
    }
  }
};
</script>
<style>
.header.members.el-row {
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
}
.header > .title {
  flex: 1;
}
.member-list.el-input > input.el-input__inner {
  height: 35px;
  line-height: 35px;
  width: 180x;
  border-radius: 25px;
  font-family: "Comfortaa", cursive;
}
.el-button.is-round {
  border-radius: 25px;
  padding: 10px 15px;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
}
</style>