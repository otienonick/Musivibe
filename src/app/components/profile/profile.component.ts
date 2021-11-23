import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
tracks: any[]=[];
selectedFile:File=null;
  constructor(private spotifyService:ApiserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.spotifyService.getallTracks().subscribe((results:any) => {
      this.tracks = results.data;
      console.log(this.tracks)
    });
  }

  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const fd=new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('',fd,{

    })
    .subscribe(res=>{
      console.log(res);
    });
  }

  urllink:string="src/assets/camerapic.jpeg";
  selectFiles(event){
    if(event.target.files){
      var reader= new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        this.urllink=event.target.result;
      }
    }
  }

}
