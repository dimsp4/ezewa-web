import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number): string {
    const formattedPrice = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return 'Rp ' + formattedPrice;
  }
}
