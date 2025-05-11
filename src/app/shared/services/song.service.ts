import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { backendUrl } from '../../core/constants/api-url';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private PATH_ROOT = "songs";

  constructor(private readonly http: HttpClient) { }

  fetchAllSong():Observable<Song[]> {
    return this.http.get<Song[]>(backendUrl(this.PATH_ROOT));
  }
}
