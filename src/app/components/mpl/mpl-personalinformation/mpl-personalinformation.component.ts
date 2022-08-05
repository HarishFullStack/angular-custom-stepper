import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mpl-personalinformation',
  templateUrl: './mpl-personalinformation.component.html',
  styleUrls: ['./mpl-personalinformation.component.scss']
})
export class MPLPersonalinformationComponent implements OnInit {

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
