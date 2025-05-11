import { Song } from "../../../shared/models/song";

export type ResponseFetchAllPlayList = {
    playlists: Playlist[];
    pageSize: number;
    pageNumber: number;
    totalElement: number;
}

export type Playlist = {
    name: string;
    description: string;
}

export type ResponseFetchDetail = {
    songs: Song[];
} & Playlist;

export type ResponseValidateExistPlayListName = {
    existsPlayList: boolean;
}

export type RequestCreatePlaylist = {
    name: string;
    description: string;
    idSong: number[];
}