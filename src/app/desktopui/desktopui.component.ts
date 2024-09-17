import { Component } from '@angular/core';
import {TuiCardLarge, TuiCardMedium, TuiCell, TuiNavigation} from '@taiga-ui/layout';
import {TuiSidebar} from '@taiga-ui/addon-mobile'
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { TuiAppearance, TuiButton, TuiDataList, TuiIcon, TuiLink, TuiScrollable, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TuiAvatar } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desktopui',
  standalone: true,
  imports: [
    RouterLink,
    TuiCell,
    TuiAvatar,
    TuiNavigation,
    TuiSidebar,
    TuiActiveZone,
    TuiButton,
    TuiIcon,
    TuiDataList,
    TuiTitle,
    TuiLink,
    FooterComponent,
    TuiAppearance,
    TuiSurface,
    TuiCardLarge,
    TuiCardMedium,
    TuiCell,
    TuiScrollable,
    ProjectsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './desktopui.component.html',
  styleUrl: './desktopui.component.less'
})
export class DesktopuiComponent {
  open=false
  toggle(open:boolean){
    this.open=open
  }
 
  
}
