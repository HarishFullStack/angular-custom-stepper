import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-mpl-employmentinformation',
  templateUrl: './mpl-employmentinformation.component.html',
  styleUrls: ['./mpl-employmentinformation.component.scss']
})
export class MPLEmploymentinformationComponent implements OnInit {

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
