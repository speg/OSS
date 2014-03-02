interface iWidget {
    title: string;
    id: Number;
    validate(input:string):boolean;
}
interface Things{
    name: string;
    widgets: Broom[];
}
