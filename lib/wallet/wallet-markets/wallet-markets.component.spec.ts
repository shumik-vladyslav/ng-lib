import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMarketsComponent } from './wallet-markets.component';

describe('WalletMarketsComponent', () => {
  let component: WalletMarketsComponent;
  let fixture: ComponentFixture<WalletMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
