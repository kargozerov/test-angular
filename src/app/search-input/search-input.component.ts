import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserList } from '../models/user-interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  constructor() { }
  /**
  * Задержка перед запросом 500ms
  * Не отправляем повторно один и тот же запрос
  * Удаляем все пробелы в начале и в конце сроки
  * Если длина введеного значения в input меньше 3 символов запрос не отправляется
  * Если вводим пробелы запрос не отправляется
  */

  public userList$: Observable<IUserList>;

}
