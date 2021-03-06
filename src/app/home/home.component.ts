import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: any;
  employeeList;
  constructor(private route: ActivatedRoute) { 
    this.employeeList = this.route.snapshot.data.employee.data;
    console.log(this.employeeList);
  }

  ngOnInit() {
  }
  onsubmit() {
    if (this.name != '')
      localStorage.setItem('name', this.name);
    else
      alert('Enter Name');
  }
  onclear(){
    localStorage.setItem('name', '');
  }

}
