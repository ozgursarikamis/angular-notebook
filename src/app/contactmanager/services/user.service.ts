import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private dataStore: {
		users: User[];
	}

	private _users: BehaviorSubject<User[]>;

	constructor(private httpClient: HttpClient) {
		this.dataStore = { users: [] };
		this._users = new BehaviorSubject<User[]>([]);
	}

	
	public get users() : Observable<User[]> {	
		return this._users.asObservable();
	}
	
	listAllUsers() {
		const url = 'https://angular-material-api.azurewebsites.net/users';

		return this.httpClient.get<User[]>(url)
			.subscribe(data => {
				this.dataStore.users = data;
				this._users.next(Object.assign({}, this.dataStore).users);
			},
				error => {
					console.error(error);
				});
	}
}
