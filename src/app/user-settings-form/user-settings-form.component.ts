import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../_service/data.service';

@Component({
	selector: 'app-user-settings-form',
	templateUrl: './user-settings-form.component.html',
	styleUrls: [ './user-settings-form.component.css' ]
})
export class UserSettingsFormComponent implements OnInit {
	originalUserSettings: UserSettings = {
		name: null,
		agree: null,
		country: null,
		email: null,
		surname: null
	};

	_originalUserSettings: UserSettings = {
		name: 'გიორგი',
		surname: 'დათუნაშვილი',
		agree: true,
		country: 'საქართველო',
		email: 'giorgi@mail.com'
	};

	userSettings: UserSettings = { ...this.originalUserSettings };

	constructor(private _dataService: DataService) {}

	ngOnInit(): void {}

	onSubmit(form: NgForm) {
		console.log('in submit ', form.valid);
		this._dataService
			.postUserSettingsForm(this.userSettings)
			.subscribe((result) => console.log('loging res'), (error) => console.log('error'));
	}
}
