import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  constructor(private artistService:ApiserviceService) { }

  ngOnInit(): void {
    this.artistService.getallArtists().subscribe((results:any) => {
      this.artist = results;
      console.log(this.artist)
    });
  }

}
