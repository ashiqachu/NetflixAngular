import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showtime';
navbq:any
@HostListener('document:scroll')scrollover() {
if( document .body.scrollTop > 0 || document.documentElement.scrollTop > 0){
this.navbq={
'background-color':'#000'
}
}else {
this.navbq = {}
}
}
}
