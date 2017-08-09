import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ReturnsJsonArrayService } from './returns-json-array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ReturnsJsonArrayService]
})
export class AppComponent {
  title = 'This is My First Angualar App!!';

  data:Observable<Array<any>>;

  constructor(private service: ReturnsJsonArrayService){

  	this.data = service.getproduct();
  	console.log("AppComponent.data:" + this.data);
  }
}
