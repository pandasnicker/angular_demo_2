import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component(
    {
        selector:'simple-comp',
        template:`You entered:  {{simpleInput}}`,
        styleUrls:['./simple.comp.css']
    }
)
export class simpleComponent implements OnChanges{

    @Input()
    simpleInput:string='';

    ngOnChanges(changes:SimpleChanges){
        for(let propName in changes){
            let change =  changes[propName];
            let current = JSON.stringify(change.currentValue);
            let prev = JSON.stringify(change.previousValue);
            // console.log(propName + ' : currentValue = ' + current + ', previousValue = ' + prev );
            console.log(`${propName}  : currentValue =  ${current} , previousValue = ${prev} `);
            
        }
    }
}