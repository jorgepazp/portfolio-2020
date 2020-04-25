import { Component, OnInit } from '@angular/core';
import { TimelineMax,TweenLite,ScrollToPlugin } from 'gsap/all';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // toggler = false -> the menu is not displayed
  // toggler = true -> the menu has to be displayed
  toggler:boolean;
  tl:any;

  viewportHeight:number;
  constructor() {
    this.viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.toggler=false;
    this.tl = new TimelineMax();

   }
  
  click(){
    if(!this.toggler){
      this.show()
    }else this.collapse();
      this.toggler=!this.toggler;
    
    console.log(this.toggler);
  }

  //logic when toggler=false
  collapse(){
    this.tl.to('#menu',0.4,{
      top:-this.viewportHeight*2
    }).to('.logo',0.2,{
      fill:"#4007ba"
    }).to('.ancla',0.2,{
      fill:"#4007ba"
    }).to('.tech',0.2,{
      stroke:"#4007ba",
     // strokeWidth:4

    });
   // this.disableBodyScroll(this.targetElement);
  }

    //logic when toggler = true
  show(){
    this.tl.to('#menu',0.4,{
      top:0
    }).to('.logo',0.2,{
      fill:"#e2cdf6"
    }).to('.ancla',0.2,{
      fill:"#e2cdf6"
    }).to('.tech',0.2,{
      stroke:"#e2cdf6",
     // strokeWidth:4
    });
    //this.enableBodyScroll(this.targetElement);
  }

    

  ngOnInit() {

  
  
    
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
 */
  }

  
  
}
