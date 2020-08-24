import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  // {
  //   path: 'patients',
  //   loadChildren: () => import('./features/patient/patient.module#PatientModule').then( m => m.FolderPageModule)
  // },
  // {
  //   path: 'episodes',
  //   loadChildren: './features/episode/episode.module#EpisodeModule'
  // },
  // {
  //   path: 'followups',
  //   loadChildren: './features/followup/followup.module#FollowupModule'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
