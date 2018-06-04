import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef;

  @ViewChild('form') form: ElementRef;


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
    // (function() {
    //   "use strict";
    //
    //   var supportsMultiple = HTMLInputElement && "valueLow" in HTMLInputElement.prototype;
    //
    //   var descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
    //
    //   window.multirange = function(input) {
    //     if (supportsMultiple || input.classList.contains("multirange")) {
    //       return;
    //     }
    //
    //     var value = input.getAttribute("value");
    //     var values = value === null ? [] : value.split(",");
    //     var min = +(input.min || 0);
    //     var max = +(input.max || 100);
    //     var ghost = input.cloneNode();
    //
    //     input.classList.add("multirange", "original");
    //     ghost.classList.add("multirange", "ghost");
    //
    //     input.value = values[0] || min + (max - min) / 2;
    //     ghost.value = values[1] || min + (max - min) / 2;
    //
    //     input.parentNode.insertBefore(ghost, input.nextSibling);
    //
    //     Object.defineProperty(input, "originalValue", descriptor.get ? descriptor : {
    //       // Fuck you Safari >:(
    //       get: function() { return this.value; },
    //       set: function(v) { this.value = v; }
    //     });
    //
    //     Object.defineProperties(input, {
    //       valueLow: {
    //         get: function() { return Math.min(this.originalValue, ghost.value); },
    //         set: function(v) { this.originalValue = v; },
    //         enumerable: true
    //       },
    //       valueHigh: {
    //         get: function() { return Math.max(this.originalValue, ghost.value); },
    //         set: function(v) { ghost.value = v; },
    //         enumerable: true
    //       }
    //     });
    //
    //     if (descriptor.get) {
    //       // Again, fuck you Safari
    //       Object.defineProperty(input, "value", {
    //         get: function() { return this.valueLow + "," + this.valueHigh; },
    //         set: function(v) {
    //           var values = v.split(",");
    //           this.valueLow = values[0];
    //           this.valueHigh = values[1];
    //           update();
    //         },
    //         enumerable: true
    //       });
    //     }
    //
    //     if (typeof input.oninput === "function") {
    //       ghost.oninput = input.oninput.bind(input);
    //     }
    //
    //     function update() {
    //       ghost.style.setProperty("--low", 100 * ((input.valueLow - min) / (max - min)) + 1 + "%");
    //       ghost.style.setProperty("--high", 100 * ((input.valueHigh - min) / (max - min)) - 1 + "%");
    //     }
    //
    //     input.addEventListener("input", update);
    //     ghost.addEventListener("input", update);
    //
    //     update();
    //   }
    //
    //   multirange.init = function() {
    //     [].slice.call(document.querySelectorAll("input[type=range][multiple]:not(.multirange)")).forEach(multirange);
    //   }
    //
    //   if (document.readyState == "loading") {
    //     document.addEventListener("DOMContentLoaded", multirange.init);
    //   }
    //   else {
    //     multirange.init();
    //   }
    //
    // })();
  }

  openForm() {
    this.form.nativeElement.style.top = '15px';
  }

  closeForm() {
    this.form.nativeElement.style.top = '-120%';
  }



}
