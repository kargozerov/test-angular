import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
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
