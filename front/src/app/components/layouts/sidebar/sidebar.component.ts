import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../../shared/token.service';
import { AuthStateService } from '../../../shared/auth-state.service';
import { AlertifyService } from '../../../shared/alertify.service';

// User interface
export class User {
  name: any;
  email: any;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  UserProfile!: User;
  
  isSignedIn!: boolean;

  constructor(public authService: AuthService,
    private auth: AuthStateService,
    public router: Router,
    private alertify:AlertifyService,
    public token: TokenService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
    
  }



  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
    this.alertify.message('با موفقیت خارج شدید ');


  }

}
