import {CanDeactivate} from '@angular/router';
import {ContactsEditorComponent} from '../contacts-editor/contacts-editor.component';

export class NavigationGuard implements CanDeactivate {

  canDeactivate(component: ContactsEditorComponent): boolean {
    if(component.pressedSave){
      return true;
    }
    return window.confirm('Navigate away without saving?');
  }

}
