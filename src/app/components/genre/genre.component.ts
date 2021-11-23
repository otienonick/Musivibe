import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres: any[]=[];
  constructor(private deezService:ApiserviceService) { }

  ngOnInit(): void {
    this.deezService.getallGenre().subscribe((results:any) => {
      this.genres = results.data;
      this.genres=this.genres.splice(-8);
      console.log(this.genres)
    });
  }

}
