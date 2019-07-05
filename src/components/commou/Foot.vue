<template>
  <div>
    <div class="footer">
      <div class="foot-div">
        <h2>热门杂志</h2>
          <ul class="foot-ul">
            <li @click="zazhi" title="查看详情">
              <div class="foot-img-span">
                <img src="../../assets/foot1.jpg" alt="">
                <span>第1期</span>
              </div>
              <div class="foot-p-span">
                <p>好梦相伴,一切安好</p>
                <span></span>
                777次分享
              </div>
            </li>
            <li @click="zazhi" title="查看详情">
              <div class="foot-img-span">
                <img src="../../assets/foot2.jpg" alt="">
                <span>第12期</span>
              </div>
              <div class="foot-p-span">
                <p>对抗失眠大作战</p>
                <span></span>
                2450次分享
              </div>
            </li>
            <li @click="zazhi" title="查看详情">
              <div class="foot-img-span">
                <img src="../../assets/foot3.jpg" alt="">
                <span>第2期</span>
              </div>
              <div class="foot-p-span">
                <p>吃出白富美</p>
                <span></span>
                1703次分享
              </div>
            </li>
            <li @click="zazhi" title="查看详情">
              <div class="foot-img-span">
                <img src="../../assets/foot4.jpg" alt="">
                <span>第12期</span>
              </div>
              <div class="foot-p-span">
                <p>冬季养生小常识</p>
                <span></span>
                1526次分享
              </div>
            </li>
            <li @click="zazhi" title="查看详情">
              <div class="foot-img-span">
                <img src="../../assets/foot5.jpg" alt="">
                <span>第8期</span>
              </div>
              <div class="foot-p-span">
                <p>减肥瘦身方法</p>
                <span></span>
                3146次分享
              </div>
            </li>
          </ul>
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
        <span>©2019Xianyu</span>
        <span>&nbsp;&nbsp;</span>
        <a href="javascript:;">使用咸鱼前必读</a>
        <span>&nbsp;&nbsp;</span>
        <a href="javascript:;">百度经验协议</a>
        <span>&nbsp;&nbsp;</span>
        <a href="javascript:;">作者创作作品协议</a>
        <span>&nbsp;&nbsp;</span>
        <span>苏ICP证030173号-1 苏网文【2013】0934-983号</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    zazhi(){
      this.$router.push("/Zazhi")
    }
  }
}
</script>

<style scoped>
  .footer{
    width:100%;
    background-color:#FCFCFC;
    border-top:1px solid #DDDDDD;
  }
  .foot-div{
    width:1210px;
    height:316px;
    margin:0 auto;
    text-align:left;
  }
  .foot-div h2{
    width:1210px;
    color: rgb(51, 51, 51);
    font: 22px/32px 微软雅黑, 宋体;
  }
  .foot-ul{
    display:flex;
    justify-content:space-between;
  }
  .foot-ul li{
    width:194px;
    height:244px;
    text-align:center;
    background-color:#fff;
    border:1px solid #ddd;
    cursor:pointer;
  }
  .foot-ul li:hover{
    border:1px solid rgb(190, 188, 188);
  }
  .foot-img-span{
    position:relative;
  }
  .foot-img-span>img{
    width:100%;
  }
  .foot-img-span>span{
    position: absolute;
    width: 44px;
    height: 15px;
    left: 0px;
    top: 130px;
    text-align: center;
    color: rgb(255, 255, 255);
    font: 12px/15px arial, 宋体;
    background-color:rgba(145, 216, 132,0.7);
  }
  .foot-p-span{
    width:100%;
    height:90px;
    padding-top:20px;
    color:#999999;
  }
  .foot-p-span>p{
    color:#333333;
    margin-bottom:5px;
  }
  .foot-p-span>span{
    display:inline-block;
    width:16px;
    height:16px;
    background:url("../../assets/article-sprite.png")-241px -276px;
  }
  .foot-p-span>span:hover{
    background:url("../../assets/article-sprite.png")-241px -294px;
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