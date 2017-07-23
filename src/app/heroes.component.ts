/** Modules **/
import {Component, OnInit} from '@angular/core';
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
   * Set Heroes from HeroService
   * @param heroService
   */
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  /**
   * Select hero
   * @param hero
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
