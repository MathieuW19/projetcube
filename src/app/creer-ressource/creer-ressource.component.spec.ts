import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerRessourceComponent } from './creer-ressource.component';

describe('CreerRessourceComponent', () => {
  let component: CreerRessourceComponent;
  let fixture: ComponentFixture<CreerRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
