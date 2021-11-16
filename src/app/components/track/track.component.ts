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
  }

  getTracks(){
    this.spotifyService.getallTracks().subscribe((response:any) => {
       this.tracks = response.data;
      console.log(response)
     });
   }
}
