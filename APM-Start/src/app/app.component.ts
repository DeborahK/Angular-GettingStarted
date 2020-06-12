import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',  // Name for the component on views
  templateUrl: './app.component.html',  // HTML view template file
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme product management';
  title: string;

  constructor(){
    this.title = this.pageTitle;
  }

}
