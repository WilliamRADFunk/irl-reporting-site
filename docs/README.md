
#  irl-reporting-site

## Index

### Classes

* [AboutComponent](classes/aboutcomponent.md)
* [AppComponent](classes/appcomponent.md)
* [AppModule](classes/appmodule.md)
* [AppRoutingModule](classes/approutingmodule.md)
* [HomeComponent](classes/homecomponent.md)
* [MapComponent](classes/mapcomponent.md)
* [TimePanelComponent](classes/timepanelcomponent.md)

### Variables

* [appRoutes](#markdown-header-const-approutes)
* [context](#markdown-header-const-context)
* [require](#markdown-header-const-require)

### Object literals

* [environment](#markdown-header-object-literal-const-environment)

---

## Variables

### `<Const>` appRoutes

**● appRoutes**: *`Routes`* =  [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'home', children: [
    { path: '', redirectTo: 'today', pathMatch: 'full' },
    { path: 'today', component: HomeComponent, pathMatch: 'full' },
    { path: 'week', component: HomeComponent, pathMatch: 'full' },
    { path: 'month', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'today' }
  ]},
  { path: 'about', component: AboutComponent, pathMatch: 'full' }
]

*Defined in [app/app-routing.module.ts:7](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/app-routing.module.ts#L7)*

___

### `<Const>` context

**● context**: *`any`* =  require.context('./', true, /\.spec\.ts$/)

*Defined in [test.ts:18](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/test.ts#L18)*

___

### `<Const>` require

**● require**: *`any`*

*Defined in [test.ts:10](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/test.ts#L10)*

___

## Object literals

### `<Const>` environment

**environment**: *`object`*

*Defined in [environments/environment.prod.ts:1](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/environments/environment.prod.ts#L1)*
*Defined in [environments/environment.ts:6](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/environments/environment.ts#L6)*

####  production

**● production**: *`boolean`* = false

*Defined in [environments/environment.prod.ts:2](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/environments/environment.prod.ts#L2)*
*Defined in [environments/environment.ts:7](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/environments/environment.ts#L7)*

___

___

