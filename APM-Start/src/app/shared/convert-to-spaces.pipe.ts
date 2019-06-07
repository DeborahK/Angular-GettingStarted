import {Pipe,PipeTransform} from '@angular/core';
//import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({
    name:'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
transform(value : string, character:string): string{

    return value.replace(character, ' ');
}
}