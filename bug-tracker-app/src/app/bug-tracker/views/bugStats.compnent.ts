import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector: 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`
})
export class BugStatsComponent {

	@Input('data')
	bugs : IBug[] = [];

	constructor() {}

	getClosedCount(){
		/*
		let closedCount = 0;
		for(let bug of this.bugs){
			if (bug.isClosed)
				++closedCount;
		}
		return closedCount;
		*/

		return this.bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
	
}