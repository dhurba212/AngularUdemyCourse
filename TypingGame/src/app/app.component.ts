import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText:string=lorem.text();
  typedByUser:string='';
  

  onInput(value:string){
    this.typedByUser=value;
    // for(let i=0;i<value.length;i++){
    //   if(this.randomText.charAt(i)===value.charAt(i)){
    //     this.randomText.replace(this.randomText.charAt(i),'<span style="color: red;">this.randomText.charAt(i)</span>')
    //   }
    //   }
    }
    compare(randomLetter:string,typedByUserLetter:string){
      if(!typedByUserLetter){
        return "pending"
      }
      return randomLetter===typedByUserLetter? 'correct':'incorrect'
    }
    


}


