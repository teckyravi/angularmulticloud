import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.less']
})
export class AzureComponent implements OnInit {

  loading = false; 
  azureData =""
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.AzurePing().subscribe((res) => {
      this.azureData = res.message;
    },(err:HttpErrorResponse)=> 
    {
      this.azureData = err.toString();
    });
  }

}
