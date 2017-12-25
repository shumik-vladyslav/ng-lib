import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletWalletsComponent } from './wallet-wallets.component';

describe('WalletWalletsComponent', () => {
  let component: WalletWalletsComponent;
  let fixture: ComponentFixture<WalletWalletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletWalletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
