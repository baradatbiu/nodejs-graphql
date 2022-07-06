
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface UpdateAlbumInput {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface CreateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface CreateMemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface CreateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<CreateMemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateBandInput {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<CreateMemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

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

export interface CreateTrackInput {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateTrackInput {
    id: string;
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
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

export interface Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface DeleteAlbumResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface IQuery {
    albums(): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(): Nullable<Band>[] | Promise<Nullable<Band>[]>;
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    favourites(): Nullable<Favourite>[] | Promise<Nullable<Favourite>[]>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(getJWTInput: GetJWTInput): Nullable<JWT> | Promise<Nullable<JWT>>;
}

export interface IMutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    updateAlbum(updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;
    deleteAlbum(id: string): Nullable<DeleteAlbumResponse> | Promise<Nullable<DeleteAlbumResponse>>;
    createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;
    deleteArtist(id: string): Nullable<DeleteArtistResponse> | Promise<Nullable<DeleteArtistResponse>>;
    createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;
    deleteBand(id: string): Nullable<DeleteBandResponse> | Promise<Nullable<DeleteBandResponse>>;
    addTrackToFavourites(addFavouriteInput: string): Favourite | Promise<Favourite>;
    addBandToFavourites(addFavouriteInput: string): Favourite | Promise<Favourite>;
    addArtistToFavourites(addFavouriteInput: string): Favourite | Promise<Favourite>;
    addGenreToFavourites(addFavouriteInput: string): Favourite | Promise<Favourite>;
    createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;
    deleteGenre(id: string): Nullable<DeleteGenreResponse> | Promise<Nullable<DeleteGenreResponse>>;
    createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;
    deleteTrack(id: string): Nullable<DeleteTrackResponse> | Promise<Nullable<DeleteTrackResponse>>;
    register(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface DeleteArtistResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Member {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface DeleteBandResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Favourite {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Band>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface DeleteGenreResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface DeleteTrackResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
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
