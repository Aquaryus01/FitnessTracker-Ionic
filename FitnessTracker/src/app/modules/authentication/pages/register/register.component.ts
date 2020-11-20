import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/commons/settings.service';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public user = {} as User
  error: string;
  constructor(private authenticationService: AuthenticationService,
              private settingsService: SettingsService,
              private router: Router) { }

  ngOnInit() { }

  register(): void {
    this.authenticationService.register(this.user).subscribe(res => {
      if (res["error"])
        this.error = "Nickname already exist!"
      else {
        this.error = "";  
        this.router.navigate(['/login']);
      }
      console.log(res);
    })
  }

}
