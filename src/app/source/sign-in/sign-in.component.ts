import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/service/user.service';
import {UserDetailsService} from '../../../shared/service/user-details.service';
import {emailPattern, passwordPattern} from '../../../shared/config/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  credentialsForm: FormGroup;

  constructor(private _userSercice: UserService, private _userDetails: UserDetailsService, private _router: Router) {
  }

  login() {
    if (this.credentialsForm.invalid) {
      if (this.credentialsForm.get('email').invalid)
        alert('wrong email');
      if (this.credentialsForm.get('password').invalid)
        alert('wrong password');
      return;
    }
    this._userSercice.sendCredentials(this.user).subscribe(next => {
      this._userDetails.saveToken(next);
      this._userSercice.get().subscribe(next => {
        this._userDetails.login(this.user);
        this._router.navigateByUrl('/');
      }, err => {
        alert('error');
        console.error(err);
      });
    }, err => {
      alert('error');
      console.error(err);
    });
  }

  ngOnInit() {
    this.credentialsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(passwordPattern)])
    });
    this.credentialsForm.valueChanges.subscribe(data => {
      this.user = data;
    });
  }

}
