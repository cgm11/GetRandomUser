import { Component, OnInit } from '@angular/core';

//services
import { UserManagerService } from './services/user-manager.service';


//models
import { IUserResponse, IUser, IUserPicture } from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  picture: string;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  handleClick(){
    this.getRandomUser();
  }

  getRandomUser(){
    this.userManagerService
    .getRandomUser()
    .subscribe((response: IUserResponse) =>{
      console.log(response);
      const { results } = response;
      const [data] = results;
      const { name, email, phone, picture }: IUser = data;
      this.name = `${name.first} ${name.last}`;
      this.email = email;
      this.phone = phone;
      this.picture = picture.large;
    })
  }

}
