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
  recos: any[]=[];
  
  constructor(private spotifyService:ApiserviceService) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('#top').click( function(){
        $('#tracks').fadeIn(500);
        $('#mine2').hide();
        $('#mine').hide();
      });
      $('#rec').click( function(){
        $('#tracks').hide();
        $('#mine2').hide();
        $('#mine').fadeIn(500);
      });
      $('#dez').click( function(){
        $('#tracks').hide();
        $('#mine2').fadeIn(500);
        $('#mine').hide();
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
  getdeezerecs(formvals:any){
    this.spotifyService.getdeezerRec(formvals.artist,formvals.songname).subscribe((results:any) => {
      this.recos = results.songs;
      console.log(this.recos)
    });
  
}
}
