
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface GetJWTInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
}

export interface JWT {
    jwt: string;
}

export interface IQuery {
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(getJWTInput: GetJWTInput): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    register(createUserInput: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
