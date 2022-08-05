import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-accountinformation',
  templateUrl: './accountinformation.component.html',
  styleUrls: ['./accountinformation.component.scss']
})
export class AccountinformationComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  validateNext(){
    console.log('validate next');
    this.navigationService.nextStep();
  }

  validateBack(){
    console.log('validate back');
    this.navigationService.backStep();
  }
}
