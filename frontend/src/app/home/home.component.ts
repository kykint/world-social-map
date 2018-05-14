import {Component, OnInit} from '@angular/core';
import {User} from "../auth/models/user";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;


  constructor(private httpService: AuthService) {

  }

  ngOnInit(): void {
    console.log("Send Get");

    this.showUser();
    console.log("Help");


  }

  showUser(): void {


    this.httpService.getUser().subscribe((data: User) => this.user = data);

  }


}
