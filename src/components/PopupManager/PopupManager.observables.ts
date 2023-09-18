import { Subject } from 'rxjs';
import { Popup } from './PopupManager.types';

export const $popupObservable = new Subject<Popup | null>();
