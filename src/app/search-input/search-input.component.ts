import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map, Observable, pluck, switchMap } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { IUserList } from '../models/user-interface';
import { SearcGithubService } from '../searc-github.service';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements AfterViewInit {

  constructor(private searcGithubService: SearcGithubService) { }
  /**
  * Задержка перед запросом 500ms
  * Не отправляем повторно один и тот же запрос
  * Удаляем все пробелы в начале и в конце сроки
  * Если длина введеного значения в input меньше 3 символов запрос не отправляется
  * Если вводим пробелы запрос не отправляется
  */
 
  @ViewChild('username', { static: true }) input: ElementRef;

  public userList$: Observable<IUserList>;

  ngAfterViewInit(): void {
   this.userList$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
      pluck('target', 'value'),
      debounceTime(500),
      distinctUntilChanged(),
      map((searchStr: string) => searchStr.trim()),
      filter(searchStr => searchStr.length > 3),
      switchMap(username => this.searcGithubService.searchUsers(username)),
      )
  }
}
