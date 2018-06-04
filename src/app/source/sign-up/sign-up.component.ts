import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {emailPattern, passwordPattern, phoneMask, phoneMaskSpecialChars, phonePattern} from '../../../shared/config/constants';
import {UserService} from '../../../shared/service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  PHONE_MASK = phoneMask;
  SPEC_CHARS = phoneMaskSpecialChars;

  constructor(private _userService: UserService, private _router: Router) {
  }

  signUp() {
    if (this.userForm.invalid) {
      this.showWrongInput();
      return;
    }
    if (!this.checkPass()) {
      alert('passwords not match');
      return;
    }
    this._userService.save(this.user).subscribe(next => {
      alert('success');
      this._router.navigateByUrl('/sign-in');
    }, err => {
      console.error(err);
    });
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      phone: new FormControl('+ 38 (___) ___ __ __', [Validators.required, Validators.pattern(phonePattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(passwordPattern)]),
      repassword: new FormControl('', [Validators.required, Validators.pattern(passwordPattern)]),
      information: new FormControl('')
    });
    this.userForm.valueChanges.subscribe(next => {
      this.user = next;
    });
  }

  private checkPass(): boolean {
    console.log(this.userForm.get('password'));
    console.log(this.userForm.get('repassword'));
    return this.userForm.get('password').value == this.userForm.get('repassword').value;
  }

  private showWrongInput() {
    let err = 'wrong ';
    if (this.userForm.get('name').invalid) {
      err += 'name, ';
      console.error(this.userForm.get('name').errors);
    }
    if (this.userForm.get('surname').invalid)
      err += 'surname, ';
    if (this.userForm.get('email').invalid) {
      err += 'email, ';
      console.error(this.userForm.get('email').errors);
    }
    if (this.userForm.get('phone').invalid) {
      err += 'phone, ';
      console.error(this.userForm.get('phone').errors);
    }
    if (this.userForm.get('password').invalid)
      err += 'password, ';
    console.error(this.user);
    err = err.slice(0, err.lastIndexOf(', '));
    alert(err);
  }

}
