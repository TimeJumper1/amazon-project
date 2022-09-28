import {Pipe, PipeTransform} from '@angular/core';
import {CategoryEnum} from "../../shared/models/enums/category";

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: number ): string {
    if(value == 0){
      return "Books"
    }else if(value == 1){
      return "Eletronics"
    }else if(value == 2){
      return "Beauty"
    }else{
      return "Fashion"
    }

  }

}
