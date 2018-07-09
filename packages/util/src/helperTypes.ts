/**
 * @version 0.0.0
 * @desc
 * Utility type to omit specific keys `U` from type `T`.
 */
export type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;
/**
 * @version 0.0.0
 * @desc
 * Strict version of `Omit`. This one does not accept `U`
 * including keys not included in `T`.
 */
export type OmitStrict<T, U extends keyof T> = Omit<T, U>;

/**
 * @version 0.0.0
 * @desc
 * Utility type to overwrite types of common properties of `T`
 * with the one of `U`.
 */
export type Overwrite<T, U> =
  & Omit<T, keyof U>
  & Pick<U, Extract<keyof T, keyof U>>
  ;
/**
 * @version 0.0.0
 * @desc
 * Strict version of `Overwrite`. This one does not accept `U`
 * with properties not included in `T`.
 */
export type OverwriteStrict<T extends Record<keyof U, any>, U> =
  Overwrite<T, U>;

/**
 * @version 0.0.0
 * @desc
 * Utility type to override types of common properties of
 * `T` with the one of `U` and append types of all other
 * properties of `U`.
 */
export type Override<T, U> =
  & Omit<T, keyof U>
  & U
  ;

/**
 * `OverrideStrict` type cannot make sense.
 */

/**
 * @version 0.0.0
 * @desc
 * Utility type to check whether `A` and `B` are of a same
 * type or not, and if they are of a same type, returns `T`,
 * or if not, returns `F`.
 * However, in TS, `readonly`ness does not affect to
 * substitutablity, `{ a: number }` and `{ readonly a: number }`
 * will be considered as a same type.
 */
export type EqualWithResult<A, B, T, F> =
  A extends B ?
    (
      B extends A ?
        T :
        F
    ) :
    F
  ;
/**
 * @version 0.0.0
 * @desc
 * Specific version of `EqualWithResult` that returns
 * `A` for equal case and returns `never` for
 * the other case.
 * `never` is selected because it is empty type.
 */
export type Equal<A, B> = EqualWithResult<A, B, A, never>;

/**
 * @version 0.0.0
 * @desc
 * Utility type to find keys in `T` whose type is `U`.
 */
export type FindKey<T, U> = {
  [K in keyof T]: EqualWithResult<T[K], U, K, never>;
}[keyof T];
/**
 * @version 0.0.0
 * @desc
 * Utility type to find properties in `T` whose type is `U`.
 */
export type Find<T, U> = Pick<T, FindKey<T, U>>;

/**
 * @version 0.0.0
 * @desc
 * Utility type to get keys in T whose type is not `U`.
 */
export type RemoveKey<T, U> = {
  [K in keyof T]: EqualWithResult<T[K], U, never, K>;
}[keyof T];
/**
 * @version 0.0.0
 * @desc
 * Utility type to remove properties in `T` whose type is `U`.
 */
export type Remove<T, U> = Pick<T, RemoveKey<T, U>>;
