import { AsyncPipe } from '@angular/common';
import { Component ,ChangeDetectionStrategy, inject} from '@angular/core';
import { TuiCopyProcessor } from '@taiga-ui/cdk';
import { TuiAlertService, TuiAppearance, tuiAppearance, TuiButton, TuiIcon, TuiLabel, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiBadge } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCardMedium, TuiCell, TuiHeader } from '@taiga-ui/layout';
import { ClipboardModule } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TuiCardLarge,
    TuiCardMedium,
    TuiButton,
    TuiIcon,
    TuiAppearance,
    TuiLabel,
    TuiBadge,
    TuiTitle,
    TuiHeader,
    TuiAvatar,
    TuiCell,
    TuiCopyProcessor,
    AsyncPipe,
    ClipboardModule,  
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less',
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{
    '(copy)':'onCopy($event)'
  }
})
export class ContactComponent {
  private readonly alerts=inject(TuiAlertService)
  email:any="mickyonyango1544@gmail.com"
  phone="+254701136880"
  processor:any="copy"
  protected onCopy(event: ClipboardEvent): void {
    this.alerts.open('Copied successfully',{label:'Alert',appearance:'success'}).subscribe();
}

copy():void{
  this.alerts.open('Email '+this.email+' copied',{label:'Alert',appearance:'success'}).subscribe();
}

tel():void{
  this.alerts.open('Phone  '+this.phone+' copied',{label:'Alert',appearance:'success'}).subscribe();
}

myMail:any=25
copyToClipboard(){
  navigator.clipboard
  .writeText(this.email.innerText)
  .then(()=>{
    this.alerts.open('Email '+this.email+' copied',{label:'Alert',appearance:'success'}).subscribe();
  })
  .catch((e)=>{
    this.alerts.open('Failed to copy',{label:'Alert',appearance:'warning'}).subscribe();
  })
}
}
