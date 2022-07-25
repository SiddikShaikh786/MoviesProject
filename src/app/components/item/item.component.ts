import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Item } from './item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;
  // result!:string;
  imagesSizes = IMAGES_SIZES;

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
// this.route.url.subscribe((value)=>{
//   let path=value[value.length - 1].path
//   if(path==='tvshows'){
//     this.result='tv'
//   }
//   else if(path === 'movie'){

//   }
//   else{
//     this.result='movie'
//   }
// });
//   }
}
}
