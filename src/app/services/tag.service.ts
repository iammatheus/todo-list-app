import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Tag } from '../models/Tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  baseUrl = `${environment.apiURL}api/tag`;

  public getTags(): Observable<Tag> {
    return this.http.get<Tag>(`${this.baseUrl}`);
  }
}
