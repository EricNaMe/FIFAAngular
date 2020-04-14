import { Component, OnInit } from '@angular/core';
import {GalleryItem, ImageItem} from "@ngx-gallery/core";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  images: GalleryItem[];

  imagesSrc = [
    {srcp:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/270px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'},
    {thumbr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/270px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png'}
    ];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      new ImageItem({src:'https://supertabthemes.com/wp-content/uploads/2019/08/1-2-1024x576.jpg', thumb:'https://supertabthemes.com/wp-content/uploads/2019/08/1-2-1024x576.jpg'}),
      new ImageItem({src:'https://supertabthemes.com/wp-content/uploads/2019/08/4-1024x576.jpg', thumb: 'https://supertabthemes.com/wp-content/uploads/2019/08/4-1024x576.jpg'}),
      new ImageItem({src:'https://supertabthemes.com/wp-content/uploads/2019/08/6-1-1024x576.jpg', thumb: 'https://supertabthemes.com/wp-content/uploads/2019/08/6-1-1024x576.jpg' }),
      new ImageItem({src:'https://img.fifa.com/image/upload/t_tc1/awg3jpecgbwoxexvjzqg.jpg', thumb:'https://img.fifa.com/image/upload/t_tc1/awg3jpecgbwoxexvjzqg.jpg'})
    ];
  }

}
