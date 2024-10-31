import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShikimickiComponent } from './shikimicki.component';

describe('LibComponent', () => {
  let component: ShikimickiComponent;
  let fixture: ComponentFixture<ShikimickiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShikimickiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShikimickiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
