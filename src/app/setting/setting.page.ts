import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(
    private _translate: TranslateService,
    private _actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async selectLang() {
    const actionSheet = await this._actionSheetCtrl.create({
      header: this._translate.instant('settingPage.selectLanguage'),
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'ภาษาไทย',
          handler: () => {
            localStorage.setItem('lang', 'th');
            location.reload();
          }
        },
        {
          text: 'English',
          handler: () => {
            localStorage.setItem('lang', 'en');
            location.reload();
          }
        },
        {
          text: 'កម្ពុជា',
          handler: () => {
            localStorage.setItem('lang', 'kh');
            location.reload();
          }
        },
      ]
    });
    await actionSheet.present();
  }

}
