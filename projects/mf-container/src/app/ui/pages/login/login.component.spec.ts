import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CognitoUserGateway } from '../../../domain/models/cognito-user/gateway/cognito-user.gateway';
import { UiAnimatedContainerModule, UiLoaderModule, UiLoginModule, UiModalModule, UiToastModule } from 'mos-design-system';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UiLoaderModule,
        UiToastModule,
        UiAnimatedContainerModule,
        ComponentsModule,
        UiLoginModule,
        UiModalModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ LoginComponent ],
      providers: [
        CognitoUserGateway
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return formated data in logIn case when prepareUserData is called', () => {
    const MOCK_LOGIN_FORM_DATA = {
      
    }
  });
});
