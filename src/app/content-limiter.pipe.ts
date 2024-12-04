import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimiter'
})
export class ContentLimiterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length >10){
      return value.substring(0,9)+"....";
    }
    return value;
  }

}
