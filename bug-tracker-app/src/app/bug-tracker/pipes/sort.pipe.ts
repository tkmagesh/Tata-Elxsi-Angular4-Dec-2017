import { Pipe, PipeTransform } from '@angular/core';

interface IComparer{
	(p1 : Object, p2 : Object) : number
}

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string) : IComparer {
		return function (p1 : Object, p2 : Object) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}

	private getDescendingComparerFor(comparer : IComparer) : IComparer{
		return function(p1:Object, p2:Object) : number {
			return comparer(p1, p2) * -1;
		}
	}
	transform(data : any[], attrName : string, isDescending : boolean = false) : any[] {
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}