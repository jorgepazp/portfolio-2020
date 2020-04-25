import { Component, OnInit } from '@angular/core';
import  TypeIt  from 'typeit';
import { TimelineMax,TweenLite,ScrollToPlugin,Power2} from 'gsap/all';
const plugins = [ ScrollToPlugin ]

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    new TypeIt('.type-effect', {
      strings: ["Diseño","Desarrollo","Conocimiento"],
      loop: true,
      speed: 100,
      breakLines: false,
      waitUntilVisible: true
    }).go().pause(50);*/
  }
  
  scrollToForm(){
    TweenLite.to(window, 0.7, {scrollTo:"#contact-form", ease: Power2.easeInOut });
  }

}
