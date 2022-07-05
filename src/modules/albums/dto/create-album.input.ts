export class CreateAlbumInput {
  name: string;
  released: number;
  artistsIds: [string];
  bandsIds: [string];
  tracksIds: [string];
  genresIds: [string];
  image: string;
}
