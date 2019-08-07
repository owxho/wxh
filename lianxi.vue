<template>
 <!-- 分页 -->
           <div class="foot">
            <div v-for="(item, key) in items" v-show="key<num" :key="key">
                 {{item}}
            </div>
            <span @click="showMore">{{txt}}</span>
           </div>
</template>
<script>
export default {
    data(){
        return{
          items: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            "g",
            "h",
            "i",
            "g"
          ],
          isShow: true,
          txt: '显示全部',
          num: 3
        }
    },
     methods: {
        showMore(){
        //   console.log('1', this.isShow);
        //   this.isShow = !this.isShow;
        //   console.log('2', this.isShow);
        //   this.num = this.isShow? 3: this.items.length;
        //   this.txt = this.isShow?  '显示全部':'收起'
        this.isShow = !this.isShow;
        if(!this.isShow){
            this.num=6
        }else{
            this.num=this.items.length
            this.isShow=false
        }
        }
      }
}
</script>
<style scoped>

</style>
