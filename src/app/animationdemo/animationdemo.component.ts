import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),

    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),

    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translate(-100%, -400%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translate(100%, -400%)' }))
      ])
    ]),

    // trigger('myAnimationTrigger', [
    //   transition('* => visible', [
    //     // fade out the element immediately
    //     style({ opacity: 0 }),

    //     // now animate it in over one second
    //     animate(1000, style({ opacity: 1 }))
    //   ]),

    //   transition('* => hidden', [
    //     // use the existing opacity on the element
    //     style({ opacity: '*' }),

    //     // now animate it out over 500ms
    //     animate('500ms', style({ opacity: 0 }))
    //   ])
    // ])

    trigger('PlayerCardMove', [
      state('onDeck', style({ top: 'auto', left: 'auto', right: '45%', bottom: 0, transform: 'translate(50%, 0%)' })),
      // state('onDeck', style({ transform: 'translate(50%, 0)', right: '45%', bottom: 0, top: 'auto', left: 'left' })),
      state('inPlay', style({ top: '*', left: '*', right: '*', bottom: '*', transform: '*' })),
      transition('onDeck <=> inPlay', [
        style({ color: 'blue' }),
        // style({ top: '36%', left: '36%', right: '45%', bottom: 0, color: 'blue' }),
        animate('1.5s 300ms ease-in-out'),
        
        // ]),
        // transition(':leave', [
        //   animate('0.5s ease-out', style({ transform: 'translate(100%, -400%)' }))
      ]),
      // state('inPlay', style({ top: '*', left: '*', right: '*', bottom: '*', transform: '*' })),
      // transition('inPlay => onDeck', [
      //   style({ color: 'blue' }),
      //   animate('3.5s 300ms ease-in-out')
      // ])
    ]),

    trigger('PlayCard', [
      state('onDeck', style({transform: 'translate(-100%, 175%)'})),
      state('inPlay', style({transform: '*'})),
      transition('onDeck <=> inPlay', [
        animate('1.5s 300ms ease-in-out')
      ])
    ])
  ]
})
export class AnimationdemoComponent {

  currentState = 'initial';
  listItem = [];
  list_order: number = 1;
  playerCardInPlay = false;

  addItem() {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  playPlayerCard() {
    this.playerCardInPlay = !this.playerCardInPlay;
  }
}
