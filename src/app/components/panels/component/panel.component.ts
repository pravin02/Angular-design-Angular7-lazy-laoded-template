import { Component, Input } from "@angular/core";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent {
    @Input()
    public count: number;
    @Input()
    public label: string;
    @Input()
    public panelStatus: string;
    @Input()
    public className: string;

}