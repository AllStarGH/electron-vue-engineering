<template>
    <div id="wrapper">
        <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
        <main>
            <div class="left-side">
                <span class="title">
                    Welcome to your new project!
                </span>
                <system-information></system-information>
            </div>
            <div class="right-side">
                <div class="user_serv">
                    <div class="doc">
                        <div class="title">{{topTitle}}</div>
                        <p>
                        </p>
                        <button @click="jump2('RenameAndMoveFile')">JPG图片文件批量改名及迁移</button>
                        <!--  -->
                        <button @click="jump2('TestCase')">信息简略</button>
                    </div>
                    <!--  -->
                    <div class="reg_login">
                        <el-button type="primary" @click="jump2('Register')" round>注册</el-button>
                        <el-button type="primary" @click="jump2('Login')" round>登录</el-button>
                    </div>
                </div>
                <!--  -->
                <div class="doc" id="move_bussiness">
                    <div class="title alt">Other Documentation</div>
                    <button class="alt" @click="jump2('biliMedia')">BiliBiliAPP视频更名及移动</button>
                    <!--  -->
                    <button class="alt" @click="jump2('UserList')">查看全体用户</button>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import SystemInformation from './LandingPage/SystemInformation'

export default {
    name: 'landing-page',
    components: { SystemInformation },
    data() {
        return {
            topTitle: " The Element-Vue Project "
        }
    },
    methods: {
        open(link) {
            // 在浏览器打开网址链接
            this.$electron.shell.openExternal(link)
        },
        jump2(url) {
            this.$router.push(url)
        }
    },
    mounted() {
        console.info(this)
    }
}
</script>
<style scoped="LandingPage.vue">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
}

#wrapper {
    background:
        radial-gradient(ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%);
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
}

#logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
}

main {
    display: flex;
    justify-content: space-between;
}

main>div {
    flex-basis: 50%;
}

.user_serv>div {
    margin: 25px 0;
}

#move_bussiness {
    margin: 30px 0 0 0;
}

.right-side {
    font-size: 25px;
    left: 40%;
    position: absolute;
}

.left-side {
    display: flex;
    flex-direction: column;
}

.welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
}

.title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
}

.title.alt {
    font-size: 18px;
    margin-bottom: 10px;
}

.doc p {
    color: black;
    margin-bottom: 10px;
}

.doc button {
    font-size: 0.8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
}

.doc button.alt {
    color: #42b983;
    background-color: transparent;
}

button {
    margin: 0 19px;
}
</style>