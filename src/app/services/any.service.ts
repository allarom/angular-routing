import { Injectable } from '@angular/core';

@Injectable()
export class AnyService {
pages: Array<string> = [];

  constructor() {
    console.log('any service constructor');
   }

   addVisitedPage(page: string){
    this.pages.push(page);
   }

   getVisitedPages() {
     return this.pages
   }

}
