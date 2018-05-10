import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModule} from "./comment.module";

@Injectable()
export class CommentsService {

  configUrl = 'assets/config.json';

  //http://localhost:60489/Home/PostUser  ASP.NET MVC 5
  //http://localhost:8080/angular/setUser.php     PHP
  // http://localhost:60820/api/values        ASP NET Wep API 2

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  postData(comment: CommentModule) {

    const body = {
      username: comment.username,
      textcomment: comment.textcomment,
      country: comment.country,
      time: comment.time
    };
    return this.http.post('http://localhost:8080/comment', body);
  }

  testPost(comment: CommentModule) {
    const body = {
      username: "User",
      textcomment: "Text",
      country: "Austria",
      time: "11.20"
    };
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:8080/comment', body);
    // return this.http.get('http://localhost:8080/comment?user=TESTUSER');
  }
}
