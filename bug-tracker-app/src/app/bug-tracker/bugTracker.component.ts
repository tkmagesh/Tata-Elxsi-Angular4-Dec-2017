import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	onCreateNewClick(newBugName : string){
		let newBug : IBug = {
			name : newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}
	onBugClick(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}
}