<template>
    <div class="login_container">
        <el-card class="login_box">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form>
                <el-form-item>
                    <el-input placeholder="请输入手机号"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input placeholder="请输入验证码" style="width:280px"></el-input>
                    <el-button type="primary" style="float:right">发送验证码</el-button>
                </el-form-item>
                 <el-checkbox v-model="checked" class="login_checked"></el-checkbox>
                我已阅读并同意 <el-link style="text-decoration: none" type="primary">用户协议</el-link> 和 <el-link class="login_link" type="primary">隐私条款</el-link>
                <el-form-item>
                    <el-button class="login_button" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style  lang='less' scoped>

.login_container{
   width: 100%;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;
   background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
   .login_box{
       width: 450px;
       height: 350px;
       position: absolute;
       left: 50%;
       top: 50%;
       transform: translate(-50%,-50%);
       img{
           display: block;
           width: 250px;
           margin: 10px auto 20px;
       }
   }

}
.login_checked{
    margin-right: 10px;
}
.login_link{
    text-decoration: none;
}
.login_button{
    width: 100%;
    margin-top: 20px;
}
</style>
