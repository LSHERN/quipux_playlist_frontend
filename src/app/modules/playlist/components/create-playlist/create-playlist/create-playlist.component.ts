import { Component, OnInit } from '@angular/core';
import { RequestCreatePlaylist, ResponseFetchDetail, ResponseValidateExistPlayListName } from '../../../models/playlist';
import { Song } from '../../../../../shared/models/song';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SongService } from '../../../../../shared/services/song.service';
import { UtilService } from '../../../../../shared/services/util.service';
import { ManagePlaylistService } from '../../../services/manage-playlist.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../../../shared/modules/primeng/primeng.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-playlist',
  imports: [CommonModule,
    PrimeNgModule,
    TranslateModule,],
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.scss'
})

export class CreatePlaylistComponent implements OnInit {

  formPlaylist: FormGroup;
  songs: Song [] = [];
  selectedSongs: Song [] = []

  constructor(
    private readonly fb: FormBuilder, 
    private readonly songService: SongService,
    private readonly managePlaylistService: ManagePlaylistService,
    private readonly utilService: UtilService,
    private readonly router: Router) {

    this.formPlaylist = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchSongs();
  }

  fetchSongs():void {
    this.songService.fetchAllSong().subscribe({
      next: (response: Song[]) => {
        this.songs = response;
      }
    });
  }

  onCreatePlaylist():void {
    const request: RequestCreatePlaylist = {
      ...this.formPlaylist.value,
      idSong: this.selectedSongs.map(song => song.id)
    }
    this.managePlaylistService.createPlaylist(request).subscribe({
      next: (response: ResponseFetchDetail) => {
        if(response) {
          this.utilService.showMessage("messages.playlist-created", "success");
          this.onBack();
        }
      }, 
      error: (e) => {
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onBack():void {
    this.router.navigate(["playlist"]);
  }

  get controlName():FormControl {
    return this.formPlaylist.get("name") as FormControl;
  }

  get descriptionControl():FormControl {
    return this.formPlaylist.get("description") as FormControl;
  }
}
