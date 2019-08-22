import { Injectable } from "@angular/core";
import { Menu } from '../../models/menu';

@Injectable()
export class MenuService {
    private menues: Menu[] = [];

    public getMenues(): Menu[] {
        this.menues.push({ label: 'Dashboard', link: './dashboard', icon: 'glyphicon glyphicon-home' });
        this.menues.push({
            label: 'Masters', link: null, icon: 'glyphicon glyphicon-fire',
            menues: [
                { label: 'Media/Land Owner', link: './masters/land-owner', icon: 'glyphicon glyphicon-book' },
                { label: 'Service Provider', link: './masters/service-provider', icon: 'glyphicon glyphicon-book' },
                { label: 'Contract', link: './masters/contract', icon: 'glyphicon glyphicon-book' },
                { label: 'Customer', link: './masters/customer', icon: 'glyphicon glyphicon-book' },
                { label: 'Employee', link: './masters/employee', icon: 'glyphicon glyphicon-book' }
            ]
        });
        this.menues.push({
            label: 'Settings', link: null, icon: 'fa fa-gears',
            menues: [
                { label: 'Company Profile', link: './profiles/company-profile', icon: 'fa fa-building' },
                { label: 'User Profile', link: './profiles/user-profile', icon: 'fa fa-user' },
                { label: 'Update Password', link: './profiles/update-password', icon: 'fa fa-lock' }
            ]
        });
        this.menues.push({ label: 'Log Out', link: '../auth/login', icon: 'fa fa-lock' });
        return this.menues;
    }

    public findMenu(menuname: string): Menu {
        return this.menues.filter(menu => {
            //console.log(menu.label, menuname, ' =M= ', menu.label == menuname);
            if (menu.label == menuname)
                return true;
            else if (!menu.menues)
                return false;
            else
                return menu.menues.filter(sm => {
                    //console.log(sm.label, menuname, ' =SM= ', sm.label == menuname);
                    return sm.label == menuname;
                }).length > 0

        })[0];
    }
}