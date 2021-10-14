import { Component } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment';

  data:any[]=[];
  dataTitle:any;
  noOfPages:any;
  coverObject:any;
  mediumLinkImage:any;
  constructor(private test:TestService)
  {
    this.test.getData().subscribe(res=>
      {      
        
        
        this.dataTitle=res['ISBN:9780980200447']['title'];
        
        this.noOfPages=res['ISBN:9780980200447']['number_of_pages'];
        
        this.mediumLinkImage=res['ISBN:9780980200447']['cover']['medium'];
        
        
      })
  }
}
