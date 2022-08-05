import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() moveNext = new EventEmitter<string>();
  @Output() moveBack = new EventEmitter<string>();

  currentStep = 0;

  constructor(private navigationService: NavigationService, private router: Router) { }


  ngOnInit(): void {
  }

  next(){
    this.moveNext.emit();
  }

  back(){
    this.moveBack.emit();
  }

  showNext(){
    return this.navigationService.showNext();
  }

  showBack(){
    return this.navigationService.showBack();
  }


}
