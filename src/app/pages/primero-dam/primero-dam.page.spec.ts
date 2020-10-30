import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeroDAMPage } from './primero-dam.page';

describe('PrimeroDAMPage', () => {
  let component: PrimeroDAMPage;
  let fixture: ComponentFixture<PrimeroDAMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeroDAMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeroDAMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
