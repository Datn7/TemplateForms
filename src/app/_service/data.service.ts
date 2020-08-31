import { Injectable } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private _http: HttpClient) {}

	postUserSettingsForm(userSettings: UserSettings): Observable<any> {
		return this._http.post('url', userSettings);
	}
}
