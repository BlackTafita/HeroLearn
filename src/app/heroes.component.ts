/** Modules **/
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './entities/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]

})

export class HeroesComponent  implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  /** Methods **/
  /**
   *
   * @param heroService
   * @param router
   */
  constructor(
      private heroService: HeroService,
      private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  /**
   * Select hero
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
