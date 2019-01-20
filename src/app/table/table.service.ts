import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const c = {
    "characters": [
    {
        "id": "1",
        "name": "Peter Dinklage",
        "age": "45"
    },
    {
        "id": "2",
        "name": "Lina Heady",
        "age": "43"
    },
    {
        "id": "3",
        "name": "Emilia Clarke",
        "age": "30"
    },
    {
        "id": "4",
        "name": "Kit Harrington",
        "age": "30"
    },
    {
        "id": "5",
        "name": "Sean Bean",
        "age": "50"
    }]
}

@Injectable()
export class TableService {
    constructor( private http: HttpClient) { }
    url = 'http://localhost:4000';
  
    getCharacters(){
       // return 
        //this 
              // .http
              // .get('${this.url}/characters');
              return c;
    }
}