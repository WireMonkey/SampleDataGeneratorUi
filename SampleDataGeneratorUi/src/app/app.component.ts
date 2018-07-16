import { Component } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  functionTypes: City[] = [ {name:'bool',code:''},{name:'ssn',code:''},{name:'firstName',code:''},{name:'lastName',code:''} ];
  test: string[];
  results: string[];

  filterBrands(event) {
    this.results = [];
    for(let i = 0; i < this.test.length; i++) {
        let brand = this.test[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.results.push(brand);
        }
    }
  }

  constructor() {
  }
}
