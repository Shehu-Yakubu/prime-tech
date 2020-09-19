import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilteringComponent } from './filtering.component';
import { IgxGridModule, IgxDatePickerModule, IgxCheckboxModule } from 'igniteui-angular';

describe('FilteringComponent', () => {
  let component: FilteringComponent;
  let fixture: ComponentFixture<FilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteringComponent ],
      imports: [ FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
