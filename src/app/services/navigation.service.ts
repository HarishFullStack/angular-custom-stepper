import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import steppers from "src/assets/constant-files/steppers";

@Injectable({
    providedIn: "root",
  })
  export class NavigationService {

    currentProduct: string = '';
    currentStep: number = 0;

    steps = JSON.parse(JSON.stringify(steppers));

    constructor(private router: Router){

    }

    nextStep(){
        var currentProductSteps = this.steps[this.currentProduct.toLocaleLowerCase()];
        var nextStep = currentProductSteps[++this.currentStep];

        this.router.navigateByUrl(this.currentProduct.toLocaleLowerCase() + nextStep.path.toLocaleLowerCase());
    }

    backStep(){
        var currentProductSteps = this.steps[this.currentProduct.toLocaleLowerCase()];
        var nextStep = currentProductSteps[--this.currentStep];

        this.router.navigate([this.currentProduct.toLocaleLowerCase() + nextStep.path.toLocaleLowerCase()]);
    }

    showNext(){
        var currentProductSteps = this.steps[this.currentProduct.toLocaleLowerCase()];

        return this.currentStep < currentProductSteps.length - 1;
    }

    showBack(){
        var currentProductSteps = this.steps[this.currentProduct.toLocaleLowerCase()];

        return this.currentStep > 0;
    }
  }