import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
import { RegistryComponent } from './registry/registry.component';



const appRoutes: Routes = [
	
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'products', component : ProductsComponent},
	{ path: 'register', component : RegisterComponent},
	{ path : 'create', component: CreateComponent},
	{ path : 'registry', component: RegistryComponent}
	

	
];

export const appRoutingProviders: any[]	= [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);