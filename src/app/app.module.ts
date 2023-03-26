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
