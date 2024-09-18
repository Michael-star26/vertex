import { NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy} from '@angular/core';
import { tuiFadeIn, TuiLabel, TuiLink, TuiOption, TuiScrollable, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiCarousel, TuiFade } from '@taiga-ui/kit';
import { TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    TuiCarousel,
    TuiCardMedium,
    TuiAvatar,
    TuiLabel,
    NgIf,
    TuiLink,
    TuiOption,
    TuiSurface,
    TuiTitle,
    TuiCell,
    TuiScrollable,
    TuiFade,
    TuiHeader
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.less',
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[tuiFadeIn]
})
export class TestimonialsComponent {
  protected expanded=false;
  protected toggle():void{
    this.expanded=!this.expanded
  }
}
