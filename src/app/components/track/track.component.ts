import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  tracks: any[]=[];
  reccommendations:any[]=[];
  
  constructor(private spotifyService:ApiserviceService) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#top').click( function(){
        $('#tracks').fadeIn(500);
        $('#mine').hide();
      });
      $('#rec').click( function(){
        $('#tracks').hide();
        $('#mine').fadeIn(500);
      });
    });    
    this.spotifyService.getallTracks().subscribe((results:any) => {
      this.tracks = results.data;
      console.log(this.tracks)
    });
  }
  getspotifyrecs(query){
    this.spotifyService.getspotifyRec(query).subscribe((results:any) => {
      this.reccommendations = results.songs;
      console.log(this.reccommendations)
    });
  }
  

