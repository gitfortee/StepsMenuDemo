import { Component, OnInit } from '@angular/core';
import { CustomStepMenuItem } from '../custom-step-menu/custom-step-menu-item';
import { EligibilityTabAllowedStatus, NOT_STARTED, IN_PROCESS, COMPLETED, EligibilityTabStatus, EligibilityTabIndex } from '../eligibility-tab/eligibility-tab-models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'steps-menu',
  templateUrl: './steps-menu.component.html',
  styleUrls: ['./steps-menu.component.css']
})
export class StepsMenuComponent implements OnInit {

  menuItems:CustomStepMenuItem[];
  activeIndex:number = 0;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.initMenuItems();
  }

  eligTabsStatus:EligibilityTabAllowedStatus[] = [
    NOT_STARTED,
    IN_PROCESS,
    COMPLETED,
    NOT_STARTED,
    IN_PROCESS,
    COMPLETED,
    NOT_STARTED,
    IN_PROCESS,
    COMPLETED
  ];

  tabStatus$ = this.eligTabsStatus.map((item, index)=>{
    return <EligibilityTabStatus>{
      status$ : new BehaviorSubject<EligibilityTabAllowedStatus>(
        {
          statusText:item.statusText, 
          className:item.className
        }),
      className: item.className
    } 
  });
  

  newStatus:EligibilityTabAllowedStatus[] = [
    COMPLETED,
    NOT_STARTED,
    IN_PROCESS,
    NOT_STARTED,
    IN_PROCESS,    
    COMPLETED,
    IN_PROCESS,
    NOT_STARTED,
    IN_PROCESS
  ]

  onIndexChange(){
    this.getStatuses().subscribe(data=>{
      data.map((item, index)=>{

        let status:EligibilityTabAllowedStatus;

        switch(item.statusText.toUpperCase())
        {
          case "NOT_STARTED":
            status = <EligibilityTabAllowedStatus>{statusText:"Not Started", className:"not-started"};
            break;
          case "IN_PROCESS":
            status = <EligibilityTabAllowedStatus>{statusText:"In Process", className:"in-process"};
            break;
          case "COMPLETED":
            status = <EligibilityTabAllowedStatus>{statusText:"Completed", className:"completed"};
            break;
        }

        this.tabStatus$[index].status$.next(status);

      });
    }, 
    error=>{console.log("Error occurred while getting eligibility tab statuses")});
  }

  getStatuses():Observable<EligibilityTabAllowedStatus[]>{
    // now returns an Observable of Config
    return this.http.get<EligibilityTabAllowedStatus[]>('url');
  }

  

  initMenuItems(){
    this.menuItems = [
      <CustomStepMenuItem>{
        label:"One",
        legend:this.tabStatus$[EligibilityTabIndex.One].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.One;
        }
      },
      <CustomStepMenuItem>{
        label:"Two",
        legend:this.tabStatus$[EligibilityTabIndex.Two].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex =EligibilityTabIndex.Two;
        }
      },
      <CustomStepMenuItem>{
        label:"Three",
        legend:this.tabStatus$[EligibilityTabIndex.Three].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Three;
        }
      },
      <CustomStepMenuItem>{
        label:"Four",
        legend:this.tabStatus$[EligibilityTabIndex.Four].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Four;
        }
      },
      <CustomStepMenuItem>{
        label:"Five",
        legend:this.tabStatus$[EligibilityTabIndex.Five].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Five;
        }
      },
      <CustomStepMenuItem>{
        label:"Six",
        legend:this.tabStatus$[EligibilityTabIndex.Six].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Six;
        }
      },
      <CustomStepMenuItem>{
        label:"Seven",
        legend:this.tabStatus$[EligibilityTabIndex.Seven].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Seven;
        }
      },
      <CustomStepMenuItem>{
        label:"Eight",
        legend:this.tabStatus$[EligibilityTabIndex.Eight].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Eight;
        }
      },
      <CustomStepMenuItem>{
        label:"Nine",
        legend:this.tabStatus$[EligibilityTabIndex.Nine].status$.asObservable(),
        command: (event: any) => {
          this.activeIndex = EligibilityTabIndex.Nine;
        }
      }
    ]
  }

}
