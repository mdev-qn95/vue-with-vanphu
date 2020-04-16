<template>
  <div id="app">
    <el-row class="header add-member">
      <span class="title">Thêm mới thành viên</span>
      <el-button type="primary" round>
        <router-link to="/members">Danh sách thành viên</router-link>
      </el-button>
    </el-row>
    <el-row class="content">
      <el-container>
        <el-row class="form-user">
          <el-form
            :model="dataUser"
            status-icon
            ref="dataUser"
            label-width="150px"
            class="demo-dataUser"
          >
            <el-form-item label="Tên đăng nhập" prop="userName">
              <el-input v-model="dataUser.userName" class="add-member"></el-input>
            </el-form-item>
            <el-form-item label="Mật khẩu" prop="password">
              <el-input type="password" v-model="dataUser.password" autocomplete="off" class="add-member"></el-input>
            </el-form-item>
            <el-form-item label="Nhập lại mật khẩu" prop="re_password">
              <el-input type="password" v-model="dataUser.re_password" autocomplete="off" class="add-member"></el-input>
            </el-form-item>
            <el-form-item label="Họ và tên" prop="fullName">
              <el-input v-model="dataUser.fullName" class="add-member"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="dataUser.email" class="add-member"></el-input>
            </el-form-item>
            <el-form-item label="Số điện thoại" prop="phoneNumber">
              <el-input v-model="dataUser.phoneNumber" class="add-member"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button round type="primary" @click="submitForm(dataUser)">Lưu</el-button>
              <el-button round @click="resetForm('dataUser')">Reset</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-container>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      dataUser: {
        userName: "",
        password: "",
        re_password: "",
        fullName: "",
        email: "",
        phoneNumber: ""
      }
    };
  },
  methods: {
    submitForm(newUser) {
      console.log(newUser);
      axios
        .post(
          "https://5e9682175b19f10016b5e59c.mockapi.io/cm182/users",
          this.dataUser
        )
        .then(response => {
          return response;
        })
        .catch()
        .finally(() => {
          this.$notify({
            title: "Thành công",
            message: "Thêm người dùng thành công!",
            type: "success"
          });
        });
    },
    resetForm(newUser) {
      this.$refs[newUser].resetFields();
    }
  }
};
</script>
<style>
.form-user {
  margin: 0 auto;
}
.add-member.el-input > input.el-input__inner {
  height: 40px;
  line-height: 40px;
  width: 350px;
  border-radius: 25px;
  font-family: "Comfortaa", cursive;
}
label.el-form-item__label {
  line-height: 40px;
}

.header.el-row {
  border-bottom: 1px dashed #039be5;
  height: 50px;
}
.content.el-row {
  padding: 24px;
}
.header.add-member.el-row {
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