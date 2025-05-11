import { Component } from '@angular/core';
import { Playlist, ResponseFetchAllPlayList } from '../../../models/playlist';
import { ManagePlaylistService } from '../../../services/manage-playlist.service';
import { ConfirmationService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { UtilService } from '../../../../../shared/services/util.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../../shared/modules/primeng/primeng.module';

@Component({
  selector: 'app-table-list',
  imports: [CommonModule,
    PrimeNgModule,
    TranslateModule,
  RouterModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent {
  
  playlists: Playlist[] = []
  showModalDetail: boolean = false;
  totalElement: number = 0;

  constructor(
    private readonly managePlaylistService:ManagePlaylistService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
    private utilService: UtilService,
  ) {}

  eventFetchKnowledgeBases($event: any):void {
    const page:number = $event?.first / $event.rows;
    const size: number = $event.rows;
    this.fetchAllPlaylist(page, size);
  }

  fetchAllPlaylist(page:number, size:number):void {
    this.managePlaylistService.fetchAllPlayList(page, size).subscribe({
      next: (response: ResponseFetchAllPlayList) => {
        this.playlists = response.playlists;
        this.totalElement = response.totalElement;
      },
      error: (e) => {
        console.log(e)
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onViewDetailPlaylist(playListName: string):void {
    this.router.navigate(["playlist", "description-playlist", playListName]);
  }

  onDeletePlaylist(playlistName: string):void {
    this.confirmationService.confirm({
      message: this.translate.instant('messages.confirmation.CONFIR001'),
      accept: () => {
        console.log(playlistName);
          this.callDeletePlaylist(playlistName);
      },
    });
  }

  callDeletePlaylist(playlistName: string):void {
    this.managePlaylistService.deletePlaylist(playlistName).subscribe({
      next: () => {
        this.fetchAllPlaylist(0, 5);
        this.utilService.showMessage("messages.playlist-deleted", "success");
      },
      error: (e) => {
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onCreatePlaylist():void {
    this.router.navigate(["playlist","create-playlist"]);
  }
}
