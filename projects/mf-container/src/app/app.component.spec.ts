import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CognitoUserGateway } from './domain/models/cognito-user/gateway/cognito-user.gateway';
import { MockCognitoUserGateway } from './mocks/gateways.mock';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: CognitoUserGateway,
          useClass: MockCognitoUserGateway
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should navigate when getLinkSelected is called', () => {
    const SPY_NAVIGATE = spyOn(app['_router'], 'navigate');
    const MOCK_PARAMETER = {type: "link", route: "route"};
    app.getLinkSelected(MOCK_PARAMETER);
    expect(SPY_NAVIGATE).toHaveBeenCalled();
  });

  it('should navigate when clickHeaderElementSelected is called', () => {
    const SPY_NAVIGATE = spyOn(app['_router'], 'navigate');
    const MOCK_PARAMETER = {type: "link", route: "route"};
    app.clickHeaderElementSelected(MOCK_PARAMETER);
    expect(SPY_NAVIGATE).toHaveBeenCalled();
  });

  it('should signOut when clickHeaderElementSelected is called', () => {
    const SPY_NAVIGATE = spyOn(app, 'signOut');
    const MOCK_PARAMETER = {type: "action", route: "route"};
    app.clickHeaderElementSelected(MOCK_PARAMETER);
    expect(SPY_NAVIGATE).toHaveBeenCalled();
  });

  it('should navigate when signOut is called', () => {
    const SPY_NAVIGATE = spyOn(app["_router"], 'navigate');
    const SPY_SERVICE = spyOn(app["_signoutUseCase"], 'signOut').and.returnValue(of(true));
    app.signOut();
    expect(SPY_NAVIGATE).toHaveBeenCalled();
    expect(SPY_SERVICE).toHaveBeenCalled();
  });
});
