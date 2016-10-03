import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';



const appRoutes: Routes = [
	
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'products', component : ProductsComponent}
	

	
];

export const appRoutingProviders: any[]	= [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);