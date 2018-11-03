[irl-reporting-site](../README.md) > [AppComponent](../classes/appcomponent.md)

# Class: AppComponent

## Hierarchy

**AppComponent**

## Index

### Properties

* [showState](appcomponent.md#markdown-header-showstate)

### Methods

* [mobileCollapseState](appcomponent.md#markdown-header-mobilecollapsestate)
* [toggleCollapseState](appcomponent.md#markdown-header-togglecollapsestate)

---

## Properties

###  showState

**● showState**: *`boolean`*

*Defined in [app/app.component.ts:12](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/app.component.ts#L12)*

Tracks whether to collapse the menu toggle or not

___

## Methods

###  mobileCollapseState

▸ **mobileCollapseState**(): `void`

*Defined in [app/app.component.ts:17](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/app.component.ts#L17)*

Solves the collapse of the mobile nav dropdown without illegally accessing the html dom references.

**Returns:** `void`

___

###  toggleCollapseState

▸ **toggleCollapseState**(): `void`

*Defined in [app/app.component.ts:24](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/app.component.ts#L24)*

Keeps track of collapsed state in order to apply show: false when user selects option form mobile dropdown van menu.

**Returns:** `void`

___

