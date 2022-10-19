import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from "./token.guard";

import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";

import { NoteComponent } from "./note/note/note.component";
import { ZoneComponent } from "./zone/zone/zone.component";
import { HobbyComponent } from "./hobby/hobby/hobby.component";
import { CookComponent } from "./cook/cook/cook.component";
import { ReadingNoteComponent } from "./note/reading-note/reading-note.component";
import { MovieNoteComponent } from "./note/movie-note/movie-note.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'note', component: NoteComponent,children:[
        {path: 'read-note', component: ReadingNoteComponent},
        {path: 'movie-note', component: MovieNoteComponent},
      ]},
      {path: 'zone', component: ZoneComponent},
      {path: 'hobby', component: HobbyComponent},
      {path: 'cook', component: CookComponent},
    ],
    // 类可以实现的接口，作为决定是否可以激活路由的守卫。如果所有警卫都返回 true ，则导航继续。
    // 如果任何警卫返回 false ，则导航被取消。
    // 如果任何警卫返回 UrlTree ，则当前导航被取消，并开始对从警卫返回的 UrlTree 进行新的导航。
    // WFS
    canActivate: [TokenGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
