import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductComponent } from './../../shared/product/product.component';
import { FilterProductsPipe } from 'src/app/shared/pipes/filter-products.pipe';
import { ProductsService } from 'src/app/core/services/products.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsServiceStub } from 'src/app/core/services/product.service.stub';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  // let productsService: ProductsService;
  // let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductsComponent,
        ProductComponent,
        FilterProductsPipe
      ],
      providers: [

        {
          ProductsService,
          ActivatedRoute
        }
                
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // productsService = TestBed.inject(ProductsService);
    // router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should navigate to edit form on edit button click', () => {
    // const editButton = fixture.debugElement.queryAll(By.css('.product__edit-button'))
    // const navigateSpy = spyOn(router, 'navigate');
    // editButton.nativeElement.click();
    // expect(navigateSpy).toHaveBeenCalledOnceWith(['/edit-form'])
  // });
});
