import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Win10Login } from '../win10-login/win10login';

@Component({
  selector: 'app-extras',
  imports: [RouterLink, Win10Login],
  templateUrl: './extras.html',
  styleUrl: './extras.css'
})
export class Extras {}
