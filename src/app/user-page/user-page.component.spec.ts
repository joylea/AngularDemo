import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { UserPageComponent } from './user-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserFilterPipe } from '../user-filter.pipe';

describe('UserPageComponent', () => {
  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ UserPageComponent,
       UserFilterPipe
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('number should equal', function () {
    expect(component.isNumberValid(123, 123)).toBeTruthy();
  });

  it('number should not equal', function () {
    expect(component.isNumberValid(123, 111)).toBeFalsy();
  });
});
