import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export enum EligibilityTabIndex {
    One = 0,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
}

export interface EligibilityTabAllowedStatus {
    statusText: string,
    className: string
}

export interface EligibilityTabStatus {
    status$: BehaviorSubject<EligibilityTabAllowedStatus>;
    className: string;
}

export const NOT_STARTED = <EligibilityTabAllowedStatus>{statusText:"Not Started", className:"not-started"};
export const IN_PROCESS = <EligibilityTabAllowedStatus>{statusText:"In Process", className:"in-process"};
export const COMPLETED = <EligibilityTabAllowedStatus>{statusText:"Completed", className:"completed"};

