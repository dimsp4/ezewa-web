import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import { AuthExceptionInterceptor } from './authentication/interceptor/interceptor/auth-exception.interceptor';
import { AuthInterceptor } from './authentication/interceptor/interceptor/auth.interceptor';
import { LandingComponent } from './landing/landing.component';
import { GetStartedComponent } from './shared/components/get-started/get-started.component';
import { AppSideLoginComponent } from './authentication/login/login-vendor/login.component';
import { AppSideRegisterComponent } from './authentication/register/register-vendor/register.component';
import { RegisterCustomerComponent } from './authentication/register/register-customer/register-customer.component';
import { LoginGetStartedComponent } from './shared/components/login-get-started/login-get-started.component';
import { LoginCustomerComponent } from './authentication/login/login-customer/login-customer.component';
import { PagesCustomerModule } from './pages-customer/pages-customer.module';
import { PagesModule } from './pages-vendor/pages.module';
import { BuildingInterceptorInterceptor } from './pages-vendor/building/interceptor/building-interceptor.interceptor';
import { PriceFormatPipe } from './shared/pipe/price-format.pipe';
import { TransactionDialogComponent } from './shared/components/transaction-dialog/transaction-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    LandingComponent,
    GetStartedComponent,
    AppSideLoginComponent,
    LoginCustomerComponent,
    AppSideRegisterComponent,
    RegisterCustomerComponent,
    LoginGetStartedComponent,
    TransactionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PagesModule,
    PagesCustomerModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExceptionInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BuildingInterceptorInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TransactionInterceptor,
    //   multi: true,
    // },
  ]
})
export class AppModule {}
