import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditingComponent } from './editing.component';
import { IgxGridModule, IgxDatePickerModule, IgxCheckboxModule } from 'igniteui-angular';

describe('EditingComponent', () => {
  let component: EditingComponent;
  let fixture: ComponentFixture<EditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingComponent ],
      imports: [ FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
