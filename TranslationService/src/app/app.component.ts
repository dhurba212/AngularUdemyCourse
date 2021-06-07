import { TranslateService } from './services/translate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text:string;
  translatedText:string;

  constructor(private translateService: TranslateService){

  }

   submit(){
    this.translateService.translate(this.text).subscribe((result) => {
      this.translatedText=result
    })
    console.log(this.translateService)
  }

}
