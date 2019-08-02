<template>
  <!-- 视频 -->
                <div class="bod2-1" @mouseenter="show" @mouseleave="down">
                    <video id="p4" src="@/assets/images/video.mp4"></video>
                    <img v-if="login"  @click="bb" src="@/assets/images/bofang.png" alt="">
                    <img v-if="login1" @click="cc"  src="@/assets/images/zanting.png" alt="">
                </div>
</template>
<script>
 export default {
    data() {
      return {
         login:true,
         login1:false,
      };
    },
    methods:{
       // 视频播放
        yin(index){
        this.list[index].bindtop=!this.list[index].bindtop
        },
        bb(){
            p4.play();
            this.login=false;
            this.login1=true;
        },
        cc(){
            p4.pause();
            this.login=true;
            this.login1=false;
        },
        show(){
            if(p4.paused){
                this.login=true;
                this.login1=false;
            }else{
               this.login=false;
                this.login1=true; 
            }
        },
        down(){
          if(this.login==true||this.login1==true){
              this.login=false;
              this.login1=false;
          }
        }
    }
  };
</script>
<style scoped>
 body {
    margin: 0;
  }
</style>
