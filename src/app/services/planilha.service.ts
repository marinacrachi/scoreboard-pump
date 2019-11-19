import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanilhaService {

  constructor(private http: HttpClient) { }

  public getAllFromSheet(sheet) {
    let sheetPath = `https://spreadsheets.google.com/feeds/worksheets/${sheet}/public/full?alt=json`
    return this.http.get(sheetPath)
  }

  public getAllFromTab(tab) {
    let tabPath = `https://spreadsheets.google.com/feeds/list/19JPfFqFUslDaua5UaSpu0Et89qJF_XTnMfGn_JGz-z8/${tab}/public/full?alt=json`
    return this.http.get(tabPath) 
  }
}
