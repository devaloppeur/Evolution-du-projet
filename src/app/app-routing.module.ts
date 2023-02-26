import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './component/pages/Panier/panier/panier.component';
import { MenuComponent } from './component/pages/client/menu/menu.component';
import { AccueilComponent } from './component/pages/client/accueil/accueil.component';
import { ParametreCompteComponent } from './component/pages/client/parametre-compte/parametre-compte.component';
import { EntreesComponent } from './component/pages/articles/entrees/entrees.component';
import { PlatsComponent } from './component/pages/articles/plats/plats.component';
import { BoissonComponent } from './component/pages/articles/boisson/boisson.component';
import { AjoutEmployeComponent } from './component/ajout-employe/ajout-employe.component';
import { ConnexionComponent } from './component/page_connexion/connexion/connexion.component';
import { BonCommandeComponent } from './component/bon-commande/bon-commande.component';
import { AjoutProduitComponent } from './component/pages/produit/ajout-produit/ajout-produit.component';
import { DashboardComponent } from './component/pages/administrateur/dashboard/dashboard.component';
import { ListeEmployerComponent } from './component/pages/administrateur/liste-employer/liste-employer.component';
import { GestionLivreurComponent } from './component/pages/administrateur/gestion-livreur/gestion-livreur.component';
import { GestionServeurComponent } from './component/pages/administrateur/gestion-serveur/gestion-serveur.component';

const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'menu', component: MenuComponent},
  {path:'accueil',component: AccueilComponent},
  {path: 'parametre-compte',component : ParametreCompteComponent},
  {path: 'entrees',component : EntreesComponent},
  {path:'repas', component: PlatsComponent},
  {path:'boissons', component: BoissonComponent},
  {path:'ajout-employer', component:AjoutEmployeComponent},
  {path:'connexion', component:ConnexionComponent},
  {path: 'bon-commande', component:BonCommandeComponent},
  {path: 'ajout-employer' , component:AjoutEmployeComponent},
  {path:'ajout-produit', component:AjoutProduitComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'liste-employer', component:ListeEmployerComponent},
  {path:'gestion-livreur', component:GestionLivreurComponent},
  {path:'gestion-serveur', component:GestionServeurComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
