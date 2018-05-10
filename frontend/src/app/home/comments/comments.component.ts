import {Component} from '@angular/core';
import {COMMENTS} from "./mock";
import {CommentModule} from "./comment.module";
import {CommentsService} from "./comments.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CommentModule],
})
export class CommentsComponent {
  comments = COMMENTS;
  username = "Test username";
  textcomment = "Text comment ";

  comment: CommentModule = new CommentModule();
  receivedComment: CommentModule;
  done: boolean = false;

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

  submitTEST(comment: CommentModule) {
    this.commentsService.testPost(comment)
      .subscribe(
        (data: CommentModule) => {
          this.receivedComment = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }
}
