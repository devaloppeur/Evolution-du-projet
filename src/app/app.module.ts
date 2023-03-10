import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConnexionComponent } from './component/page_connexion/connexion/connexion.component';

import { MenuComponent } from './component/pages/client/menu/menu.component';

import { AccueilComponent } from './component/pages/client/accueil/accueil.component';
import { CompteComponent } from './component/pages/client/compte/compte.component';
import { ParametreCompteComponent } from './component/pages/client/parametre-compte/parametre-compte.component';
import { PanierComponent } from './component/pages/Panier/panier/panier.component';
import { BonCommandeComponent } from './component/bon-commande/bon-commande.component';
import { AjoutEmployeComponent } from './component/ajout-employe/ajout-employe.component';
import { AjoutProduitComponent } from './component/pages/produit/ajout-produit/ajout-produit.component';
import { AjoutAdminComponent } from './component/pages/administrateur/ajout-admin/ajout-admin.component';
import { BoissonComponent } from './component/pages/articles/boisson/boisson.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ListeCommandeComponent } from './component/liste-commande/liste-commande.component';
import { PageLivreurComponent } from './component/pages/livreur/page-livreur/page-livreur.component';
import { HeaderAdminComponent } from './component/pages/administrateur/layout/header-admin/header-admin.component';
import { ListeEmployerComponent } from './component/pages/administrateur/liste-employer/liste-employer.component';
import { GestionLivreurComponent } from './component/pages/administrateur/gestion-livreur/gestion-livreur.component';
import { GestionServeurComponent } from './component/pages/administrateur/gestion-serveur/gestion-serveur.component';
import { RouterModule } from '@angular/router';
import { HeaderLivreurComponent } from './component/pages/livreur/header-livreur/header-livreur.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { MenuTrueComponent } from './menu_true/menu_true.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
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
    PageLivreurComponent,
    HeaderAdminComponent,
    ListeEmployerComponent,
    GestionLivreurComponent,
    GestionServeurComponent,
    HeaderLivreurComponent,
    DashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    RouterModule.forRoot([
      {path:'ajout-administrateur', component:AjoutAdminComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
