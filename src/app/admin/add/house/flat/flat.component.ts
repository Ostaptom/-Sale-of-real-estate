import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Flat} from '../../../../../shared/models/flat';
import {FILE_BASE64} from '../../../../../shared/utils/file-base64-encoder';
import {FlatImageWrapper} from '../../../../../shared/models/utils/FlatImageWrapper';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  @Output() oFlat = new EventEmitter<Flat>();
  flat = new Flat();

  constructor() {
    this.flat.images = new FlatImageWrapper();
  }

  sendFlat() {
    if (!this.flat.images.image || this.flat.images.image == ''||!this.flat.images.floorImage || this.flat.images.floorImage == '')
      return;
    this.oFlat.emit(this.flat);
    this.flat = new Flat();
    this.flat.images = new FlatImageWrapper();
  }

  parseImage(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      this.flat.images.image = next;
    });
  }

  parseImageF(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      this.flat.images.floorImage = next;
    });
  }

  ngOnInit() {
  }

}
