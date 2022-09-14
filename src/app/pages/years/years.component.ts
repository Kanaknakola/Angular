import { Observable } from 'rxjs';
import { HttpService } from './../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  years: Observable<string[]>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.years = this.http.getYears();
  }
}
