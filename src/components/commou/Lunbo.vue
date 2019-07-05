<template>
    <div class="body-style">
        <div class="head">
            <div class="flex-1">
                <div class="d1"></div>
                <div class="d2" @click="shouye" title="返回首页">全文阅读</div>
            </div>
            <div class="flex-1">
                <span>减肥食谱一日三餐如何安排?</span>
                <img src="../../assets/laba.png" alt="" @click="laba" title="听一听">
                <audio id="v3">
                    <source src="../../assets/audio.mp3" type="audio/mpeg">
                </audio>
            </div>
            <div class="flex-1">
                 <datalist id="list">
                    <select>
                        <option value="减肥食谱一日三餐如何安排">减肥食谱一日三餐如何安排</option>
                        <option value="如何减肥">如何减肥</option>
                        <option value="减肥的效果比较">减肥的效果比较</option>
                        <option value="减肥专家知识课堂">减肥专家知识课堂</option>
                    </select>
                </datalist> 
                <input  list="list" type="text" placeholder="请输入搜索内容" autofocus>
                <button>搜索经验</button>
                <div class="tp-sc1"></div>
                <div class="tp-sc2"></div> 
            </div>
        </div>
        <div class="banner-hidden">
            <div class="banner">
                <ul class="lilist" :style="styles">
                    <li><img src="../../assets/lunbo-0.png" alt=""></li>
                    <li><img src="../../assets/lunbo-1.png" alt=""></li>
                    <li><img src="../../assets/lunbo-2.png" alt=""></li>
                    <li><img src="../../assets/lunbo-3.png" alt=""></li>
                    <li><img src="../../assets/lunbo-4.png" alt=""></li>
                    <li><img src="../../assets/lunbo-5.png" alt=""></li>
                    <li><img src="../../assets/lunbo-6.png" alt=""></li>
                    <li><img src="../../assets/lunbo-7.png" alt=""></li>
                    <li><img src="../../assets/lunbo-8.png" alt=""></li>
                    <li><img src="../../assets/lunbo-9.png" alt=""></li>
                </ul>
                <div class="arrow-left" @click="left">
                    <div class="left-jiantou"></div>
                </div>
                <div class="arrow-right" @click="right">
                    <div class="right-jiantou"></div>
                </div>
                <ul id="lis" class="yuandian" @click="lis">
                    <li class="active">封</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>尾</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            i:0,
            liwidth:920,
            styles:{
                marginLeft:0
            }
        }
    },
    methods:{
        left(){
            if(this.i>0){
                this.i--;
                var ul=document.getElementById("lis");
                var lis=ul.children;
                this.styles.marginLeft= -this.i*this.liwidth+"px";
                    for(var i=0;i<lis.length;i++){
                        lis[i].className="";
                    }
                    lis[this.i].className="active";
            }
        },
        right(){
            if(this.i<9){
                this.i++;
                var ul=document.getElementById("lis");
                var lis=ul.children;
                this.styles.marginLeft= -this.i*this.liwidth+"px";
                for(var i=0;i<lis.length;i++){
                    lis[i].className="";
                }
                    lis[this.i].className="active";
            }
        },
        lis(e){
            var li=e.target;
            var ul=document.getElementById("lis");
            var lis=ul.children;
            if(li.nodeName=="LI"){
                for(var i=0;i<lis.length;i++){
                    if(li!=lis[i]){
                        lis[i].className=""; 
                    }else{
                        this.i=i;
                        lis[i].className="active";
                        this.styles.marginLeft= -i*this.liwidth+"px";
                    }
                }  
            }
        },
        laba(e){
            e.preventDefault();
            var v3=document.getElementById("v3")
                 if(v3.paused){
                    v3.play();
                }else{
                    v3.pause();
                }
        },
        shouye(){
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
    ul,li{
        margin:0;
        padding:0;
        list-style:none;
    }
    .body-style{
        width:1520px;
        height:735px;
        margin:0 auto;
        background-image:url("../../assets/bj.jpg");
    }
    .body-style::before{
        content:"";
        display: table;
    }
    .head{
        height:60px;
        background-color:rgba(53, 50, 50, 0.8);
        display: flex;
        justify-content:space-between;
    }
    .d1{
        border-right:15px solid rgba(53, 50, 50, 0.8);
        border-top:15px solid transparent;
        border-top:15px solid transparent;
        border-bottom:15px solid transparent;
        cursor:pointer;
        margin-left:15px;
    }
    .d2{
        height:30px;
        width:65px;
        background-color:rgba(53, 50, 50, 0.8);
        line-height:30px;
        font-size:12px;
        color:rgb(173, 173, 166);
        cursor:pointer;
    }
    .flex-1{
        display: flex;
        align-items:center;
    }
    .flex-1>span{
        font-size:22px;
        color:rgb(218, 218, 209);
    }
    .flex-1>img{
        width:80px;
        cursor:pointer;
        margin-left:15px;
    }
    .flex-1>input{
        width:240px;
        height:20px;
        padding-left:10px;
    }
    .flex-1>button{
        width:60px;
        height:27px;
        background-color:#45BA51;
        border:none;
        margin:0 10px 0 2px;
        color:whitesmoke;
        font-size:0.7rem;
        cursor:pointer;
    }
    .tp-sc1,.tp-sc2{
        width:70px;
        height:60px;
        border-left:1px solid rgb(65, 63, 63);
        background:url("../../assets/tp1.png") no-repeat center;
        background-size:contain;
        text-align:center;
        line-height:130px;
        cursor:pointer;
    }
    .tp-sc2{
        background:url("../../assets/sc1.png") no-repeat center;
        background-size:contain;
    }
    .tp-sc1:hover{
        background:url("../../assets/tp2.png") no-repeat center;
        background-size:contain;
    }
    .tp-sc2:hover{
        background:url("../../assets/sc2.png") no-repeat center;
        background-size:contain;
    }
    /* 轮播 */
    /* 轮播外层DIV */
    .banner-hidden{
        height:620px;
        overflow: hidden;
        position:relative;
        margin-top:40px;
    }
    .banner{
        margin-left:300px;;
    }
    /* ul宽 */
    .lilist{
        width:9200px;
        transition:all 1s;
    }
    .lilist>li{
        float:left;
    }
    .lilist>li>img{
        width:920px;
        height:550px;
    }
    .arrow-left,.arrow-right{
        width:300px;
        height:550px;
        background-color:rgb(231, 227, 227);
        position:absolute;
        line-height:550px;
        opacity:0.8;
        cursor:pointer;
    }
    .arrow-left:hover,.arrow-right:hover{
        background-color:rgba(243, 238, 238, 0.8);
        opacity:1;
        }
    .arrow-left{margin-left:-299px;}
    .left-jiantou{
        width:15px;
        height:30px;
        background:url("../../assets/arrow-left.png") no-repeat center;
        background-size:contain;
        margin-top:274px;
        margin-left:210px;
    }
    .arrow-right{left:1219px;}
    .right-jiantou{
        width:20px;
        height:40px;
        background:url("../../assets/arrow-right.png") no-repeat center;
        background-size:contain;
        margin-top:255px;
        margin-left:80px;
    }
    /* 圆点 */
    .yuandian{
        width:500px;
        height:50px;
        position:absolute;
        top:560px;
        left:520px;
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .yuandian>li{
        width:30px;
        height:30px;
        border-radius:50%;
        text-align:center;
        line-height:30px;
        color:#fff;
        background-color:rgb(187, 180, 180);
        cursor:pointer;
    }
    .yuandian>li:hover{
        background-color:rgb(94, 89, 89);
    }
    .yuandian>li.active{
        background-color:#5CBC4B;
    }
</style>