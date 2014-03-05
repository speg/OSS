/// <reference path="knockout.d.ts" />

interface iWidget {
    title: string;
    id: Number;
    validate(input:string):boolean;
}
interface Things{
    name: KnockoutObservable<string>;
    widgets: Broom[];
}
