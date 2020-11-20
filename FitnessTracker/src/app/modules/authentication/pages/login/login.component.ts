import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/commons/settings.service';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user = {} as User
  error: string;
  constructor(private authenticationService: AuthenticationService,
              private settingsService: SettingsService,
              private router: Router) { }

  ngOnInit() {}

  login(): void{
    this.authenticationService.login(this.user).subscribe(res => {
      if(res["error"])
        this.error = res["error"]
      else{
        this.error = "";
        this.settingsService.setToken(res['access_token'])
        this.router.navigate(['/dashboard']);
      }
      console.log(res);
    })
  }

}
