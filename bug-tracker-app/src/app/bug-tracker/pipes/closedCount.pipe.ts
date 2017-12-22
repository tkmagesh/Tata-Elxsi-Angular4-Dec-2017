import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';
@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(data: IBug[]): number {
		return data.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}