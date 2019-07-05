<template>
  <div>
        <!-- 尾部2和3 -->
        <div id="ft2">
            <div class="ft2">
                <ul>
                    <li><a href="javascript:;">关于我们</a></li>
                    <li><a href="javascript:;">专业认证</a></li>
                    <li><a href="javascript:;">合作专区</a></li>
                    <li><a href="javascript:;">加入我们</a></li>
                </ul>
                <ul>
                    <li><a href="javascript:;">购物指南</a></li>
                    <li><a href="javascript:;">购买流程</a></li>
                    <li><a href="javascript:;">支付方式</a></li>
                    <li><a href="javascript:;">配送流程</a></li>
                </ul>
                <ul>
                    <li><a href="javascript:;">帮组中心</a></li>
                    <li><a href="javascript:;">注册流程</a></li>
                    <li><a href="javascript:;">联系客服</a></li>
                    <li><a href="javascript:;">网站地图</a></li>
                </ul>
                <ul>
                    <li><a href="javascript:;">服务条款</a></li>
                    <li><a href="javascript:;">终生保养</a></li>
                    <li><a href="javascript:;">注册协议</a></li>
                    <li><a href="javascript:;">隐私声明</a></li>
                </ul>
            </div>
            <div id="ft3">
                <span>关注我们</span>
                <p>一个让你相信真爱的地方，给你最实用的感情指南，为你的爱情终身服务</p>
            </div>
            <div id="ft3">
                <p>Copyright © 2006-2017 www.darryring.com 戴瑞珠宝 All Rights Reserved</p>
                <p>中国互联网违法信息举报中心 | 中国公安网络110报警服务 | 本网站提供所售商品的正式发票</p>
            </div>  
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style>
/* 尾部2,3 */
#ft2{
    background-color: #8D8D8D;
}
.ft2{
    display: flex;
    justify-content: space-between;
    width: 1450px;
    margin: 0 auto;
}
.ft2>ul{
    list-style: none;
    padding-left: 0px;  
}
.ft2>ul>li>a{
    display: block;
    text-decoration: none;
    color: #cdcdcd;
    font-size: 20px;
    margin-top:10px;
}
#ft3{
   text-align: center;
}
#ft3>p{
    color: #cdcdcd;
    font-size: 12px;
    text-align: center;
}
#ft3>span{
    color: #cdcdcd;
    font-size: 12px;
}
</style>
