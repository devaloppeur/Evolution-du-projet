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
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArtcleComponent } from './pages/articles/nouvel-artcle/nouvel-artcle.component';
import { PageClientComponent } from './pages/clientvrai/page-client/page-client.component';
import { NouveauClientComponent } from './pages/clientvrai/nouveau-client/nouveau-client.component';
import { PageCmdCltComponent } from './pages/cmd-client/page-cmd-clt/page-cmd-clt.component';
import { NouvelleCmdCltComponent } from './pages/cmd-client/nouvelle-cmd-clt/nouvelle-cmd-clt.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateurs/page-utilisateur/page-utilisateur.component';
import { NouvelUserComponent } from './pages/utilisateurs/nouvel-user/nouvel-user.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';

const routes: Routes = [
  {
    path:'',
    component:PageConnexionComponent
  },
  // {
  //   path: '',
  //   component: PageDashboardComponent
  // },

  {
    path: 'dashboard',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statisques',
        component: PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      },
      {
        path: 'nouvelarticle',
        component: NouvelArtcleComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'nouveauclient',
        component: NouveauClientComponent
      },
      {
        path: 'cmd',
        component: PageCmdCltComponent
      },
      {
        path: 'nouvellecommande',
        component: NouvelleCmdCltComponent
      },
      {
        path: 'categories',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategorieComponent
      },
      {
        path: 'user',
        component: PageUtilisateurComponent
      },
      {
        path: 'nouveluser',
        component: NouvelUserComponent
      },
      {
        path: 'profil',
        component: PageProfilComponent
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent

      }
      // {path:'', component:PageConnexionComponent},
    ]

  },
  {path: 'panier', component: PanierComponent},
  {path: 'menu', component: MenuComponent},
    {path: 'entrees',component : EntreesComponent},
    {path:'repas', component: PlatsComponent},
    {path:'boissons', component: BoissonComponent},
    {path: 'bon-commande', component:BonCommandeComponent},
    {path:'accueil',component: AccueilComponent},
   {path: 'parametre-compte',component : ParametreCompteComponent},
   {path: 'commande-client', component:CommandeClientComponent},


//   {path:'dashboard', component:DashboardComponent , canActivate :[AuthenticationGuard],
// children:[
//   {path:'ajout-employer', component:AjoutEmployeComponent},
//   {path:'ajout-produit', component:AjoutProduitComponent},
//   {path:'liste-employer', component:ListeEmployerComponent},
// ]},

  {path:'gestion-livreur', component:GestionLivreurComponent,canActivate :[AuthenticationGuard],
  children:[
    {path:'mes-livraisons', component:MesLivraisonsComponent},
    {path:'liste-commande', component: ListeCommandeComponent}
]},
  {path:'gestion-serveur', component:GestionServeurComponent,canActivate :[AuthenticationGuard],
  children:[
    {path: 'commande-prete', component:CommandePreteComponent},
]},



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
