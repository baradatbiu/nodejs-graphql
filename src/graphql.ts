
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

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

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface IQuery {
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(getJWTInput: GetJWTInput): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface DeleteGenreResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface IMutation {
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    deleteGenre(id: string): Nullable<DeleteGenreResponse> | Promise<Nullable<DeleteGenreResponse>>;
    register(createUserInput: CreateUserInput): User | Promise<User>;
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

type Nullable<T> = T | null;
