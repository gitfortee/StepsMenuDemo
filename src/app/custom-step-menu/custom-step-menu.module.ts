import {NgModule,Component,Input,Output,EventEmitter} from '@angular/core';

import {CommonModule} from '@angular/common';



import {RouterModule} from '@angular/router';
import { CustomStepMenuItem } from './custom-step-menu-item';



@Component({

    selector: 'p-steps',

    template: `

    <div [ngClass]="{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}" 
    [ngStyle]="style" [class]="styleClass">
    
      <ul role="tablist">
    
          <li *ngFor="let item of model; let i = index" class="ui-steps-item" #menuitem
    
              [ngClass]="{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),
    
                  'ui-state-disabled':item.disabled||(i !== activeIndex && readonly)}">
              
              <span *ngIf="item.legend | async as legend" class="ui-steps-legend" [ngClass]="legend.className">{{ legend.statusText }}</span>
              
              <a *ngIf="!item.routerLink" [href]="item.url||'#'" class="ui-menuitem-link" (click)="itemClick($event, item, i)" 
              [attr.target]="item.target" [attr.id]="item.id">
    
                  <span class="ui-steps-number">{{i + 1}}</span>
    
                  <span class="ui-steps-title">{{item.label}}</span>
    
              </a>
    
              <a *ngIf="item.routerLink" [routerLink]="item.routerLink" [queryParams]="item.queryParams" 
              [routerLinkActive]="'ui-state-active'" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{exact:false}" class="ui-menuitem-link" (click)="itemClick($event, item, i)" [attr.target]="item.target" [attr.id]="item.id">
    
                  <span class="ui-steps-number">{{i + 1}}</span>
    
                  <span class="ui-steps-title">{{item.label}}</span>
    
              </a>
    
          </li>
    
      </ul>
    
    </div>

    `

})

export class CustomStepMenuComponent {

    

    @Input() activeIndex: number = 0;

    

    @Input() model: CustomStepMenuItem[];

    

    @Input() readonly: boolean =  true;

    

    @Input() style: any;

        

    @Input() styleClass: string;

    @Input() legend: string;

    

    @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();

    

    itemClick(event: Event, item: CustomStepMenuItem, i: number) {

        if(this.readonly || item.disabled) {

            event.preventDefault();

            return;

        }

        

        this.activeIndexChange.emit(i);

                

        if(!item.url) {

            event.preventDefault();

        }

        

        if(item.command) {            

            item.command({

                originalEvent: event,

                item: item,

                index: i

            });

        }

    }

    

}








@NgModule({
  imports: [CommonModule,RouterModule],

  exports: [CustomStepMenuComponent,RouterModule],

  declarations: [CustomStepMenuComponent]
})
export class CustomStepMenuModule { }
