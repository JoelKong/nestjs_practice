import { PipeTransform } from '@nestjs/common';
export declare class IsPositivePipe implements PipeTransform {
    transform(value: number): number;
}
