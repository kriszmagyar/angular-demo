import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log('contructor ran...');
  }
  
  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.age = 30;
    this.email = 'johndoe@gmail.com'
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  onClick() {
    this.name = 'Krisz Magyar';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby: string) {
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(_hobby: string) {
    const newHobbies = this.hobbies.filter(hobby => hobby !== _hobby)
    this.hobbies = newHobbies
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  body: string,
  id: number,
  title: string,
  userId: number
}