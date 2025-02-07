import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',  // Powiązanie z plikiem HTML
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  weight: number;  // Waga
  height: number;  // Wzrost
  bmi: number;     // Wynik BMI

  constructor(private http: HttpClient) {}

  // Funkcja obliczająca BMI i wysyłająca dane do backendu
  calculateBmi() {
    const payload = {
      weight: this.weight,
      height: this.height
    };

    this.http.post<{ bmi: number }>('http://localhost:3000/calculate-bmi', payload)
      .subscribe(response => {
        this.bmi = response.bmi;
      });
  }
}
