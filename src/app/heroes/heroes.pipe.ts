import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'genderPipe'
})

export class genderPipe implements PipeTransform {

    transform(value:string, gender:string){
        if(gender.toLowerCase() == 'male')
            return 'Mr. '+value;
        else
            return 'Miss '+value;
    }
}
