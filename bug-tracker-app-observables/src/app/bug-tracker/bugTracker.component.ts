import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService  } from './services/bugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
/*export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	sortBugBy : string = 'name';
	sortByDescending :  boolean = false;
	

	ngOnInit(){
		this.bugServer
			.getAll()
			.then(bugs => this.bugs = bugs);

	}

	constructor(private bugServer : BugServerService, private bugStorage : BugStorageService){
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug))
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
}*/
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	sortBugBy : string = 'name';
	sortByDescending :  boolean = false;
	

	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);


	}

	constructor(private bugServer : BugServerService){
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}
	
	onBugClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug).subscribe(_ => {}));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
	
}
