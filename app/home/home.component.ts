import {Component} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "home.component.html",
})


export class HomeComponent {
    recipeSteps: Array<any>;

    constructor(private router: Router) {
        this.recipeSteps = [{title: 'Ingredients'}, {title: 'Tools'}, {title: 'Procedure'}];
    }

    changeTab(id: number) {
        console.log(id);
    }

    goToRecipe(id: string){
       this.router.navigate(["/recipe", id]);
   }

}
