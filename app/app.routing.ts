import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "recipe/:id", component: RecipeDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }