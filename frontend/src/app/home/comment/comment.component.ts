import {Component, Input} from '@angular/core';
import {CommentsService} from "../comment-list/comments.service";
import {CommentModule} from "./comment.module";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: CommentModule;
  @Input() isInput: boolean;

  receivedComment: CommentModule;
  done: boolean;

  constructor(private commentsService: CommentsService) {

  }

  submit(comment: CommentModule) {
    this.commentsService.postData(this.comment)
      .subscribe(
        (data: CommentModule) => {
          this.receivedComment = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

}
