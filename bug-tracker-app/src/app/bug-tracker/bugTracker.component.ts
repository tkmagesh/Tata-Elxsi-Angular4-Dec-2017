import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService  } from './services/bugStorage.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	sortBugBy : string = 'name';
	sortByDescending :  boolean = false;
	newBugName : string= '';

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}
	
	constructor(private bugStorage : BugStorageService){
		
	}

	onCreateNewClick(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug))
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
}