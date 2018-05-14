import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../comment/comment.module";

@Injectable()
export class CommentsService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  postData(comment: CommentModel) {

    const body = {
      username: comment.username,
      textForComment: comment.textForComment,
      country: comment.country,
      time: comment.time
    };
    return this.http.post('http://localhost:8080/comment', body);
  }

  testPost(comment: CommentModel) {
    const body = {
      username: "User",
      textForComment: "Text",
      country: "Austria",
      time: "11.20"
    };
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:8080/comment', body);
    // return this.http.get('http://localhost:8080/comment?user=TESTUSER');
  }
}
