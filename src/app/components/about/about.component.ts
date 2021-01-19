import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  developer = {
    name: 'Hiskander',
    lastName: 'Aguillón',
    dateBirth: '26-11-1986',
    profession: 'Web Developer',
    // tslint:disable-next-line: max-line-length
    extract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
    skills: [
      {
        // tslint:disable-next-line: max-line-length
        img: 'assets/skills/html.png', name: 'HTML', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
      },
      {
        // tslint:disable-next-line: max-line-length
        img: 'assets/skills/css.png', name: 'CSS', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
      },
      {
        // tslint:disable-next-line: max-line-length
        img: 'assets/skills/js.png', name: 'JS', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
      },
      {
        // tslint:disable-next-line: max-line-length
        img: 'assets/skills/angular.png', name: 'Angular', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
      },
      {
        // tslint:disable-next-line: max-line-length
        img: 'assets/skills/github.png', name: 'Git', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam nemo ipsum aut error, doloribus numquam molestiae quis ipsam obcaecati voluptatem odio veritatis perferendis dolorem velit non ad illum aperiam?',
      }],
  };

  constructor() {
  }

  ngOnInit() {
  }

}
