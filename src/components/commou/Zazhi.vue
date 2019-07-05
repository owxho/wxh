<template>
    <div class="zz-body">
        <div class="zz-div">
            <div class="zz-div-div">
                <div>
                    <div class="zz-jingling" @click="fanhui" title="返回首页"></div>
                    <div class="zz-div-img"><img src="../../assets/foot1.jpg" alt=""></div>
                    <div class="jiantou" @click="fanhui" title="返回首页"></div>
                    <div class="zz-div-h1">
                        <h1>好梦相伴,一切安好</h1>
                        <div>第1期</div>
                    </div>
                    <span class="zz-div-span">以一晚安逸的好梦，迎接新一天的生活，缓解生活工作的压力，活出健康,,,</span>
                    <p class="zz-p-span">
                        <span class="zz-bc"></span>
                        <span>19</span>
                        <span>&nbsp; | &nbsp;</span>
                        <span>总浏览：5145416</span>
                        <span>&nbsp; | &nbsp;</span>
                        <span class="zz-dz"></span>
                        <span>4069有用</span>
                        <span>&nbsp; | &nbsp;</span>
                        <span class="zz-fx"></span>
                        <span>&nbsp;777分享</span>
                    </p>
                    <div class="zz-p-tx">
                        <div class="zz-tou"><img src="../../assets/zazhi.jpg" alt="">
                        </div>
                        <span>快看头像变帅了</span>
                        <span class="zz-zb"></span>
                        <span class="zz-zz"></span>
                    </div>
                    <hr>
                    <span>哪些坏习惯会导致失眠？</span>
                    <h2>如何拥有一个好睡眠</h2>
                    <span class="zz-sm">失眠最好的治疗方法</span>
                </div>
            </div>
        </div>
        <div class="footer-foot">
            <p>
                <a href="javascript:;">新手帮助</a>
                <span>&nbsp; | &nbsp;</span>
                <a href="javascript:;">意见反馈</a>
                <span>&nbsp; | &nbsp;</span>
                <a href="javascript:;">投诉举报</a>
            </p>
            <p>
                <span>©2019Baidu</span>
                <span>&nbsp;&nbsp;</span>
                <a href="javascript:;">使用百度前必读</a>
                <span>&nbsp;&nbsp;</span>
                <a href="javascript:;">百度经验协议</a>
                <span>&nbsp;&nbsp;</span>
                <a href="javascript:;">作者创作作品协议</a>
                <span>&nbsp;&nbsp;</span>
                <span>京ICP证030173号-1 京网文【2013】0934-983号</span>
            </p>
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
        fanhui(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
.zz-body{
    width:100%;
    height:900px;
    background-color:#DADADA;
}
.zz-div-div,.zz-div,.zz-body:before{
    content:"";
    display:table;
}
.zz-div{
    width:980px;
    height:700px;
    background:url("../../assets/bj.jpg");
    margin:20px auto;
    position:relative;
}
.zz-div-div{
    width:100%;
    height:600px;
    background-color:rgb(255, 255, 255);
    margin-top:50px;
    text-align: left;
}
.zz-div-div>div{
    width:588px;
    height:400px;
    margin:60px 0 0 150px;;
}
.zz-jingling{
    width:46px;
    height:61px;
    background:url("../../assets/detail-bg.png") -37px 0;
    position:absolute;
    left:80px;
    top:50px;
    cursor:pointer;
}
.zz-div-img{
    width:160px;
    height:120px;
    border:1px solid rgb(161, 161, 161);
    position:absolute;
    left:750px;
    top:280px;
}
.zz-div-h1{display:flex;align-items:center;}
.zz-div-h1>h1{
    color: rgb(51, 51, 51);
    font: 55px/60px "Microsoft Yahei", 微软雅黑, arial, 宋体, sans-serif;
    
}
.zz-div-h1>div{
    width:13px;
    height:40px;
    text-align:center;
    font-size:9px;
    background-color:rgb(129, 216, 113,0.9);
    margin-left:10px;
    border-radius:2px;
    color:rgb(255, 254, 253);
}
.zz-body span{display:inline-block;}
.zz-div-span{
    margin-top: 25px;
    font-size: 14px;
    line-height: 24px;
    height: 48px;
    overflow: hidden;
}
.zz-body span{color:#999;}
.zz-p-span{
    font-size:12px;
    height:13px;
    line-height:12px;
    padding:10px 0 30px 0;
 }
.zz-bc,.zz-dz,.zz-fx{
    width:14px;
    height:13px;
}
.zz-bc{background:url("../../assets/detail-bg.png")0 -143px;}
.zz-dz{background:url("../../assets/detail-bg.png")-135px -143px;}
.zz-fx{background:url("../../assets/detail-bg.png")-268px -143px;}
.zz-p-tx{
    font-size:14px;
    display:flex;
    align-items:center;
}
.zz-tou>img{
    width:30px;
    height:30px;
    border-radius:50%;
    margin-right:10px;
}
.zz-zb,.zz-zz{
    width:23px;
    height:23px;
    margin-left:5px;
}
.zz-zb{background:url("../../assets/user-badge-small.png")-216px -96px;}
.zz-zz{background:url("../../assets/user-badge-small.png")-193px -96px;}
.zz-body hr{margin:30px 0;}
.zz-body h2{color:#999;}
.jiantou{
    width:210px;
    height:114px;
    position:absolute;
    left:747px;
    top:283px;
    border-left:1px solid rgb(216, 211, 211);
    background:url("../../assets/detail-bg.png")175px -203px;
    cursor:pointer;
}
.jiantou:hover{
    background:url("../../assets/detail-bg.png")-96px -203px;
}







.footer-foot{
    width:100%;
    height:107px;
    background-color:#F5F5F5;
    color:#999;
    font-size:12px;
    text-align:center;
    padding-top:50px;
  }
  .footer-foot a{
    color:#999;
    text-decoration: none;
  }
  .footer-foot a:hover{
    text-decoration:underline;
  }
  .footer-foot p{
    margin-top:10px
  }
</style>
