<template>
  <div class="bod2">
   <!-- 视频bod2-1 -->
    <div class="bod2-1">
      <video id="d1" src="@/assets/x.mp4"></video>
      <img v-if="login==true" class="tu1"  @click="bb" src="@/assets/play.png" alt="">
      <img v-else class="tu2" @click="cc" src="@/assets/pause.png" alt="">
    </div>
    <!-- 右侧文字 -->
    <div class="bod2-2">
      <p>他大舅这二舅都是你舅啥空间都会看见啥的 的萨达就上课的进口三菱即可杀菌的丽莎就离开撒旦教丽莎的就立刻上建档立卡上就单杀了肯定就立刻上的就立刻上的就立刻上加快了的金莎丽的金莎丽宽度家路口的金莎丽的金莎丽宽度家路口大家商量大家撒离开的集散地可上架丽</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      login:true
    }
  },
  methods:{
    bb(){
     d1.play();
      this.login=false;
    },
    cc(){
      d1.pause();
      this.login=true;
    }
  }
}
</script>
<style scoped>
/*bod2*/
.bod2{
  display: flex;
  width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
}
/*视频bod2-1*/
.bod2-1>video{
  width: 600px;
}
.tu1{
  position: relative;
  top:-75px;
  left:-250px;
  opacity: 0.8;
}
.tu2{
  position: relative;
  top:-75px;
  left:-250px;
  opacity: 0.8;
}
/*右侧文字*/
.bod2-2{
  width: 600px;
}
.bod2-2>p{
  font-size: 17px;
  color: #555;
  text-align: right;
  line-height: 60px;
  text-indent: 70px;
}
</style>
