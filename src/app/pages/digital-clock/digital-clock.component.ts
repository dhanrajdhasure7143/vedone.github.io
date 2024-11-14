import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  @HostBinding('class.dark') isDarkMode = false;
  hourTransform = '';
  minuteTransform = '';
  secondTransform = '';
  timeDisplay = '';
  dateDisplay = '';
  darkModeText = 'Dark mode';

  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  ngOnInit() {
    this.setTime();
    setInterval(() => this.setTime(), 1000);
  }

  setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    this.hourTransform = `translate(-50%, -100%) rotate(${this.scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    this.minuteTransform = `translate(-50%, -100%) rotate(${this.scale(minutes, 0, 60, 0, 360)}deg)`;
    this.secondTransform = `translate(-50%, -100%) rotate(${this.scale(seconds, 0, 60, 0, 360)}deg)`;

    this.timeDisplay = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    this.dateDisplay = `${this.days[day]}, ${this.months[month]} <span class="circle">${date}</span>`;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeText = this.isDarkMode ? 'Light mode' : 'Dark mode';
  }

  scale(num: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
}
