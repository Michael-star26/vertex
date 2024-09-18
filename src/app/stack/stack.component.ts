import { Component } from '@angular/core';
import { TuiAppearance, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiCardMedium,
    TuiAvatar,
    TuiTitle,
    TuiCell,
    TuiAppearance,
    TuiSurface,
    TuiHeader
  ],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.less'
})
export class StackComponent {

}
