import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-gcp',
  templateUrl: './gcp.component.html',
  styleUrls: ['./gcp.component.less']
})
export class GcpComponent implements OnInit {

  loading = false; 
  gcpData =""
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.GCPPing().subscribe((res) => {
      this.gcpData = res.message;
    },(err:HttpErrorResponse)=> 
    {
      this.gcpData = err.toString();
    });
  }

}
