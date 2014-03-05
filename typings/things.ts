/// <reference path="basic.d.ts" />

var nextId = (function(){
    var c = 0;
    return function(){
        return c++;
    }

}())

class Validator {
  private rule:RegExp;
  constructor(regex:string){
    this.rule = new RegExp(regex);
  }
  test(input){
    return this.rule.test(input.toString());
  }
}

class Thing implements Things{
    widgets = [];
    name:KnockoutObservable<string>;
    constructor(name:string){
      this.name = ko.observable(name);
    }
    getUrl() {
        return '/things/:id/' + this.widgets.length;
    }
}

class Broom implements iWidget {
    id: Number;
    private secret:string;
    validators:Validator[] = [];
    constructor(public title:string){
        this.id = nextId();
        this.validators.push(new Validator('^[0-9]+$'));
    }

    validate(input:string){
        var valid = true;
        this.validators.forEach(function(v){
            if (!v.test(input)){
              valid = false;
            }
        });
        return valid;
    }

    complete(input:string) {
        if (!this.validate(input)){
            return false;
        }
        this.secret = input;
        return true;
    }
}
