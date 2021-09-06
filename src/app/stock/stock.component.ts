import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.less']
})
export class StockComponent implements OnInit {

  loading = false; 
  stockData =""
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.StockPing().subscribe((res) => {
      this.stockData = res.message;
    },(err:HttpErrorResponse)=> 
    {
      this.stockData = err.toString();
    });
  }

}
