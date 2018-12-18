import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abtImg = [
    {img:'../../../assets/images/contact_background.jpg'},
    {img:'../../../assets/images/course_1.jpg'},
    {img:'../../../assets/images/course_2.jpg'},
  ];

  slideConfig= {
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplayDelay: 200,
    dots: true,
    }; 

}
