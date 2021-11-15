import {Component, Input} from "@angular/core"

@Component({
    selector: "nav-comp",
    templateUrl: "./navs.component.html",
    styleUrls: ["./navs.component.scss"]
})
export class NavsComponent {
    @Input() navs:string[] = []
}