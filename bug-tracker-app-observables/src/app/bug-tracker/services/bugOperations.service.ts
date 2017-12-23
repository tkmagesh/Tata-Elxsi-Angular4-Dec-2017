import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(newBugName : string, id : number = 0) : IBug {
		let newBug : IBug = {
			id : id,
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}