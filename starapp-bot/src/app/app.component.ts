import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Ensure CommonModule is imported
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule], // ✅ Add HttpClientModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  botMessage: string | undefined;
  progress: string | undefined;

  constructor(private http: HttpClient) {}

  getBotMessage() {
    this.http.get<{ message: string }>('http://localhost:3000')
      .subscribe(response => this.botMessage = response.message);
  }

  getProgress() {
    this.http.get<{ message: string }>('http://localhost:3000/progress')
      .subscribe(response => this.progress = response.message);
  }
}
