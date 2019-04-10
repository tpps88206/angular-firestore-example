import { Component } from '@angular/core';
import {AppConfig} from '../../../shared/config/app.config';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span>
      Template from
      <b><a href="https://akveo.com" target="_blank">ngx-admin</a></b>
    </span>
    <span class="created-by">Created with ♥ by
      <b><a href="https://github.com/tpps88206" target="_blank">Sheng Chuan Hsu</a></b> 2019
    </span>
    <span>
      Version
      <b>{{ version }}</b>
    </span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
  version = AppConfig.version;
}