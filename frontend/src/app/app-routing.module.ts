import { BorrowPageComponent } from './components/pages/borrow-page/borrow-page.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { BookPageComponent } from './components/pages/book-page/book-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'book/:id', component:BookPageComponent},
  {path:'borrow-page', component:BorrowPageComponent},
  {path:'login-page', component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
