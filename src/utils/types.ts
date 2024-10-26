import exp from "constants";

export enum SelectedPage{
    Home = 'home',
    Benefits = 'benefits',
    Classes = 'classes',
    About  = "about",
}


export interface BenefitType{
    icon : JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description? : string; // optional
    image:string;
}