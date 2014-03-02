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
    constructor(public name:string){
    }
    getUrl() {
        return '/things/:id/' + this.widgets.length;
    }
    render(){
      var html = '<div class="thing">';
      this.widgets.forEach(function(w){
          html += w.render();
      });
      html += '</div>';
      return html;
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

    render(){
      var html = '<div class="broom widget"><h1>';
      html += this.title;
      html += '</h1></div>';
      return html;
    }

    complete(input:string) {
        if (!this.validate(input)){
            return false;
        }
        this.secret = input;
        return true;
    }
}
var T = new Thing('First One');
var w = new Broom('thing');
w.complete('5')
T.widgets.push(w);
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('main').innerHTML = T.render();
});
