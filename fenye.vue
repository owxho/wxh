<template>
    <div class="foot">
            <p v-for="(item,index) of list" :key="index">123</p>
             <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
                background class="bord"
                layout="prev, pager, next"
                :total="totalCount" prev-text="上一页" next-text="下一页" :page-size="pageSize"
                :current-page.sync="currentPage">
            </el-pagination>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            currentPage:1,//默认显示在第一页
            pageSize:1,//每页显示的条数
            totalCount:0//总数
        }
    },
    methods:{
         handleSizeChange(val) {
         this.pageSize=val;//获取page-sizes里的每页显示几条数据的值，赋给我们自定义的每页显示数量的变量pageNum 
         this.funt();//再次发送axios请求
        },
        handleCurrentChange(val) {
             this.currentPage = val;
             this.funt();//再次发送axios请求
        },
        funt(){
            var url="/admin/community/post/list"
             this.axios.get(url,{
                params:{
                    page:this.currentPage,
                    pageSize:this.pageSize
                }
            }).then(result=>{
                console.log(result.data.data.list)
                this.list=result.data.data.list
                this.totalCount=5
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    created:function(){
        this.funt();
    }
}
</script>
<style scoped>

</style>
