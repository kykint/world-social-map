import {Component} from '@angular/core';
import {COMMENTS} from "./mock";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments = COMMENTS;
  username = "Test username";
  textcomment = "Text comment ";


}
