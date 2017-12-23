 let SM = (function(){
 	let _state = null,
 		_reducer = null,
 		_init_action = '@@INIT_ACTION',
 		_subscribers = [];

 	
 	function getState(){
 		return _state;
 	}
 	function dispatch(action){
 		let newState = _reducer(_state, action);
 		if (newState === _state) return;
 		_state = newState;
 		triggerChange();
 	}

 	function triggerChange(){
 		_subscribers.forEach(subscriber => subscriber());
 	}

 	function subscribe(subscriber){
 		if (typeof subscriber === 'function')
 			_subscribers.push(subscriber);
 	}

 	function createStore(reducer){
 		_reducer = reducer;
 		_state = reducer(undefined, _init_action);
 		return { getState, dispatch, subscribe };
 	}

 	return { createStore };
 })();