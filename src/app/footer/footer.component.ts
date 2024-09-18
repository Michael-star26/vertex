import { Component,ChangeDetectionStrategy } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon, TuiSurface } from '@taiga-ui/core';
import { TuiBadge, TuiChevron } from '@taiga-ui/kit';
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
    TuiSurface,
    TuiBadge,
    
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
