import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	changeMessage(username : string){
		this.message = 'Hi ' + username + ', Have a nice day!';
	}
}