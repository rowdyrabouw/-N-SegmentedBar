import { Component } from "@angular/core";
import {SegmentedBarItem} from "ui/segmented-bar";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})


export class AppComponent {
    public ListItems: Array<SegmentedBarItem>;
    public Items: Array<string> = ["apples", "pears"];

    constructor() {
        this.ListItems = [];
        for (let i = 0; i < this.Items.length; i++) {
            let tmpSegmentedBar: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBar.title = this.Items[i];
            this.ListItems.push(tmpSegmentedBar);
        }
    }
}
