import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(newBugName : string) : IBug {
		let newBug : IBug = {
			name : newBugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}