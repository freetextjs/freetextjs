# @freetextjs/util
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Util package of @freetextjs

## Helper types
This package includes following helper types.

#### Omit
```typescript
type Omit<T, U>
```
Utility type to omit specific keys `U` from type `T`.

#### OmitStrict
``` typescript
type OmitStrict<T, U extends keyof T>
```
Strict version of `Omit`. This one does not accept `U` including keys not included in `T`.

#### Overwrite
``` typescript
type Overwrite<T, U>
```
Utility type to overwrite types of common properties of `T` with the one of `U`.

#### OverwriteStrict
``` typescript
type OverwriteStrict<T extends Record<keyof U, any>, U>
```
Strict version of `Overwrite`. This one does not accept `U` with properties not included in `T`.

#### Override
``` typescript
type Override<T, U>
```
Utility type to override types of common properties of `T` with the one of `U` and append types of all other properties of `U`.

#### EqualWithResult
``` typescript
type EqualWithResult<A, B, T, F>
```
Utility type to check whether `A` and `B` are of a same type or not, and if they are of a same type, returns `T`, or if not, returns `F`.

However, in TS, `readonly`ness does not affect to substitutablity, `{ a: number }` and `{ readonly a: number }` will be considered as a same type.

#### Equal
``` typescript
type Equal<A, B>
```
Specific version of `EqualWithResult` that returns `A` for equal case and returns `never` for the other case.

`never` is selected because it is empty type.

#### FindKey
``` typescript
type FindKey<T, U>
```
Utility type to find keys in `T` whose type is `U`.

#### Find
``` typescript
type Find<T, U>
```
Utility type to find properties in `T` whose type is `U`.

#### RemoveKey
``` typescript
type RemoveKey<T, U>
```
Utility type to get keys in T whose type is not `U`.

#### Remove
``` typescript
type Remove<T, U>
```
Utility type to remove properties in `T` whose type is `U`.
