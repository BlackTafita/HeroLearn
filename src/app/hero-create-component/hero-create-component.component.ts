import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from '../entities/hero';

import { HeroService } from '../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-create-component',
  templateUrl: './hero-create-component.component.html',
  styleUrls: ['./hero-create-component.component.css'],
  providers: [HeroService]
})
export class HeroCreateComponentComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }


}
