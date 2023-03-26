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
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { NouvelUtilisateurComponent } from './pages/page_utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { MesLivraisonsComponent } from './pages/livreur/mes-livraisons/mes-livraisons.component';
import { UtilisateurComponent } from './pages/page_utilisateur/utilisateur/utilisateur.component';
import { ClientComponent } from './pages/page_client/client.component';
import { NouvelClientComponent } from './pages/page_client/nouvel-client/nouvel-client.component';
import { CommandePreteComponent } from './pages/serveur/commande-prete/commande-prete.component';
import { CommandeClientComponent } from './pages/client/commande-client/commande-client.component';
import { AuthenticationGuard } from './pages/administrateur/guards/authentication.guard';

const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'menu', component: MenuComponent},
    {path: 'entrees',component : EntreesComponent},
    {path:'repas', component: PlatsComponent},
    {path:'boissons', component: BoissonComponent},
    {path: 'bon-commande', component:BonCommandeComponent},
    {path:'accueil',component: AccueilComponent},
   {path: 'parametre-compte',component : ParametreCompteComponent},
   {path: 'commande-client', component:CommandeClientComponent},

 
  {path:'dashboard', component:DashboardComponent , canActivate :[AuthenticationGuard],
children:[
  {path:'ajout-employer', component:AjoutEmployeComponent},
  {path:'ajout-produit', component:AjoutProduitComponent},
  {path:'liste-employer', component:ListeEmployerComponent},
]},
 
  {path:'gestion-livreur', component:GestionLivreurComponent,canActivate :[AuthenticationGuard],
  children:[
    {path:'mes-livraisons', component:MesLivraisonsComponent},
    {path:'liste-commande', component: ListeCommandeComponent}
]},
  {path:'gestion-serveur', component:GestionServeurComponent,canActivate :[AuthenticationGuard],
  children:[
    {path: 'commande-prete', component:CommandePreteComponent},
]},
 
  {path:'connexion', component:PageConnexionComponent},
  {path:'', component:PageConnexionComponent},
  
  {path:'nouvel-utilisateur', component:NouvelUtilisateurComponent},
  {path:'utilisateur', component: UtilisateurComponent},
  {path:'client', component:ClientComponent},
  {path: 'nouveau-client', component:NouvelClientComponent},
 
 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
