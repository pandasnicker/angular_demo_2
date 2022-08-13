import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

    // hero: Hero = {
    //   id: 1,
    //   name: "Shaktimann"
    // };

    selectedRadiobtn:string = "All";

    myEmp: Hero[] = [];

    constructor(private _employeeServ:EmployeeService) {  //dependency injection step
      
    }
    trackbyid(index: number, emp: any): string {
      return emp.eno;
    }

    getEmp(){
      this.myEmp = this._employeeServ.getEmployees();
    }

    ngOnInit(): void{
      this.getEmp();
    }
    // refresh():void{
    //   this.myEmp= [
    //     {eno:1, eFname: 'Gulam', eLname: 'Mohammed', City: 'Toronto', Age: 31, salary:32000, gender:'Male'}
    //     ,{eno:2, eFname: 'Fehmida', eLname: 'Khatoon', City: 'Toronto', Age: 22, salary:42000, gender:'Female'}
    //     ,{eno:3, eFname: 'Begum', eLname: 'Shaheen', City: 'Toronto', Age: 52, salary:72000, gender:'Female'}
    //     ,{eno:4, eFname: 'Ishak', eLname: 'Madina Vali', City: 'Vizag', Age: 64, salary:172000, gender:'Male'}
    //     ,{eno:5, eFname: 'Gulam', eLname: 'Mustafa', City: 'Dubai', Age: 32, salary:22000, gender:'Male'}
    //   ];
    // }

    getTotalEmp(): number {
      return this.myEmp.length;
    }

    getMaleEmp(): number {
      return this.myEmp.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmp(): number {
      return this.myEmp.filter(e => e.gender === 'Female').length;
    }

    onEmpCntRadBtnChanged(selectedRadiobtn:string):void{
      this.selectedRadiobtn = selectedRadiobtn;
    }

}
