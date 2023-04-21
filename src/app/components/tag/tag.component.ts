import { TagService } from './../../services/tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  public tags: any; // Tag[] = [];

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.carregarTags();
  }

  public carregarTags(): void {
    this.tagService.getTags()
      .subscribe(res => { //Depreciado - verificar nova forma.
        this.tags = res;
        console.log(this.tags);
      },
        error => {
          console.log('Erro ao retornar tags.', error);
        },
        () => {
          console.log('Terminou');
        }
      )
  }
}
