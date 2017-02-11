export class User {
  fid: number = 0;
  access_token: string = '';

  constructor(fid: number = 0, access_token: string = '') {
    this.fid = fid;
    this.access_token = access_token;
  }
}
