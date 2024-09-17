import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import {TuiRepeatTimes} from '@taiga-ui/cdk'
import {TuiFade} from '@taiga-ui/kit'
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TuiSurface,
    TuiHeader,
    TuiCardLarge,
    TuiTitle,
    TuiCardMedium,
    CommonModule,
    TuiRepeatTimes,
    TuiFade,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  projects:any=[
    {
      name:"Youtube App",
      Stack:"Anglar",
      photo:"photo",
      url:"url",
      desc:"desc"
    },
    {
      name:"Reddit clown",
      stack:"Angular",
      photo:"photo",
      url:"url",
      desc:"desc"
    },
    {
      name:"Inventory",
      stack:"Angular",
      photo:"photo",
      url:"url",
      desc:"desc"
    },
    {
      name:"Job board",
      stack:"Python",
      photo:"photo",
      url:"url",
      desc:"desc"
    },
    {
      name:"E-commerce",
      stack:"E-commerce",
      photo:"photo",
      url:"url",
      desc:"desc"
    },
    {
      name:"Portfolio",
      stack:"Angular",
      photo:"photo",
      url:"url",
      desc:"desc"
    }
  ]
  }

