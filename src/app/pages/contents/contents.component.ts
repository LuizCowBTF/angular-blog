import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  @Input() photoCard: string = "";
  @Input() contentTitle: string = "";
  @Input() contentDescription: string = "";
  private id: string |  null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesComponents(this.id)
  }

  setValuesComponents(id: string | null): void {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCard = result.photoCard

  }
}
