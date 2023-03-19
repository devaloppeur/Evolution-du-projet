import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './pages/administrateur/Panier/panier/panier.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { AccueilComponent } from './pages/client/accueil/accueil.component';
import { ParametreCompteComponent } from './pages/client/parametre-compte/parametre-compte.component';
import { EntreesComponent } from './pages/produits/entrees/entrees.component';
import { PlatsComponent } from './pages/produits/plats/plats.component';
import { BoissonComponent } from './pages/produits/boisson/boisson.component';
import { AjoutEmployeComponent } from './component/ajout-employe/ajout-employe.component';
import { BonCommandeComponent } from './component/bon-commande/bon-commande.component';
import { AjoutProduitComponent } from './component/ajout-produit/ajout-produit.component';
import { DashboardComponent } from './pages/administrateur/controle/controle.component';
import { ListeEmployerComponent } from './pages/administrateur/liste-employer/liste-employer.component';
import { GestionLivreurComponent } from './pages/administrateur/gestion-livreur/gestion-livreur.component';
import { GestionServeurComponent } from './pages/administrateur/gestion-serveur/gestion-serveur.component';
import { ListeCommandeComponent } from './component/liste-commande/liste-commande.component';

const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'menu', component: MenuComponent},
  {path:'accueil',component: AccueilComponent},
  {path: 'parametre-compte',component : ParametreCompteComponent},
  {path: 'entrees',component : EntreesComponent},
  {path:'repas', component: PlatsComponent},
  {path:'boissons', component: BoissonComponent},
  {path:'ajout-employer', component:AjoutEmployeComponent},
  {path: 'bon-commande', component:BonCommandeComponent},
  {path: 'ajout-employer' , component:AjoutEmployeComponent},
  {path:'ajout-produit', component:AjoutProduitComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'liste-employer', component:ListeEmployerComponent},
  {path:'gestion-livreur', component:GestionLivreurComponent},
  {path:'gestion-serveur', component:GestionServeurComponent},
  {path:'liste-commande', component: ListeCommandeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
