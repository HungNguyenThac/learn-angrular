import {Component, EventEmitter, Input, Output} from "@angular/core"

@Component({
    selector: "checked",
    templateUrl: "./checked.component.html",
    styleUrls: ["./checked.component.scss"],
})

export class CheckedComponent{
    @Input() value: any
    @Input() checked: any
    @Output() checkedChange = new EventEmitter<boolean>()

    Toggle(){
        this.checkedChange.emit(!this.checked)
    }
 }




