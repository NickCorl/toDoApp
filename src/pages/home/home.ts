import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myArray = ['this', 'is','my','first','ngFor'];
  newItem = "";
  constructor(public navCtrl: NavController) {

  }
  test(){
    console.log("test");
  }
  removeItem(item){
    var index = this.myArray.indexOf(item);
    this.myArray.splice(index,1);
    console.log(this.myArray);
  }
  addItem(){
    if(this.newItem != ""){
    this.myArray.push(this.newItem);
      this.newItem = "";
    }
    console.log(this.newItem);

  }
}
