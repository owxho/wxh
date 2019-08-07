<template>
 <!-- 分页 -->
           <div class="foot">
            <tr class="nav1" v-for="(item,index) of TableData" :key="index"></tr>
                <el-pagination class="bord"
                 background
                 layout="prev, pager, next"
                 :total="list.length" prev-text="上一页" next-text="下一页" :page-size="pageSize" 
                 @current-change="handleCurrentChange"
                 :current-page.sync="currentPage">
                </el-pagination>  
           </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            currentPage:1,//当前页数
            pageSize:3//每一页的个数
        }
    },
      computed:{
        TableData(){
            return this.list.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)||[];
        } 
      }
}
</script>
<style scoped>

</style>
