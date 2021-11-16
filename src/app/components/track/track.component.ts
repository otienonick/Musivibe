import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  tracks: any[]=[];
  constructor(private spotifyService:ApiserviceService) { }

  ngOnInit(): void {
    this.spotifyService.getallTracks().subscribe((results:any) => {
      this.tracks = results.data;
      console.log(this.tracks)
    });
  }

  
}
