import {  PipeTransform, Pipe } from 'angular2/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], arg: string): IProduct[] {
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
