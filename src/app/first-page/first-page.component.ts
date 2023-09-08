import { Component } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {

  ngOnInit(){
    this.setCurrentDate
  }
  fullName:string = "";
  currentDate:string = "";
  innerClass:string = 'menu';
  header:string = "programacion web";

  menuList = ['menu # 1','menu # 2', 'menu # 3', 'menu # 4'];
  textList = [
    {id: 1, text:"progra web mi primer proyecto"},
    {id: 2, text:"progra web mi primer proyecto"},
    {id: 3, text:"progra web mi primer proyecto"}];

    setCurrentDate(){
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth() + 1; //January is 0!
      var year = today.getFullYear();
      var hour = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
  
      var dd,mm;
  
      if (day < 10) {
        dd = '0' + day;
      } else {
        dd = day;
      }
  
      if (month < 10) {
        mm = '0' + month;
      }else {
        mm = month;
      }
  
      this.currentDate = dd + '/' + mm + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
    }

}
