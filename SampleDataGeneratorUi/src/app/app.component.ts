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
  functionTypes: string[] = [ 'bool','ssn','firstName','lastName' ];
  results: string[];

  filterBrands(event) {
    this.results = [];
    for(let i = 0; i < this.functionTypes.length; i++) {
        let brand = this.functionTypes[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.results.push(brand);
        }
    }
  }

  constructor() {
  }
}
