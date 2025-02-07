import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <form (submit)="calculateBmi($event)">
        <label for="weight">Waga (kg):</label>
        <input type="number" id="weight" #weightInput required>

        <label for="height">Wzrost (cm):</label>
        <input type="number" id="height" #heightInput required>

        <button type="submit">Oblicz BMI</button>
      </form>

      <div [hidden]="bmi === null">
        <p>Twoje BMI: {{ bmi?.toFixed(2) }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bmi: number | null = null;

  calculateBmi(event: Event) {
    event.preventDefault();  // Zapobiega domyślnemu wysyłaniu formularza

    const form = event.target as HTMLFormElement;
    const weightInput = form.querySelector('#weight') as HTMLInputElement;
    const heightInput = form.querySelector('#height') as HTMLInputElement;

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      this.bmi = weight / (heightInMeters * heightInMeters);
    } else {
      this.bmi = null;  // Jeśli wagi lub wzrostu nie ma, ustawiamy bmi na null
    }
  }
}
