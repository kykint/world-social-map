import {Component} from '@angular/core';
import {CommentModule} from "../comment/comment.module";
import {COMMENTS} from "../comment/mock";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {

  comment: CommentModule = {
    username: 'Jessy',
    textForComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    country: "Italy",
    time: "12:00 am"
  };

  commentsMock: CommentModule[] = COMMENTS;

  constructor() {

  }

}
