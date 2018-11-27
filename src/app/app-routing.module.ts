import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  // { path: 'investSure', loadChildren: 'http://localhost:4200/insurance/RequestId/:RequestId/:Broker'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
