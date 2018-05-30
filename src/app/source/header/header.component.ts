import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let sT = window.pageXOffset || window.document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (sT > (window.innerHeight / 100) * 5) {
      this.header.nativeElement.style.background = 'rgba(0,0,0,.9)';
    } else {
      this.header.nativeElement.style.background = 'rgba(0,0,0,0)';
    }
  }

  ngOnInit() {
  }

}
