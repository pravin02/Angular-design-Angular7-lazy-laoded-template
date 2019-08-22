import { Injectable } from "@angular/core";
import { Menu } from '../../models/menu';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class FavouriteMenuService {

    private favouriteMenuAddedEvent = new Subject<Menu>();
    public favouriteMenuEvent$ : Observable<Menu> = this.favouriteMenuAddedEvent.asObservable();    

    addToFavourite(menu: Menu) {
        this.favouriteMenuAddedEvent.next(menu);
    }
}