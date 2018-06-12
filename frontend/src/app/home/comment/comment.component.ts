import {Component, Input} from '@angular/core';
import {CommentsService} from "../comment-list/comments.service";
import {CommentModel} from "./comment.module";


@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: CommentModel;
  @Input() isInput: boolean;

  receivedComment: CommentModel;
  done: boolean;

  constructor(private commentsService: CommentsService) {

  }

  submit(comment: CommentModel) {
    this.commentsService.postData(this.comment)
      .subscribe(
        (data: CommentModel) => {
          this.receivedComment = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

}
