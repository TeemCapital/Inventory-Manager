import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl='http://127.0.0.1:8000/api';
  constructor() { }
}
