import { Component } from '@angular/core';
import { FooterInterface } from './core/components/models/footer.model';
import { HeaderInterface } from './core/components/models/header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectA';

  public header: HeaderInterface[] = [
    {
      icon: "homeIcon",
      name: "home",
      link: "/home"
    },
    {
      icon: "settingsIcon",
      name: "products",
      link: "/products"
    },
    {
      icon: "listIcon",
      name: "settings",
      link: "/form"
    }
  ]

  public footer: FooterInterface[] = [
    {
      name: "Twitter",
      link: "https://twitter.com/home"
    },
    {
      name: "Facebook",
      link: "www.facebook.com"
    },
    {
      name: "Instagram",
      link: "www.instagram.com"
    },
    {
      name: "Tik Tok",
      link: "www.tiktok.com"
    }
  ]
}
