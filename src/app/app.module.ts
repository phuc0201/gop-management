import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/** config ng-zorro-antd i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  theme: {
    primaryColor: '#00b14f'
  }
};

const plugins = [

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    provideNzI18n(en_US)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

