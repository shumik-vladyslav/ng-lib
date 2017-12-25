import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WalletSettingsComponent} from "./wallet-settings/wallet-settings.component";
import {WalletHistoryComponent} from "./wallet-history/wallet-history.component";
import {WalletOrdersComponent} from "./wallet-orders/wallet-orders.component";
import {WalletMarketsComponent} from "./wallet-markets/wallet-markets.component";
import {WalletWalletsComponent} from "./wallet-wallets/wallet-wallets.component";
import {WalletComponent} from "./wallet.component";
import {AppRoutingModule} from "../app/app-routing.module";
import {WalletNavComponent} from "./wallet-nav/wallet-nav.component";

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
  WalletNavComponent,
  WalletComponent,
  WalletWalletsComponent,
  WalletMarketsComponent,
  WalletOrdersComponent,
  WalletHistoryComponent,
  WalletSettingsComponent,
];

const NB_MODULES = [
  NgbModule,
  AppRoutingModule,

];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS],
})
export class WalletModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: WalletModule,
      providers: [],
    };
  }
}
