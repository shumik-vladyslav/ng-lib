import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wallet-nav',
  templateUrl: './wallet-nav.component.html',
  styleUrls: ['./wallet-nav.component.scss']
})
export class WalletNavComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToDetails(abr) {
    this.router.navigate(['/wallet/' + abr]);
  }

}
