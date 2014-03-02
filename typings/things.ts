/// <reference path="basic.d.ts" />

var nextId = (function(){
    var c = 0;
    return function(){
        return c++;
    }
    
}())

class Thing implements Things{
    widgets = [];
    constructor(public name:string){
    }
    getUrl() {
        return '/things/:id/' + this.widgets.length;
    }
}

class Broom implements iWidget {
    id: Number;
    private secret:string
    constructor(public title:string){
        this.id = nextId();
    }
    validate(input:string){
        return /^[0-9]+$/.test(input);
    }
    complete(input:string) {
        if (!this.validate(input)){
            return false;
        }
        this.secret = input;
        return true;
    }
}

var w = new Broom('thing');
w.complete('5')

