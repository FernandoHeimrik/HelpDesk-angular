import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable()
export class DialogService{

    confirm(message?:string){
        return new Promise (resolve =>{
            return resolve(window.confirm(message || 'Confirm ?'));
        })
    }
}