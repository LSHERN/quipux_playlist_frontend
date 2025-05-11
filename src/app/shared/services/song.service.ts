import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseFetchAllSongs } from '../models/song';
import { backendUrl } from '../../core/constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private PATH_ROOT = "songs";

  constructor(private readonly http: HttpClient) { }

  fetchAllSong():Observable<ResponseFetchAllSongs> {
    return this.http.get<ResponseFetchAllSongs>(backendUrl(this.PATH_ROOT));
  }
}
