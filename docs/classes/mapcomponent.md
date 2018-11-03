[irl-reporting-site](../README.md) > [MapComponent](../classes/mapcomponent.md)

# Class: MapComponent

## Hierarchy

**MapComponent**

## Implements

* `OnDestroy`
* `OnInit`

## Index

### Constructors

* [constructor](mapcomponent.md#markdown-header-constructor)

### Properties

* [currentRoute](mapcomponent.md#markdown-header-private-currentroute)
* [map](mapcomponent.md#markdown-header-private-map)
* [mapid](mapcomponent.md#markdown-header-mapid)
* [pathState](mapcomponent.md#markdown-header-private-pathstate)
* [subscription](mapcomponent.md#markdown-header-private-subscription)

### Methods

* [fetchData](mapcomponent.md#markdown-header-private-fetchdata)
* [ngOnDestroy](mapcomponent.md#markdown-header-ngondestroy)
* [ngOnInit](mapcomponent.md#markdown-header-ngoninit)

---

## Constructors

###  constructor

⊕ **new MapComponent**(currentRoute: *`ActivatedRoute`*): [MapComponent](mapcomponent.md)

*Defined in [app/components/map/map.component.ts:16](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L16)*

Class constructor for MapComponent

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| currentRoute | `ActivatedRoute` |  service that tracks current route. |

**Returns:** [MapComponent](mapcomponent.md)

___

## Properties

### `<Private>` currentRoute

**● currentRoute**: *`ActivatedRoute`*

*Defined in [app/components/map/map.component.ts:21](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L21)*

service that tracks current route.

___

### `<Private>` map

**● map**: *`Map`*

*Defined in [app/components/map/map.component.ts:13](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L13)*

___

###  mapid

**● mapid**: *`HTMLElement`*

*Defined in [app/components/map/map.component.ts:14](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L14)*

___

### `<Private>` pathState

**● pathState**: *`string`*

*Defined in [app/components/map/map.component.ts:15](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L15)*

___

### `<Private>` subscription

**● subscription**: *`Subscription`* =  null

*Defined in [app/components/map/map.component.ts:16](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L16)*

___

## Methods

### `<Private>` fetchData

▸ **fetchData**(): `void`

*Defined in [app/components/map/map.component.ts:53](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L53)*

Called to grab the geo data for map population.

**Returns:** `void`

___

###  ngOnDestroy

▸ **ngOnDestroy**(): `void`

*Defined in [app/components/map/map.component.ts:26](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L26)*

Angular life hook called just before component destruction. Used to unsubscribe from all subscriptions.

**Returns:** `void`

___

###  ngOnInit

▸ **ngOnInit**(): `void`

*Defined in [app/components/map/map.component.ts:35](https://github.com/WilliamRADFunk/irl-education-site/blob/c2e57e2/src/app/components/map/map.component.ts#L35)*

Angular life hook called when bound variables are resolved, but before anything else.

**Returns:** `void`

___

