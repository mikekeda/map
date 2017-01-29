export class User {
  fid: number = 0;
  access_token: number = 0;

  constructor(fid: number, access_token: number) {
    this.fid = fid;
    this.access_token = access_token;
  }
}
