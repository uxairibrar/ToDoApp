import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Data } from '@angular/router';

describe('SharedService', () => {
  let service: SharedService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(SharedService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  // Smoke test
  // Test the presence of a Service instance

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Now using HttpClientTestingModule, we'll test the get request witht he test data and then compare the reult
  it('can test HttpClient.get', () => {
    const testData: Data = {'id':'1','text': 'Test Data'};
  
    // Make an HTTP GET request
    httpClient.get<Data>('http://127.0.0.1:8000/todo/')
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );
  
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne({
      method: "GET",
      url: 'http://127.0.0.1:8000/todo/'
    });
   
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
  
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
  
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  //Test case 1
  // it('should add a todo', () => {
  //   const testData: Data = {'text': 'Test Data'};

  //   httpClient.post<Data>('http://127.0.0.1:8000/todo/',testData)

  //   // addEmploye should have made one request to POST employee
  //   // const req = httpTestingController.expectOne('http://127.0.0.1:8000/todo/');

  //   const req = httpTestingController.expectOne({
  //     method: "POST",
  //     url: 'http://127.0.0.1:8000/todo/',
  //     // data:testData
  //     description?:
  //   });

  //   expect(req.request.method).toEqual('POST');
  //   expect(req.request.body).toEqual(testData);

  //   // Expect server to return the employee after POST
  //   const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created', body: service });
  //   req.event(expectedResponse);
  // });
});

