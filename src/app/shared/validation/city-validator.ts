import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validateCity(control: AbstractControl): ValidationErrors | null {
  const validCities: string[] = [
    'Graz', 'Hamburg', 'Berlin'
  ];

  if (control.value && !validCities.includes(control.value)) {
    return {
      city: {
        validCities,
        actualCity: control.value
      }
    };
  }

  return null;
}
