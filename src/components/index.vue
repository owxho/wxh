<template>
    <div class="center">
        <headed></headed>
        <banner></banner>
        <bofang></bofang> 
        <mybody></mybody>
        <foot></foot>
    </div>
</template>
<script>
import Banner from "./commou/Banner.vue"
import Mybody from "./commou/Mybody.vue"
import Bofang from "./commou/Bofang.vue"
import Foot from "./commou/Foot.vue"
import Headed from "./commou/Headed.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        "banner":Banner,
        "mybody":Mybody,
        "bofang":Bofang,
        "foot":Foot,
        "headed":Headed,
    }
}
</script>


<style>
    .center{
        margin:0 auto; 
        text-align:center;
        background-color:rgb(254, 255, 254);
    }
</style>