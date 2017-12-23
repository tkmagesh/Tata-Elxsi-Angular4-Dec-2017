import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class BugServerService{
	private serviceUrl : string = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService, private http : Http){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get(this.serviceUrl)
			.map(response => response.json());
	}
	
	addNew(newBugName : string) : Observable<IBug>{
		let newBugData = this.bugOperations.createNew(newBugName); 
		return this.http
			.post(this.serviceUrl, newBugData)
			.map(response => response.json());
	}

	toggle(bugToToggle : IBug) : Observable<IBug> {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put(`${this.serviceUrl}/${bugToToggle.id}`, toggledBug)
			.map(response => response.json());
	}

	remove(bug : IBug) : Observable<any>{
		return this.http
			.delete(`${this.serviceUrl}/${bug.id}`)
			.map(response => response.json());	
	}
}