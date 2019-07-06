import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==0){
     if(args=false){
       return '女'
     }else{
       return 'girl'
     }
    }else{
      if(args=false){
        return '男'
      }else{
        return 'boy'
      }
    }
  }
}
