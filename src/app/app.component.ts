import {Component} from '@angular/core';
import {UserDetailsService} from '../shared/service/user-details.service';
import {UserService} from '../shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _userDetails: UserDetailsService, private _userService: UserService) {
    if (_userDetails.checkAuth())
      this._userService.get().subscribe(next => {
        this._userDetails.login(next);
      });
  }
}
