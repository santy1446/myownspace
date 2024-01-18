import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectComponent } from './about-project.component';
import { UiAnimatedContainerModule } from 'mos-design-system';

describe('AboutProjectComponent', () => {
  let component: AboutProjectComponent;
  let fixture: ComponentFixture<AboutProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutProjectComponent ],
      imports: [
        UiAnimatedContainerModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class when scrollListener is called', () => {
    const e = new Event('scroll');
    component.scrollListener();
    window.dispatchEvent(e);
    spyOn(window, 'addEventListener').and.callThrough();
    expect(component).toBeTruthy();
  });

  it('should execute changeItemsPosition when widthListener', () => {
    const e = new CustomEvent('resize');
    const spy = spyOn(component, 'changeItemsPosition');
    component.scrollListener();
    window.dispatchEvent(e);
    spyOn(window, 'addEventListener').and.callThrough();
    expect(spy).toHaveBeenCalled();
    expect(component.changeItemsPosition).toHaveBeenCalled();
  });

  it('should execute changeItemsPosition when widthListener for a width screen < 800', () => {
    window.innerWidth = 700;
    const e = new CustomEvent('resize');
    const spy = spyOn(component, 'changeItemsPosition');
    component.scrollListener();
    window.dispatchEvent(e);
    spyOn(window, 'addEventListener').and.callThrough();
    expect(spy).toHaveBeenCalled();
    expect(component.changeItemsPosition).toHaveBeenCalled();
  });
});
