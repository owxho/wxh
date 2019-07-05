<template>
    <div class="h-div"> 
        <div class="strong">
            <span>方法/步骤:</span>
            <img src="../../assets/laba2.png" alt="" @click="audio" title="听一听">
            <audio id="v3">
                <source src="../../assets/audio.mp3" type="audio/mpeg">
            </audio>
            <img class="yinyue" src="../../assets/yinyue1.png" alt="" title="听首歌曲享受下" @click="yinyue" :class="cla">
            <audio id="v4" loop>
                 <source  src="../../assets/Dream It Possible.flac" type="audio/mpeg">
            </audio>
        </div>
        <div class="flex">
            <b class="list box1">1</b>
            <div class="day01-text">
                <p>星期一:</p>
                <p>早餐：酸奶一杯，葡萄干10颗，全麦面包两片。</p>
                <p>午餐：芹菜二米粥。</p>
                <p>材料：芹菜100克、大米100克、小米100克。</p>
                <p>做法：将芹菜洗净，切成小段；大米。小米淘洗干净。锅上火，加适量清水，放入大米、小米煮粥，先用旺火烧开后改用小火煮20分钟，加入芹菜段再煮5分钟即可。</p>
                <p>晚餐：水煮菜1碗或生菜沙拉一份，可用醋和盐粒调味，请勿加热量高的沙拉酱。</p>
            </div>
            <div class="left">
                <img src="../../assets/day01.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">2</b>
            <div class="day01-text">
                <p>星期二:</p>
                <p>早餐：豆浆一碗、全麦面包两片、鸡蛋一个。</p>
                <p>午餐：番茄豆腐豆芽汤。</p>
                <p>材料：大红番茄1个（约100克）、北豆腐半盒（约100克）、豆芽菜50克、香菜少许。</p>
                <p>调料：盐2小匙。</p>
                <p>做法：将番茄洗净切块，豆腐成切小方块，豆芽菜去根，洗净，香菜洗净切段。锅中放清水、豆腐块，开锅煮5分钟，再加番茄块、豆芽菜略煮，放盐调味，撒上香菜段即可。</p>
                <p>晚餐：水煮菜1碗或生菜沙拉一份，可用醋和盐粒调味，请勿加热量高的沙拉酱。</p>
            </div>
            <div class="left">
                <img src="../../assets/day02.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">3</b>
            <div class="day01-text">
                <p>星期三:</p>
                <p>早餐：一杯牛奶、一个花卷，一个苹果。</p>
                <p>午餐：熘鱼片。</p>
                <p>材料：草鱼取中段1条、木耳10克、广东菜心50克。</p>
                <p>调料：色拉油2大匙、盐1小匙、料酒1小匙，干淀粉、水淀粉、葱、姜各少许</p>
                <p>做法：将草鱼收拾干净，切片，沾裹干淀粉用温油滑熟；木耳泡发，洗净；广东菜心择洗干净；葱、姜切末。锅中倒入色拉油烧热，放入葱、姜末爆香，再加入鱼片、木耳、菜心炒匀，加盐、料酒调味、倒水淀粉勾薄芡即可。</p>
                <p>晚餐：水煮菜1碗或生菜沙拉一份，可用醋和盐粒调味，请勿加热量高的沙拉酱。</p>
            </div>
            <div class="left">
                <img  src="../../assets/day03.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">4</b>
            <div class="day01-text">
                <p>星期四:</p>
                <p>早餐：黑米红豆粥一碗一个煮鸡蛋一蝶凉拌萝卜丝。</p>
                <p>午餐：芹菜炒墨鱼。</p>
                <p>材料：芹菜150克、墨鱼150克，葱花、红椒丝、黄椒丝各少许。</p>
                <p>调料：色拉油1大匙、盐1小匙、鸡精1小匙。</p>
                <p>做法：将芹菜择洗干净，切段；墨鱼清除内脏，洗净，切段后改花刀，用开水汆烫，沥干水分。锅内倒入色拉油烧熟，放入葱花爆香，放入芹菜段翻炒几下，再放入墨鱼花、红椒丝、黄椒丝炒匀，最后加入盐、鸡精调味拌匀，装盘即可。</p>
                <p>晚餐：清淡的白灼青菜1碗或生菜沙拉1份（仍然不可以加沙拉酱）。</p>
            </div>
            <div class="left">
                <img src="../../assets/day04.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">5</b>
            <div class="day01-text">
                <p>星期五:</p>
                <p>早餐：红薯大米粥一碗，一个咸鸭蛋。</p>
                <p>午餐：玉米须菊花粥。</p>
                <p>材料：玉米须10克、菊花10克、大米200克。</p>
                <p>调料：盐1小匙。</p>
                <p>做法：将新鲜玉米须以温水略泡，冲洗干净。菊花去蒂，摘下花瓣，洗净。大米淘洗干净。锅内倒入清水、玉米须，煮10分钟后滤去玉米须，加入大米煮至粥成，再放入 盐、菊花、玉米须，略滚即成。</p>
                <p>晚餐：清淡的白灼青菜1碗或生菜沙拉1份（仍然不可以加沙拉酱）。</p>
            </div>
            <div class="left">
                <img src="../../assets/day05.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">6</b>
            <div class="day01-text">
                <p>星期六：</p>
                <p>早餐：红薯大米粥一碗，一个咸鸭蛋。</p>
                <p>午餐：燕麦片粥。</p>
                <p>材料：燕麦片200克。</p>
                <p>调料：盐2小匙。</p>
                <p>做法：锅上火，倒入适量水，放入燕麦片，烧开后用小火煮至麦片熟烂、浓稠即可。</p>
                <p>晚餐：清淡的白灼青菜1碗或生菜沙拉1份（仍然不可以加沙拉酱）。</p>
            </div>
            <div class="left">
                <img src="../../assets/day06.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">7</b>
            <div class="day01-text">
                <p>星期日:</p>
                <p>早餐：蒸蛋羹、一个馒头、一个苹果。</p>
                <p>午餐：丝瓜炖豆腐。</p>
                <p>材料：丝瓜1根、豆腐1盒、金针菇50克、葱1段。</p>
                <p>调料：色拉油1大匙、水淀粉1大匙、盐1小匙、鸡精1小匙、香油1小匙。</p>
                <p>做法：将丝瓜去皮，洗净，切成滚刀块；豆腐切成小方块，在沸水里焯一下，捞出沥干水；葱切末。锅内倒入色拉油烧热，放入葱末爆香，在放入丝瓜块、豆腐块、金针菇翻炒，加入盐，鸡精调味，倒入水淀粉勾芡，淋上香油即可。</p>
                <p>晚餐：清淡的白灼青菜1碗或生菜沙拉1份（仍然不可以加沙拉酱）。</p>
            </div>
            <div class="left">
                <img src="../../assets/day07.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
        <div class="flex">
            <b class="list box1">8</b>
            <div class="day01-text">
                <p>
                    以上就要跟大家介绍的减肥一日三餐饮食安排。想要有效的减肥就要做到低热量饮食，同时结合运动锻炼来燃烧脂肪，提升减肥效率。此外，饭前还可以配节饮用桑叶荷叶茶，它含有丰富的荷叶碱，能够起到隔离肠道脂肪的作用，减少肠道对脂肪的吸收。
                </p>
            </div>
            <div class="left">
                <img src="../../assets/day.jpg" alt="">
                <div class="l-opacity" @click="yuedu">
                    <div class="yuedu">阅读详情</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // searchBarFixed:true
            paused:false,
            cla:{
                animation:false
            }
        }
    },
    // mounted () {
    //     window.addEventListener('scroll', this.handleScroll)
    // },
    methods:{
        yuedu(){
            this.$router.push("/Lunbo")
        },
        audio(e){
            e.preventDefault();
            var v3=document.getElementById("v3")
                 if(v3.paused){
                    v3.play();
                }else{
                    v3.pause();
                }
        },
        yinyue(e){
            e.preventDefault();
            var v4=document.getElementById("v4")
                 if(v4.paused){
                    v4.play();
                    this.cla.animation=true;
                }else{
                    v4.pause();
                    this.cla.animation=false;
                }
        }
        // handleScroll () {
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     console.log(scrollTop)
        //     var offsetTop = document.querySelector('#searchBar0').offsetTop;
        //         if (scrollTop > offsetTop) {
        //             this.searchBarFixed = true
        //         } else {
        //             this.searchBarFixed = false
        //         }
        // }
    }
}
</script>
<style>
    .h-div{
        width:1210px;
        padding-left:20px;
        margin:10px auto;
    }
    .strong{
        display:flex;
        width:1190px;
        height:40px;
        font-size:20px;
        color:#58585a;
        text-align:left;
        padding:5px;
        margin-bottom:20px;
        align-items:center;
        border-bottom:3px solid rgb(197, 194, 194);
    }
    .strong>img{
        cursor:pointer;
        background-color:deeppink
    }
    .flex{
        display:flex;
        flex-wrap:wrap;

    }
    .day01-text{
        width:700px;
        padding:20px;
        font-size:16px;
        text-align:left;
        color:#484946;    
    }
    .day01-text>p{
        margin:8px;
    }
    .left>img{
        width:350px;
        height:250px;
        border-radius:2px;
    }
    .left{
        width:700px;
        position:relative;
        padding:0 0 40px 70px;
        text-align:left;
        }
    .footertext{
        padding:40px;
        text-align:left;
        font-size:25px;
        font-weight:bold;
        color:rgb(140, 111, 219);
    }
    .l-opacity{
        position:absolute;
        top:0px;
        left:70px;
        width:350px;
        height:250px;
        border-radius:2px;
        background-color:rgba(157, 160, 154,0.2);
        cursor: pointer;
        opacity:0;
    }
    .l-opacity:hover{opacity:1;}
    .yuedu{
        position:absolute;
        text-align:center;
        line-height:40px;
        color:ghostwhite;
        font-size:18px;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -60px;
        width:120px;
        height:40px;
        border-radius:80px;
        background-color:rgba(48, 49, 48, 0.9);
    }
        /* 黏黏球效果 */
    .list{
        position: -webkit-sticky;
        position: sticky;
        /* position:relative; */
        width:40px;
        height:40px;
        border-radius:50%;
        text-align:center;
        line-height:40px;
        color:#fff;
        font-size:20px;
        margin-right:2px;
    }
    .box1 {
        top: 90px;
        background: #2bff00;
    }
    .yinyue{
        width:74px;
        position:relative;
        top:120px;
        left:800px;
        border-radius:50%;
        background-color:chocolate;
    }
    @keyframes haha1{
		0%{-webkit-transform:rotate(0deg);}
		25%{-webkit-transform:rotate(90deg);}
		50%{-webkit-transform:rotate(180deg);}
		75%{-webkit-transform:rotate(270deg);}
		100%{-webkit-transform:rotate(360deg);}
    }
    .animation{animation:haha1 5s linear infinite;}
</style>