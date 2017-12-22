import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService  } from './services/bugOperations.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	sortBugBy : string ;
	sortByDescending :  boolean = false;
	newBugName : string= '';

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
}