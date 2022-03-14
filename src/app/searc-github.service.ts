import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUserList } from './models/user-interface';



@Injectable({
  providedIn: 'root'
})
export class SearcGithubService {

  constructor(private http: HttpClient) { }

  searchUsers(str: string): Observable<IUserList> {
    return this.http.get<IUserList>(environment.api.githubSearch + str)
  }
}
