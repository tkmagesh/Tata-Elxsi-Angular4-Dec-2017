import { Component, Output, EventEmitter } from '@angular/core';
import { BugServerService } from '../services/bugServer.service';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string= '';

	@Output()
	onNewBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService){

	}
	onCreateNewClick(){
		this.bugServer
			.addNew(this.newBugName)
			.then(newBug => this.onNewBug.emit(newBug));
	}

}