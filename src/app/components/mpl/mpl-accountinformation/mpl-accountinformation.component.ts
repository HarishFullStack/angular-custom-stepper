import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mpl-accountinformation',
  templateUrl: './mpl-accountinformation.component.html',
  styleUrls: ['./mpl-accountinformation.component.scss']
})
export class MPLAccountinformationComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.currentProduct = 'mpl';
    this.navigationService.currentStep = 0;
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
