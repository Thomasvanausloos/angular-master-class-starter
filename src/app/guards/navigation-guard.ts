import {CanDeactivate} from '@angular/router';

export class NavigationGuard implements CanDeactivate {

  canDeactivate(component): boolean {

    return window.confirm('Navigate away without saving?');
  }

}
