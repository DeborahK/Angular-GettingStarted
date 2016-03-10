import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: any, args: string[]): any {
        let filter = args[0].toLocaleLowerCase();
        return filter ? value.filter(product=> product.productName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}