import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/partials/headers/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { ObservableConceptComponent } from './observable-concept/observable-concept.component';
import { BorrowPageComponent } from './components/pages/borrow-page/borrow-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidateComponent } from './components/partials/input-validate/input-validate.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaltButtonComponent } from './components/partials/defalt-button/defalt-button.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgxPaginationModule } from 'ngx-pagination/public-api';



@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    BookPageComponent,
    ObservableConceptComponent,
    BorrowPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidateComponent,
    TextInputComponent,
    DefaltButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      newestOnTop: false,
      progressAnimation:'increasing'
    }),

    // NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
