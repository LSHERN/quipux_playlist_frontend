import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private messageService: MessageService,
    private translate: TranslateService) 
  { }

  showMessage(msg: string, severity: string): void {
    this.messageService.add({
      detail: this.translate.instant(msg),
      severity: severity
    });
  }
}
