import { Component } from '@angular/core';
import { CustomerTS } from '../../types/tstypes/Customerts';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { of } from 'rxjs';
// import { Customer } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customerarray',
  // standalone: true,
  // imports: [],
  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.css']
})
export class CustomerarrayComponent {
  customers: CustomerTS[] = [
   new CustomerTS('Mohamed','vazain786@gmail.com','saburagani','zain','developer','1')
  ];
}
