import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-standealone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standealone.component.html',
  styleUrls: ['./standealone.component.css']
})
export class StandealoneComponent {

}
