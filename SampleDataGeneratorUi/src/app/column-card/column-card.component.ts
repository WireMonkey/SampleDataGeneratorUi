import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-card',
  templateUrl: './column-card.component.html',
  styleUrls: ['./column-card.component.css']
})

export class ColumnCardComponent implements OnInit {
  functionTypes: string[] = [ 'bool','ssn','firstName','lastName' ];
  results: string[];
  @Input() title: string;
  @Input() showButtons: boolean;

  filterBrands(event) {
    this.results = [];
    for(let i = 0; i < this.functionTypes.length; i++) {
        let brand = this.functionTypes[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.results.push(brand);
        }
    }
  }

  shouldShowButtons() {
    console.log(this.showButtons);
     return this.showButtons;
  }

  constructor() {

  }

  ngOnInit() {
    console.log(this.showButtons);
  }

}
