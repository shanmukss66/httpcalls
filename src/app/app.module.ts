import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';



 
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { ChildpostComponent} from './all-posts/childpost/childpost.component';
import { UserResolverService } from './services/UserResolver.service';



const appRoutes:Routes=[
  {path:'allposts',component:AllPostsComponent},
  {path:'childpost/:id',component:ChildpostComponent , resolve:{users: UserResolverService}},
  {
    path: 'lazy',
    loadChildren: () => import('./lazyloadingmodule/lazyloadingmodule.module').then(m => m.LazyloadingmoduleModule)
  }]
@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
   ChildpostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
