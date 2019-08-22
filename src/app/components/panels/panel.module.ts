import { NgModule } from "@angular/core";
import { PanelComponent } from './component/panel.component';
import { CommonModule } from '@angular/common';

/**
 * @author Pravin P Patil
 */
@NgModule({
    declarations: [PanelComponent],
    imports: [CommonModule],
    exports: [PanelComponent]
})
export class PanelModule { }