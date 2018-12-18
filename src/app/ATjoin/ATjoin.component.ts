import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ATjoin',
  templateUrl: './ATjoin.component.html',
  styleUrls: ['./ATjoin.component.css']
})
export class ATjoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var btn = document.getElementsByClassName("link");
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function() {
        var currents = document.getElementsByClassName("active");
          currents[0].className = currents[0].className.replace(" active", "");
          this.className += " active";
    });
  }
}

}
