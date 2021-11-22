import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from './validator.service';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss'],
})
export class CustomValidatorComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      // formControl: [giá trị, syncValidators, asyncValidators]
      userName: ['', [ValidatorService.checkedInputString], []],
      pw: this.formBuilder.group(
        {
          password: ['', [ValidatorService.checkedInputString]],
          confirmPassword: [''],
        },
        {
          // syncValidators ==> đồng bộ
          validators: [ValidatorService.comparePassword],
          //asyncValidators ==> bất đồng bộ
          asyncValidators: [],
        }
      ),
    });
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.formRegister);
  }
}
