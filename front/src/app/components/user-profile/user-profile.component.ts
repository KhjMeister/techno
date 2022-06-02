import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
  keyword :boolean = false;
  constructor() {   
  }
  ngOnInit() {
  }
  send(status:boolean){
    this.keyword = status;
  }
}
