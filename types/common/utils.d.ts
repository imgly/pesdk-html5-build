/**
 * @ignore
 */
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
/**
 * @ignore
 */
export declare type Omit<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;
