import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {T} from '@angular/core/src/render3';
import {ContactsEditorComponent} from '../contacts-editor/contacts-editor.component';

@Injectable()
export class NavigationGuard implements CanDeactivate<ContactsEditorComponent> {

  canDeactivate(
    component: ContactsEditorComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if (component.pressedSave) {
      return true;
    }
    return window.confirm('Navigate away without saving?');
  }

}
