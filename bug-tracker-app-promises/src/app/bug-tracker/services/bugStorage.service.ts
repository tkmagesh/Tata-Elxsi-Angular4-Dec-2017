import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOperations : BugOperationsService){

	}

	addNew(bugName : string ) : IBug{
		let newBug = this.bugOperations.createNew(bugName , ++this.currentBugId);
		this.save(newBug);
		return newBug;
	}
	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	toggle(bugToToggle : IBug) : IBug{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
	getAll() : IBug[]{
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let rawData = this.storage.getItem(this.storage.key(index)),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;	
			result.push(bug);
		}
		return result;
	}
}