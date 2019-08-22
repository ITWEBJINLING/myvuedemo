
<template>
    <div class="login">
        <div class="login-bj">
            <vue-particles
                color="#fff"
                :particleOpacity="0.7"
                :particlesNumber="60"
                shapeType="circle"
                :particleSize="4"
                linesColor="#fff"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="lizi"
             >
            </vue-particles>
        </div>
        <div class="login-form">
            <el-form :model="form" status-icon :rules="rules" ref="form" label-width="83px" class="">
                <el-form-item label="用户名:" prop="name">
                    <input type="text" class="login-input" style="background-color:rgba(0,0,0,0) !important" v-model="form.name">
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <input type="password" class="login-input" v-model="form.password">
                </el-form-item>
                <el-form-item>
                    <div class="login-submit" @click="submit()">登陆</div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                form: {
                    name: '',
                    password: '',
                },
                rules: {
                    name:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
                }
            };
        },
        methods:{
            submit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.$router.push("index")
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>
<style>
   .login-form .el-form-item__label{
       letter-spacing: 2px;
        color: #FFFFFF;
       font-weight: bold;
       font-size: 15px;
    }

</style>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    position: relative;
}
.login-bj{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/login2.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
}
.login-form{
    width: 22%;
    background-color: rgba(255,255,255,.1);
    position: absolute;
    left:calc(50% - 15%);
    top:300px;
    padding: 40px 50px 30px 40px;
    border-radius: 8px;
}
.login-input{
    width: 100%;
    height: 30px;
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 16px;
    color: #fff;
    }
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px rgba(0,0,0,0) inset !important;
    outline:none;
}
.login-submit{
    width: calc(100% + 60px);
    height: 40px;
    text-align: center;
    margin-left: -60px;
    margin-top: 30px;
    background-color: #013461;
    border-color: #013461;
    letter-spacing: 24px;
    text-indent: 24px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    outline: none;
    border: none;
}
</style>