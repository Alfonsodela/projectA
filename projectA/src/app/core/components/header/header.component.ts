import { Component, Input, OnInit } from '@angular/core';
import { HeaderInterface } from '../models/header.model';
import { faHome, faGear, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header!: HeaderInterface[];
  
  public homeIcon= faHome;
  public settingsIcon = faGear;
  public listIcon = faList;

  constructor() { }

  ngOnInit(): void {
  }

}
