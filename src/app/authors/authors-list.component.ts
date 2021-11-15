import { Author } from './../authors-module';
import { Component } from "@angular/core";
import authors from "../authors-module";


@Component({
    selector: "author-list",
    templateUrl:"./author-list.component.html",
    styleUrls: ["./author-list.component.scss"],
})

export class AuthorListComponent{
   userList:Author[] = authors

   currentUser = this.userList[0]

   onSelected(selectedAuthor:Author){
    this.currentUser = selectedAuthor
   }

   onRemove(idx:number){
    this.userList.splice(idx, 1)
   }
}