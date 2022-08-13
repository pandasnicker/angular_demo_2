import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
        selector: 'employee-count',
        templateUrl: './employeeCount.component.html',
        styleUrls: ['./employeeCount.component.css']
    }
)
export class empcountComponent{

    selectedRadioButton:string = 'All';

    @Output()
    radioChange: EventEmitter<string>= new EventEmitter<string>();

    @Input()
    all:number = 0;

    @Input()
    male:number = 0;

    @Input()
    female:number = 0;

    onRadioBtnChanged(){
        this.radioChange.emit(this.selectedRadioButton);
        console.log(this.selectedRadioButton);
    }
}