import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreatePlaylist, ResponseFetchAllPlayList, ResponseFetchDetail, ResponseValidateExistPlayListName } from '../models/playlist';
import { backendUrl } from '../../../core/constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class ManagePlaylistService {

  private PATH_ROOT = "lists";

  constructor(private readonly http: HttpClient) { 
    
  }

  fetchAllPlayList(pageNumber: number, pageSize: number):Observable<ResponseFetchAllPlayList> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber) 
      .set('pageSize', pageSize); 
    return this.http.get<ResponseFetchAllPlayList>(backendUrl(this.PATH_ROOT), { params });
  }

  fetchDetailPlayList(playlistName: string):Observable<ResponseFetchDetail> {
    return this.http.get<ResponseFetchDetail>(backendUrl(`${this.PATH_ROOT}/${playlistName}`));
  }

  deletePlaylist(playlistName: string):Observable<void> {
    return this.http.delete<void>(backendUrl(`${this.PATH_ROOT}/${playlistName}`));
  }

  validatePlaylistName(playlistName: string):Observable<ResponseValidateExistPlayListName> {
    return this.http.get<ResponseValidateExistPlayListName>(backendUrl(`${this.PATH_ROOT}/${playlistName}/exists`));
  }

  createPlaylist(request: RequestCreatePlaylist):Observable<ResponseFetchDetail> {
    return this.http.post<ResponseFetchDetail>(backendUrl(`${this.PATH_ROOT}`), {...request});
  }
}
