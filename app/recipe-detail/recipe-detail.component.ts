import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "recipe-detail",
    moduleId: module.id,
    templateUrl: "./recipe-detail.component.html"
})
export class RecipeDetailComponent implements OnInit {
    recipeSteps: Array<any>;

    constructor(
        private router: Router
    ) {
        this.recipeSteps = [{title: 'Ingredients'}, { title: 'Tools' }, { title: 'Procedure' }];
    }

    ngOnInit() {
    }

    changeTab(id: number) {
        console.log(id);
    }

    goHome(){
       this.router.navigate(["/"]);
   }


}

