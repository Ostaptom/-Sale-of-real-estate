import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Flat} from '../../../../../shared/models/flat';
import {FILE_BASE64} from '../../../../../shared/utils/file-base64-encoder';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  @Output() oFlat = new EventEmitter<Flat>();
  flat = new Flat();

  constructor() {
  }

  sendFlat() {
    if(this.flat.image&&this.flat.image!='')
    this.oFlat.emit(this.flat);
    this.flat = new Flat();
  }

  parseImage(inp: HTMLInputElement) {
    FILE_BASE64(inp.files[0]).subscribe(next => {
      this.flat.image = next;
    });
  }

  ngOnInit() {
  }

}
