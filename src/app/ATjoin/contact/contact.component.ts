import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    public userService: UserService,
  ) { }


  ngOnInit() {
    this.feedbackForm = this._formBuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendFB(feedbackForm){
    console.log(feedbackForm.value);
    this.userService.postEnquiryUser(feedbackForm.value)
    alert("Send Message Successfully...\n Thank You...!!!")
    this.feedbackForm.reset();
  }
}
