import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrls: ['form-field-label-example.css'],
  standalone: true,
  imports: [
    MatSelectModule,
  ],
})
export class FormFieldLabelExample {
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */