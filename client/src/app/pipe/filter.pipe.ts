import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term: any): any {
    //controllo se la ricerca è undefined
    if (term === undefined) {
      return value;
    } else {
      //ritorna un array aggiornato in balse al filtro
      return value.filter((value) => {
        console.log(value.username)
        return value.telephone.toLowerCase().includes(term.toLowerCase());
      })
    }

  }

}


