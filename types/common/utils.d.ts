/**
 * @ignore
 */
export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
/**
 * @ignore
 */
export type Omit<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;
