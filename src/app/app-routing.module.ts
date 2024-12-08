import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', loadChildren: () => import('./pages/tareas/tareas.module').then(m => m.TareasPageModule) },
  { path: 'nueva-tarea', loadChildren: () => import('./pages/nueva-tarea/nueva-tarea.module').then(m => m.NuevaTareaPageModule) },
  { path: 'detalle', loadChildren: () => import('./pages/detalle/detalle.module').then(m => m.DetallePageModule) },
  { path: 'detalle/:id', loadChildren: () => import('./pages/detalle/detalle.module').then(m => m.DetallePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
