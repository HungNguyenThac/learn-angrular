import { Author } from '../authors-module';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authors.service';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {
  userList!: Author[];
  currentUser!: Author;

  onSelected(selectedAuthor: Author) {
    this.currentUser = selectedAuthor;
    console.log(this.currentUser);
  }
  onRemove(user: Author) {
    let userId!: number;
    let indexRemove!: number;
    this.userList = this.userList.filter((author, index) => {
      if (author === user) {
        userId = user.id;
        indexRemove = index;
        return false;
      }
      return true;
    });
    if (userId === this.currentUser.id) {
      indexRemove === this.userList.length
        ? (this.currentUser = this.userList[indexRemove - 1])
        : (this.currentUser = this.userList[indexRemove]);
    }
  }
  constructor(private moveService: AuthorService) {}

  ngOnInit(): void {
    this.moveService.getUser().subscribe((authorsList) => {
      this.userList = authorsList;
      this.currentUser = authorsList[0];
    });
  }
}
