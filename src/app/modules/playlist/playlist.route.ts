import { Routes } from "@angular/router";
import { CreatePlaylistComponent } from "./components/create-playlist/create-playlist/create-playlist.component";
import { DetailPlaylistComponent } from "./components/detail-playlist/detail-playlist/detail-playlist.component";
import { TableListComponent } from "./components/table-playlist/table-list/table-list.component";
import { PrincipalComponent } from "./components/pricipal/principal/principal.component";
import { Component } from "@angular/core";

export default [
    { 
        path: '', 
        component: PrincipalComponent,
        children:[
            {
                path:'',
                component: TableListComponent   
            },
            { 
                path: 'create-playlist', 
                component: CreatePlaylistComponent 
            },
            { 
                path: 'description-playlist/:playlistName', 
                component: DetailPlaylistComponent 
            },
        ]
    }
] as Routes;