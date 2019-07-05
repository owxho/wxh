<template>
    <div class="beijing">
        <!-- 登陆 -->
         <div class="kapian" v-show="pm==true">
            <div class="ka1">
                <a @click="ma" href="javascript:;"><img src="../../assets/icon1.png" alt=""></a>
                <a @click="xin" href="javascript:;">新用户注册</a>
            </div>
            <div class="ka2">
                <div>
                账户:<input v-model="uname"  type="text" name="uname" placeholder="请输入用户名">
                </div>
                <span v-show="yin==true">{{ming}}</span>
            </div>
            <div class="ka3">
                <div>
                密码:<input v-model="upass"  type="password" name="upwd" placeholder="请输入密码"> 
                </div>
                  <span v-show="cang==true">{{mi}}</span>
            </div>
            <div class="ka4">
                <div>
                <input type="checkbox">自动登陆
                </div>
                <a href="javascript:;">忘记密码</a>
            </div>
            <div class="ka5">
                <button @click="login">登陆</button>
            </div>
        </div>
        <!-- 二维码 -->
          <div class="ma" v-show="am==true">
            <img src="../../assets/login-1.jpg" alt="">
            <a @click="hui" href="javascript:;">账号登陆</a>
        </div> 
        <!-- 注册 -->
        <div class="zhu" v-show="zhuche">
            <div class="zhu1">
                <div class="t1">
                    <h3>账户:</h3>  
                </div>
                <div>
                    <input type="text" placeholder="请输入用户名" v-model="zname">   
                </div>
                <div class="t2">
                    <h4 v-show="t21">{{zhu}}</h4>
                </div>
            </div>
            <div class="zhu2">
                <div class="t1">
                     <h3>密码:</h3> 
                </div>
                <div>
                    <input type="password" placeholder="请输入密码" v-model="zupwd"> 
                </div>
                 <div class="t2">
                    <h4 v-show="t22">{{ba}}</h4>
                </div>
            </div>
            <div class="zhu3">
                <div class="t1">
                    <h3>确认密码:</h3> 
                </div>
                <div>
                    <input type="password" placeholder="请输入密码" v-model="zupwd1">
                </div> 
                 <div class="t2">
                    <h4 v-show="t23">{{jie}}</h4>
                </div>
            </div>
            <div class="zhu5">
                <input type="checkbox">阅读并同意接收用户隐私保护协议
            </div>
            <div class="zhu4">
                <button @click="login1">确认注册</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            yin:false,
            cang:false,
            uname:"",
            upass:"" ,
            pm:true,
            am:false,
            cm:false,
            ming:"",
            mi:"",
            zname:"",
            zupwd:"",
            zupwd1:"",
            zhu:"",
            ba:"",
            jie:"",
            t21:false,
            t22:true,
            t23:true,
            zhuche:false
        }
    },
    methods:{
        // 注册
    login1(){
         var c=this.zname;
         var d=this.zupwd;
         var e=this.zupwd1;
         var nreg=/^[a-zA-Z0-9]{3,10}$/;
         var preg=/^[a-zA-Z0-9]{3,8}$/;
         if(this.zname==""){
             this.t21=true;
             this.zhu="用户名不能为空"
        }else if(!nreg.test(c)){
            this.t21=true;
            this.zhu="用户名为3~10位"
        }else{
            this.t21=false;
        }
         if(this.zupwd==""){
             this.t22=true;
             this.ba="密码不能为空"
        }else if(!nreg.test(d)){
            this.t22=true;
            this.ba="密码为3~10位"
        }else{
            this.t22=false;
        }
        if(this.zupwd1==""){
             this.t23=true;
             this.jie="密码不能为空"
        }else if(!nreg.test(e)){
            this.t23=true;
            this.jie="密码为3~10位"
        }else{
            this.t23=false;
        }
        if(this.zupwd!==this.zupwd1){
            this.t23=true;
            return this.jie="两次密码不一致"
        }
         if(nreg.test(c)&&preg.test(d)){
                 //将用户名和密码发送 ajax请求
            this.axios.get("register",{
                params:{
                    zname:c,
                    zupwd:d
                }
            }).then(result=>{
                if(result.data.code==-2){
                     this.t21=true;
                     this.zhu="该用户名已存在"
                }else{
                    alert("注册成功")
                    this.pm=true;
                    this.zhuche=false;
                }
            })
            }
    },
    // 登录
     login(){
         var n=this.uname;
         var p=this.upass;
         var nreg=/^[a-zA-Z0-9]{3,10}$/;
         var preg=/^[a-zA-Z0-9]{3,8}$/;
            if(this.uname==""){
                this.yin=true;
                this.ming="用户名不能为空"
            }else if(!nreg.test(n)){
                this.yin=true;
                this.ming="用户名为3~10位"
            }else{
                this.yin=false;
            }
            if(this.upass==""){
                this.cang=true;
                this.mi="密码不能为空"
            }else if(!preg.test(p)){
                 this.cang=true;
                 this.mi="密码为3~8位"
            }else{
                this.cang=false;
            }
            if(nreg.test(n)&&preg.test(p)){
                 //将用户名和密码发送 ajax请求
            this.axios.get("login",{
                params:{
                    uname:n,
                    upass:p
                }
            }).then(result=>{
                console.log(result.data)
                if(result.data.code==1){
                 this.$router.push("/")
                }else{
                    this.yin=true;
                    this.ming="该用户未注册";
                    return;
                }
            })
            }
        },
        ma(){
            this.pm=false;
            this.am=true;
            this.cm=false;
        },
        hui(){
            this.pm=true;
            this.cm=false;
            this.am=false;
        },
        xin(){
            this.pm=false;
            this.zhuche=true;
        }
    },
}
</script>
<style scoped>
/*背景图片*/
.beijing{
    width: 1200px;
    height: 600px;
    background-image: url(../../assets/login-2.jpg);
    background-repeat: no-repeat;
    background-size: 1200px 600px;
    margin: 0 auto;
    position: relative;
}
/*登陆*/
.ma>img{
    width: 200px;
    height: 200px;
    position: absolute;
    top:200px;
    left: 150px;
}
.ma>a{
  position: relative;
  left: -280px;
  top: 150px;
  text-decoration: none;
  color: #fff
}
.kapian{
    width: 250px;
    height: 200px;
    line-height: 40px;
	background-color:rgba(0,0,0,0);
	padding:5px;
    position: absolute;
    top:120px;
    left:100px;
}
/*ka1*/
.ka1{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}
.ka1>a{
    text-decoration: none;
    color: #fff;
}
.ka1>a>img{
    width: 40px;
    height: 40px;
}
/*ka2,ka3,ka4*/
.ka2>div>input,.ka3>div>input{
    width:210px;height:38px;
	border:0;outline:0;
    background:#fff url(../../assets/login-3.jpg) no-repeat 97% center;
	font-size:13.333px;
	box-sizing:border-box;
	padding:10px 0;
	margin:18px 0;
	padding-left:15px;

}
.ka3>div>input{
    background-image:url(../../assets/login-4.jpg);		
}
.ka2,.ka3,.ka4{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#fff;
    font-weight: 700;
}
.ka2{
    width: 340px;
}
.ka3{
    width: 330px;
}
.ka2>span,.ka3>span{
    font-size: 10px;
    color: red;
}
/*ka4*/
.ka4>a{
    text-decoration: none;
    color: #fff;
}
/*ka5*/
.ka5>button{
    width: 250px;
    height: 35px;
    background-color:#0aa1ed;
    border:0;
    font-size: 18px;
    color: #fff;
}
/*注册*/
.zhu{
    width: 400px;
    height: 300px;
    position: absolute;
    top:100px;
    left: 60px;
}
.zhu1,.zhu2,.zhu3{
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.zhu1>div>h3,.zhu2>div>h3,.zhu3>div>h3{
    width: 90px;
    color: #fff;  
}
.t1{
    width: 100px;
    text-align: right;
}
.zhu1>div>input,.zhu2>div>input,.zhu3>div>input{
    width:200px;height:30px;
	border:0;outline:0;
	font-size:13.333px;
	box-sizing:border-box;
	padding:10px 0;
	margin:18px 0;
	padding-left:15px;
}
.zhu4>button{
    width: 250px;
    height: 35px;
    background-color:#0aa1ed;
    border:0;
    font-size: 18px;
    color: #fff;
}
.zhu5>input{
   margin-bottom: 20px;
}
.t2{
    color: red;
    width: 120px;
}

</style>
