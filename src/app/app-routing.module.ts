import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'articles', component: ArticleListComponent},
  {path:'about', component: AboutComponent},
  {path:'', component:ArticleListComponent}
]

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
    
  ],
  exports:[RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
