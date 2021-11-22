import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  static checkedInputString(control: AbstractControl): ValidationErrors | null {
    const users = ['admin', 'manager'];
    return users.includes(control.value) ? { validateString: true } : null;
  }

  static comparePassword(control: AbstractControl): ValidationErrors | null {
    const v = control.value;
    return JSON.stringify(v.password) !== JSON.stringify(v.confirmPassword)
      ? { comparePassword: true }
      : null;
  }

  static minLength(control: AbstractControl): ValidationErrors | null {
    const v = control.value;
    return v.password.length < 6 ? { minLength: true } : null;
  }
}
