<template>
  <div class="lunbo" @mouseenter="jin" @mouseleave="chu">
    <swiper :options="swiperOption" ref="myBotswiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) of list" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>

  </div>
</template>
<script>
export default {
  data(){
    return{
       swiperOption: {
        loop:true,
      	autoplay: {
        disableOnInteraction: false,
        delay: 2500,
        },
        pagination: {
        el: '.swiper-pagination',
        },
       navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
       },

      },
        list:[require('../assets/194316.jpg'),require('../assets/196232.jpg'),require('../assets/227156.jpg'),require('../assets/265962.jpg')]

    }
  },
  methods:{
    jin(){
      this.myBotswiper.autoplay.stop();
    },
    chu(){
       this.myBotswiper.autoplay.start();
    }
  },
  computed:{
    myBotswiper(){
      return this.$refs.myBotswiper.swiper
    }
  },
}
</script>
<style scoped>
.lunbo{
  width: 1000px;
  height: 600px;
  margin: 0 auto;
}
img{
   width: 1000px;
  height: 600px;
}
</style>
