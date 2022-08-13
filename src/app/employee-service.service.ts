import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees() : Hero[]{
    return [{eno:1, eFname: 'Gulam', eLname: 'Mohammed', City: 'Toronto', Age: 31, salary:32000, gender:'Male'}
        ,{eno:2, eFname: 'Fehmida', eLname: 'Khatoon', City: 'Toronto', Age: 22, salary:42000, gender:'Female'}
        ,{eno:3, eFname: 'Begum', eLname: 'Shaheen', City: 'Toronto', Age: 52, salary:72000, gender:'Female'}
        ,{eno:4, eFname: 'Ishak', eLname: 'Madina Vali', City: 'Vizag', Age: 64, salary:172000, gender:'Male'}
        ,{eno:5, eFname: 'Gulam', eLname: 'Mustafa', City: 'Dubai', Age: 32, salary:22000, gender:'Male'}]
        ;
  }
}
