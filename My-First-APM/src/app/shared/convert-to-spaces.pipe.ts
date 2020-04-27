//Step 2: import Pipe
//Step 4: implement PipeTransform
import {Pipe, PipeTransform} from '@angular/core';

//Step 3: Set up dat pip!
@Pipe({
    name: 'convertToSpaces'
})


//Step 1: Declare clasd
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}