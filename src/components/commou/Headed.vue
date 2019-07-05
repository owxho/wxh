<template>
    <div class="header">
        <div class="content">
            <img src="../../assets/xianyu.png" class="logo" title="听一听" @click="log">
            <audio id="l3">
                <source src="../../assets/huanying.mp3" type="audio/mpeg">
            </audio>
            <ul class="first_ul">
                <li>
                    <a href="javascript:;" class="a_font">首页</a>
                </li>
                <li>
                    <a href="javascript:;" class="a_font">分类</a>
                    <ul class="second_ul">
                        <li>
                            <a href="javascript:;">瘦身减脂</a>
                        </li>  
                        <li>
                            <a href="javascript:;">塑身增肌</a>
                        </li> 
                        <li>
                            <a href="javascript:;">低卡低热</a>
                        </li> 
                        <li>
                            <a href="javascript:;">低卡零脂</a>
                        </li> 
                        <li>
                            <a href="javascript:;">沙拉轻食</a>
                        </li> 
                        <li>
                            <a href="javascript:;">意面轻食</a>
                        </li> 
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="a_font">运动</a>
                </li>
                <li>
                    <a href="javascript:;" class="a_font">视频</a>
                </li>
                <li>
                    <a href="javascript:;" class="a_font">联系我们</a>
                </li>
                <li class="input">
                    <datalist id="list">
                    <select>
                        <option value="减肥食谱一日三餐如何安排">减肥食谱一日三餐如何安排</option>
                        <option value="如何减肥">如何减肥</option>
                        <option value="减肥的效果比较">减肥的效果比较</option>
                        <option value="减肥专家知识课堂">减肥专家知识课堂</option>
                    </select>
                </datalist> 
                <input  list="list" type="text" placeholder="请输入搜索内容" autofocus>
                </li>
                <li>
                    <a href="javascript:;" class="a_font">◢</a>
                    <ul class="second_ul" id="height">
                        <li  @click="login">
                            <a href="javascript:;">登录</a>
                        </li>
                        <li @click="zzxx">
                            <a href="javascript:;">注册</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        login(){
            this.$router.push("/Login")
        },
        log(e){
            e.preventDefault();
            var l3=document.getElementById("l3")
                 if(l3.paused){
                    l3.play();
                }else{
                    l3.pause();
                }
        },
    }
}
</script>
<style>
.logo{
    height:80px;
    cursor:pointer;
}
ul,li{
    margin:0;
    padding:0;
    list-style:none;
}
a{text-decoration:none;}
.header{
    width:100%;
    height:65px;
    z-index:1;
    background:rgba(94, 75, 75, 0.8);
    position:fixed;
    top:0px;
}
.content{
    display:flex;
    width:1210px;
    margin:0 auto;
    justify-content:space-between;
    position:relative;
}
.first_ul{
    position:absolute;
    width:1100px;
    display:flex;
    justify-content:space-between;
    left:100px;
    top:20px;
}
.first_ul>li{
    width:150px;
    height:44px;
    overflow:hidden;
    transition:0.5s;
}
.first_ul>li a {
    font-size: 20px;
    color: rgb(242, 243, 234);
    font-weight:bold;
    font-family:'Times New Roman', Times, serif
}
.second_ul{
    width:150px;
    height:125px;
    background:rgba(100,100,100,0.8);
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    margin-top:21px;
}
.second_ul>li{
    width:75px;
    height:40px;
    text-align:center;
    line-height:40px;
    color:rgb(255,255,255);
    cursor:pointer;
}
#height{
    height:100px;
    width:75px;
    margin-left:30px;
}
#height>li a{
    font-size:20px;
}
.second_ul>li a{
    font-size:13px;
}
.first_ul>li>a:hover{
	color:rgb(255, 2, 2);
}
.first_ul>li:hover{
    height:176px;
}
.second_ul>li:hover{
    background-color:rgb(253, 253, 248,0.3);
}
.second_ul>li a:hover{
    color:rgb(248, 8, 8);
}
.first_ul>li.input{
    width:250px;
}
.first_ul>li.input>input{
    width:200px;
    height:15px;
    padding:5px 25px 5px 10px;
    background:url("../../assets/fangda.png") no-repeat right center;
    background-size:25px;
    background-color:rgb(252, 250, 250);
    border:2px solid rgb(199, 195, 195);
    border-radius:5px;
    cursor:pointer;
}
.l3{
    position:absolute;
    top:5px;
    left:1280px;
}
</style>