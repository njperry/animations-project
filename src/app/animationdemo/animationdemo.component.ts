import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

    trigger('PlayerCardMove', [
      state('onDeck', style({ transform: 'translateX(50%)', webkitTransform: 'translateX(50%)', top: 'auto', left: 'auto', right: '45%', bottom: 0 })),
      state('inPlay', style({ transform: '*', webkitTransform: '*', top: '*', left: '*', right: '*', bottom: '*' })),
      transition('onDeck => inPlay', [
        // style({ transform: 'translate(-100%, -400%)' }),
        animate('0.5s ease-in')
      ]),
      // transition(':leave', [
      //   animate('0.5s ease-out', style({ transform: 'translate(100%, -400%)' }))
      // ])
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
    this.playerCardInPlay = true;
  }
}
