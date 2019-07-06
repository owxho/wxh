import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
/**
 * 
 * @param value 竖杠前 表达式执行的结果
 * @param args  竖杠后 说要传递的数据
 */
  transform(value: any, args?: any): any {
   if(value==0){ 
    return '订单未提交';
   }else if(value==1){
    return '订单提交中';
   }else if(value==2){
    return '订单提交完成';
   }else{
    return '订单状态未知';
   }
  }

}
