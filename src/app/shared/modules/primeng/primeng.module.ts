import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from "primeng/autocomplete";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MultiSelectModule } from "primeng/multiselect";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { TableModule } from "primeng/table";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';

import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ProgressSpinnerModule,
    AutoCompleteModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    ProgressBarModule,
    RadioButtonModule,
    TableModule,
    ToastModule,
    DividerModule
    ],
  providers:[
    ConfirmationService,
  ]
})
export class PrimeNgModule { }
