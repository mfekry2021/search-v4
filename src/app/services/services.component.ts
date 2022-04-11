import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  allowAddService = false;
  serviceCreationStatus = false;

  constructor() {
    setTimeout(()=>this.allowAddService = true,2000);
  }

  ngOnInit(): void {
  }

  onCreateService(){
    this.serviceCreationStatus = true;
  }

}
