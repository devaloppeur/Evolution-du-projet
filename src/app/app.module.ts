import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PageLivreurComponent } from './/pages/livreur/page-livreur/page-livreur.component';
import { HeaderAdminComponent } from './pages/administrateur/layout/header-admin/header-admin.component';
import { ListeEmployerComponent } from './pages/administrateur/liste-employer/liste-employer.component';
import { GestionLivreurComponent } from './pages/administrateur/gestion-livreur/gestion-livreur.component';
import { GestionServeurComponent } from './pages/administrateur/gestion-serveur/gestion-serveur.component';
import { RouterModule } from '@angular/router';
import { HeaderLivreurComponent } from './pages/livreur/header-livreur/header-livreur.component';
import { PanierComponent } from './pages/administrateur/Panier/panier/panier.component';


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
    PageLivreurComponent,
    HeaderAdminComponent,
    ListeEmployerComponent,
    GestionLivreurComponent,
    GestionServeurComponent,
    HeaderLivreurComponent,
  
 
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
