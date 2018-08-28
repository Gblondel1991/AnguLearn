import { Injectable } from '@angular/core';

export interface Listener {
    notify(title:string) : void;
}

@Injectable()
export class DataService {
    constructor() {}

    subscribers: Listener[] = [] ;

    subscribe(subscriber: Listener) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber:Listener){
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === subscriber) {
                this.subscribers.splice(i,1);
                break;
            }
        }
    }

    notifyAllSubscribers(childTitle){
        for(let subscriber of this.subscribers){
            subscriber.notify(childTitle);
            console.log("subscriber: " + subscriber + " has been notified");
        }
    }
}