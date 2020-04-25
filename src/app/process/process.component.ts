import { Component, OnInit } from '@angular/core';
import { TweenMax,Power2, TimelineMax } from 'gsap/TweenMax';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
 let plan = new TimelineMax();
 let design = new TimelineMax();
 let execution = new TimelineMax();
 let deliver = new TimelineMax();
 //let tl = new TimelineMax();
 plan.add(this.planAnimation(),"plan");
 design.add(this.designAnimation(),"design");
 execution.add(this.executionAnimation(),"execute");
 deliver.add(this.deliverAnimation(),"deliver");
 //tl.add(this.plaation(),"deliver")

  /*01. PLAN*/ 
  document.addEventListener('aos:in:plan', ( detail ) => {    plan.play('plan');  });
  /*02. DISEÑO*/
  document.addEventListener('aos:in:design', ( detail ) => { design.play('design');   });
  /*03. PLAN*/
  document.addEventListener('aos:in:ejecucion', ( detail ) => { execution.play('execute');   });
  /*04. PLAN*/
  document.addEventListener('aos:in:deliver', ( detail ) => { deliver.play('deliver');   });
  /*document.addEventListener('aos:out:plan', ( detail ) => {this.anim_del.pause()});*/

  }

  planAnimation(){
    var tl = new TimelineMax();
    tl.from('#papel',1,{      y:1000    })
    .from('#logoPapel',0.4,{  opacity:0    })
    .from('#first-req',0.2,{      y:1000    })
    .from('#sec-req',0.2,{      y:1000    })
    .from('#third-req',0.2,{      y:1000    })
    .from('#fourth-req',0.2,{      y:1000    })
    .from('#tick-1',0.3,{      x:-100,      opacity:0    })
    .from('#tick-2',0.3,{      x:-100,      opacity:0    })
    .from('#tick-3',0.3,{      x:-100,      opacity:0    });

    return tl;
  }

  designAnimation(){
    var tl = new TimelineMax();
    tl.from('#wrapper-diseno',2,{      opacity:0    })
    .from('#cross-t',0.1,{      opacity:0,      x:30      ,y:20    })
    .to('#cross-t',0.1,{      x:30      ,y:20    })
    .to('#cross-t',0.2,{      x:0      ,y:0    })
    .from('#cross-c',0.1,{      opacity:0,      x:30      ,y:20    })
    .to('#cross-c',0.1,{      x:30      ,y:20    })
    .to('#cross-c',0.2,{      x:0      ,y:0    })
    .from('#tick-sq',0.4,{      opacity:0,  })
    .from('#cube',0.7,{      opacity:0,      y:200    });
    return tl;
  }

  executionAnimation(){
    var tl = new TimelineMax();
    tl.from('#java',0.8,{      opacity:0,      x:-100    })
    .from('#css',0.4,{      opacity:0,      x:-100    })
    .from('#ts',0.4,{      opacity:0,      x:-100    })
    .from('#js',0.4,{      opacity:0,      x:-100    })
    .from('#html',0.6,{      opacity:0,      x:-100    })
    .from('#angular',1,{      opacity:0,      x:-100    });
    return tl;
  }

  deliverAnimation(){
    var tl = new TimelineMax();
    tl.from('#celu',0.7,{      opacity:0,      x:-200    ,  y:200})
    .from('#tablet',0.4,{      opacity:0,      x:100    ,  y:-100})
    .from('#note',0.4,{      opacity:0,      x:-130    , y:-100})
    ;
    return tl;
  }
}
