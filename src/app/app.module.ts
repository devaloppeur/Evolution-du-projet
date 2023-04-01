import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { AccueilComponent } from './pages/client/accueil/accueil.component';
import { CompteComponent } from './pages/client/compte/compte.component';
import { ParametreCompteComponent } from './pages/client/parametre-compte/parametre-compte.component';
import { BonCommandeComponent } from './component/bon-commande/bon-commande.component';
import { AjoutEmployeComponent } from './component/ajout-employe/ajout-employe.component';
import { AjoutProduitComponent } from './component/ajout-produit/ajout-produit.component';
import { AjoutAdminComponent } from './pages/administrateur/ajout-admin/ajout-admin.component';
import { BoissonComponent } from './pages/produits/boisson/boisson.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ListeCommandeComponent } from './component/liste-commande/liste-commande.component';
import { HeaderAdminComponent } from './pages/administrateur/layout/header-admin/header-admin.component';
import { ListeEmployerComponent } from './pages/administrateur/liste-employer/liste-employer.component';
import { GestionLivreurComponent } from './pages/administrateur/gestion-livreur/gestion-livreur.component';
import { GestionServeurComponent } from './pages/administrateur/gestion-serveur/gestion-serveur.component';
import { RouterModule } from '@angular/router';
import { PanierComponent } from './pages/administrateur/Panier/panier/panier.component';
import { UtilisateurComponent } from './pages/page_utilisateur/utilisateur/utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/page_utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { NouvelUserComponent } from './pages/utilisateurs/nouvel-user/nouvel-user.component';
import { MesLivraisonsComponent } from './pages/livreur/mes-livraisons/mes-livraisons.component';

import { ClientComponent } from './pages/page_client/client.component';
import { NouvelClientComponent } from './pages/page_client/nouvel-client/nouvel-client.component';
import { LivreurComponent } from './pages/page_livreur/livreur/livreur.component';
import { NouveauLivreurComponent } from './pages/page_livreur/nouveau-livreur/nouveau-livreur.component';
import { ServeurComponent } from './pages/page_serveur/serveur/serveur.component';
import { NouveauServeurComponent } from './pages/page_serveur/nouveau-serveur/nouveau-serveur.component';

import { ListeCommandeServeurComponent } from './pages/serveur/liste-commande-serveur/liste-commande-serveur.component';
import { CommandePreteComponent } from './pages/serveur/commande-prete/commande-prete.component';
import { CommandeClientComponent } from './pages/client/commande-client/commande-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MenuVraiComponent } from './component/menu-vrai/menu-vrai.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { SearchBarComponent } from './component/layout/search-bar/search-bar.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './component/detail-article/detail-article.component';
import { NouvelArtcleComponent } from './pages/articles/nouvel-artcle/nouvel-artcle.component';
import { DetailClientComponent } from './component/detail-client/detail-client.component';
import { PageClientComponent } from './pages/clientvrai/page-client/page-client.component';
import { NouveauClientComponent } from './pages/clientvrai/nouveau-client/nouveau-client.component';
import { DetailCmdCltComponent } from './component/detail-cmd-clt/detail-cmd-clt.component';
import { DetailCmdComponent } from './component/detail-cmd/detail-cmd.component';
import { PageCmdCltComponent } from './pages/cmd-client/page-cmd-clt/page-cmd-clt.component';
import { BouttonActionComponent } from './component/boutton-action/boutton-action.component';
import { NouvelleCmdCltComponent } from './pages/cmd-client/nouvelle-cmd-clt/nouvelle-cmd-clt.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateurs/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './component/detail-utilisateur/detail-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';


// import { MenuTrueComponent } from './menu_true/menu_true.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompteComponent,
    MenuComponent,
    AccueilComponent,
    CompteComponent,
    ParametreCompteComponent,
    PanierComponent,
    BonCommandeComponent,
    AjoutEmployeComponent,
    AjoutProduitComponent,
    AjoutAdminComponent,
    BoissonComponent,
    FooterComponent,
    ListeCommandeComponent,

    ListeEmployerComponent,
    GestionLivreurComponent,
    GestionServeurComponent,

    PageConnexionComponent,
    UtilisateurComponent,
    NouvelUtilisateurComponent,
    NouvelUserComponent,
    MesLivraisonsComponent,

    ClientComponent,
    NouvelClientComponent,
    LivreurComponent,
    NouveauLivreurComponent,
    ServeurComponent,
    NouveauServeurComponent,

    ListeCommandeServeurComponent,
    CommandePreteComponent,
    CommandeClientComponent,
    PageDashboardComponent,
    MenuVraiComponent,
    PageStatistiquesComponent,
    SearchBarComponent,
    PageArticleComponent,
    DetailArticleComponent,
    NouvelArtcleComponent,
    DetailClientComponent,
    PageClientComponent,
    NouveauClientComponent,
    DetailCmdCltComponent,
    DetailCmdComponent,
    PageCmdCltComponent,
    BouttonActionComponent,
    NouvelleCmdCltComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
        RouterModule.forRoot([
      {path:'ajout-administrateur/', component:AjoutAdminComponent},
      {path:'liste-commande', component: ListeCommandeComponent},
      {path:'connexion', component:PageConnexionComponent},
      {path:'nouvel-utilisateur', component:NouvelUtilisateurComponent},
      {path:'mes-livraisons', component:MesLivraisonsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
