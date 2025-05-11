import { Component, OnInit } from '@angular/core';
import { ResponseFetchDetail } from '../../../models/playlist';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ManagePlaylistService } from '../../../services/manage-playlist.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../../shared/modules/primeng/primeng.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-playlist',
  imports: [CommonModule,
    PrimeNgModule,
    TranslateModule,
  RouterModule],
  templateUrl: './detail-playlist.component.html',
  styleUrl: './detail-playlist.component.scss'
})
export class DetailPlaylistComponent implements OnInit {

  detailPlaylist!: ResponseFetchDetail;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly managePlaylistService: ManagePlaylistService,
    private readonly router: Router)
  {}
  
  ngOnInit(): void {
    this.callFetchDetailPlaylist();  
  }

  callFetchDetailPlaylist() {
    const playlistName = this.route.snapshot.paramMap.get('playlistName');
    this.fetchDetailPlaylist(playlistName);
  }
  
  fetchDetailPlaylist(playlistName: string | null):void {
    if (!playlistName) return;
    this.managePlaylistService.fetchDetailPlayList(playlistName).subscribe({
      next: (response: ResponseFetchDetail) => {
        this.detailPlaylist = response;
      }
    });
  }

  onBack():void {
    this.router.navigate(["playlist"])
  }

}

