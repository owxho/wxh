<template>
    <div class="banner1" @mouseenter="jinru" @mouseleave="yichu">
        <ul id="lst-img" :style="stl" :class="cla">
            <li><img src="../../assets/banner0.jpg" alt=""></li>
            <li><img src="../../assets/banner1.jpg" alt=""></li>
            <li><img src="../../assets/banner2.jpg" alt=""></li>
            <li><img src="../../assets/banner3.jpg" alt=""></li>
            <li><img src="../../assets/banner0.jpg" alt=""></li>
        </ul>
        <div class="arrow-l" @click="lef" v-show="isShow==false">
            <div class="lef"></div>
        </div>
        <div class="arrow-r" @click="rig" v-show="isShow==false">
            <div class="rig"></div>
        </div>
        <ul id="yuandian" @click="yuandian">
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
</template>
<script>
import { clearInterval, setInterval } from 'timers';
    export default {
        data(){
            return {
                i:0,//初始化i
                stl:{marginLeft:0},
                canClick:true,
                isShow:true,      
                cla:{transition:true }//ul过度
            }
        },
        mounted () {
             setInterval(()=>{
                 if(this.isShow){
                    this.moveTo() 
                 }
             },3000)
        },
        methods:{
            moveTo(to){
                var licount=4;
                var liwidth=1210;
                var yuandian=document.getElementById("yuandian");
                var lis=yuandian.querySelectorAll("li");
                if(to==undefined){
                    to=this.i+1;
                }
                if(this.i==0){
                    if(to>this.i){
                        this.cla.transition=true;
                    }else{
                        this.cla.transition=false;
                        this.stl.marginLeft=-liwidth*licount+"px";
                        setTimeout(()=>{
                            this.moveTo(licount-1);
                        },100)
                        return;
                    }
                }
                this.i=to;
                this.stl.marginLeft=-this.i*liwidth+"px";
                for(var li of lis){
                    li.className="";
                }
                if(this.i==licount){
                    this.i=0;
                    //当transition动画播放完之后 去掉class 清除动画 marginLeft=0
                    setTimeout(()=>{
                        this.cla.transition=false;
                        this.stl.marginLeft=0;
                    },1100)
                }
                //再给当前小圆点添加active
                lis[this.i].className="active";
            },
            move(n){
                if(this.canClick){//只有可以点击时
                    this.moveTo(this.i+n);//才调用真正移动ul的方法
                    this.canClick=false;//马上把开关关上,禁止再次点击
                    //只有本地transition动画放完,才能自动打开开关,点击按钮才有反应.
                    setTimeout(()=>{
                        this.canClick=true;
                    },1100)
                }
            },
            jinru(){
                this.isShow=false;//控制左右箭头显示 并停止轮播
            },
            yichu(){
                this.isShow=true;
            },
            lef(){
                this.move(-1)
            },
            rig(){
                this.move(1)
            },
            yuandian(e){
                if(this.canClick){//当可以点击时
                    var li=e.target;//目标圆点
                    var yuandian=document.getElementById("yuandian");
                    var lis=yuandian.querySelectorAll("li");
                    if(li.nodeName=="LI"){//当前点击的是li 防止点出li外边
                        if(li.className!=="active"){//判断点的不是当前li
                            for(var i=0;i<lis.length;i++){
                                if(lis[i]==li){//找到当前的li=?
                                    break;
                                }
                            }
                            this.moveTo(i);//跳到当前的页面
                            setTimeout(()=>{//等动画执行完打开开关
                                this.canClick=true
                            },1100)
                        }
                    }
                }
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
    .banner1{
        width:1210px;
        margin:100px auto;
        overflow:hidden;
        position:relative;
        border-radius:5px;
        padding-bottom:10px;
    }
    #lst-img{
        width:6050px;
    }
    #lst-img>li{float:left;}
    #lst-img img{
        width:1210px;
        height:500px;
    }
    .arrow-l,.arrow-r{
        width:50px;
        height:50px;
        background-color:rgb(83, 78, 78);
        opacity:0.8;
        display:flex;
        align-items:center;
        border-radius:50%;
        position:absolute;
        top:230px;
        /* display:none; */
    }
    .arrow-l{left:10px;}
    .arrow-r{left:1150px;}
    .lef,.rig{
        width:15px;
        height:30px;
        background:url("../../assets/arrow-left.png") no-repeat center;
        margin:0 auto;
    }
    .rig{
        background:url("../../assets/arrow-right.png") no-repeat center;
    }
     .transition{
        transition:1s;
     } 
     #yuandian{
        width:800px;
        display:flex;
        position:absolute;
        top:450px;
        left:550px;
     }
     #yuandian Li{
        width:10px;
        height:10px;
        margin:0 10px;
        border:2px solid rgb(3, 223, 252);
        border-radius:50px;
        cursor:pointer;
     }
     .active{
         background-color:rgb(253, 2, 2);
     }
</style>