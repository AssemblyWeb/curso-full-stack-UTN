import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NavComponent } from './nav/nav.component'


@NgModule({
    declarations: [NavComponent],
    exports: [NavComponent],
    imports: [
        CommonModule,
        FormsModule,
    ]
})

export class PageModule {

}