import { CommonModule } from '@angular/common';
import { Component , ChangeDetectionStrategy, inject} from '@angular/core';
import { TuiAlertService, TuiAppearance, TuiButton, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiCardMedium, TuiHeader } from '@taiga-ui/layout';
import {TuiRepeatTimes} from '@taiga-ui/cdk'
import {TuiBadge, TuiFade} from '@taiga-ui/kit'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    TuiBadge,
    TuiSurface,
    TuiHeader,
    TuiCardLarge,
    TuiTitle,
    TuiCardMedium,
    CommonModule,
    TuiRepeatTimes,
    TuiFade,
    TuiAppearance,
    TuiButton,
    
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private readonly alerts=inject(TuiAlertService)
  project:any=[
    {
      name:"outube App",
      Stack:"Anglar",
      photo:"/favicon.ico",
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

  eCommerce():void{
    this.alerts.open('This project is still under development. It can only be previewed on a computer',{label:'Warning',appearance:'warning'}).subscribe();
  }

  vertex():void{
    this.alerts.open('This is my tech startup company',{label:'Hint',appearance:'success'}).subscribe();
  }

  todo():void{
    this.alerts.open('This is a simple todo app. Note that any inputs will be stored dynamically. Therefore if you refresh the website, the data will be lost',{label:'Hint',appearance:'warning'}).subscribe();
  }

  utube():void{
    this.alerts.open('This is a simple youtube search app. The maximum search results are set to 50. If you exeed the quota limit provided by YouTube, you may get a 500 error message',{label:'Hint',appearance:'warning'}).subscribe();
  }

  social():void{
    this.alerts.open('This is a simple reddit-like app. This is because it uses the concept of upvoting and downvoting.The posts are then sorted according to the number of votes',{label:'🎉🎉🎉🎉',appearance:'success'}).subscribe();
  }

  }

