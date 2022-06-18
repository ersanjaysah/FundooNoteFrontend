import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(!args){
      return value;
    }
    else{
      args= args.toLocaleLowerCase();
    }
    return value.filter((note:any)=>{
      return note.title.includes(args) | note.description.includes(args);
    })
  }

}
