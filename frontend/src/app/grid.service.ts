import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$: Observable<any> = this.sharedDataSubject.asObservable();
  constructor(private httpClient: HttpClient) {}

  getGridData(inputChar: any) {
    return this.httpClient.get(
      `http://localhost:3000/matrix?inputChar=${inputChar}`
    );
  }

  updateSharedData(data: any) {
    this.sharedDataSubject.next(data);
  }
}
