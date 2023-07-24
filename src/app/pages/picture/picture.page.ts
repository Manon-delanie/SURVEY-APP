import { Component, OnInit } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { PhotoService } from 'src/app/services/photo.service';
// import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  // public photo: Photo | undefined = undefined;

  constructor(public photoService : PhotoService) { }

  async ngOnInit() {
    //await Preferences.clear();
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  /*public capture(){
    this.photoService.addPhotoToGallery().then((_photo: Photo) => {
      this.photo = _photo;
    });
  }*/
}
