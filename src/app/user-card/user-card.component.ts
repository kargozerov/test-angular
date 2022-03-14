import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/user-interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() user: IUser;
  constructor() {}
}
