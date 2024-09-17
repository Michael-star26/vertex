import { Component } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium } from '@taiga-ui/layout';
import { NgxScrollTopComponent } from 'ngx-scrolltop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TuiButton,
    NgxScrollTopComponent,
    TuiChevron,
    TuiIcon,
    TuiAppearance,
    TuiCardLarge,
    TuiCardMedium,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {

}
