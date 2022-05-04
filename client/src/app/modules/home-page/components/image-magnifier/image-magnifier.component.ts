import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-magnifier',
  templateUrl: './image-magnifier.component.html',
  styleUrls: ['./image-magnifier.component.scss'],
})
export class ImageMagnifierComponent implements OnInit {
  @Input()
  imgSrc: string = '';

  constructor() {}

  ngOnInit(): void {}

  onImageClick() {
    this.magnify('magnifiable-image', 4);
  }

  @HostListener('document:keydown.escape')
  removeMagnifierGlass() {
    let glass = document.querySelector('.img-magnifier-glass');
    glass?.remove();
  }

  magnify(imgID: string, zoom: number) {
    // Credit: https://stackoverflow.com/questions/56180297/image-magnifier-in-angular
    let img: HTMLImageElement;
    let glass: HTMLDivElement;
    let w: number, h: number;
    const bw = 3;
    img = document.getElementById(imgID) as HTMLImageElement;
    /*create magnifier glass:*/
    glass = document.createElement('div');
    glass.setAttribute('class', 'img-magnifier-glass');
    /*insert magnifier glass:*/
    img.parentElement?.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize =
      img.width * zoom + 'px ' + img.height * zoom + 'px';
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);

    function moveMagnifier(e: MouseEvent) {
      let pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + 'px';
      glass.style.top = y - h + 'px';
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition =
        '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
    }
    function getCursorPos(e: MouseEvent) {
      let a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
}
