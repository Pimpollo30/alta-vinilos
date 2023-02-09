import { Component, OnInit } from '@angular/core';
import { Vinilo } from 'src/app/models/vinilo';
import { ViniloService } from 'src/app/services/vinilo.service';

@Component({
  selector: 'app-listado-vinilos',
  templateUrl: './listado-vinilos.component.html',
  styleUrls: ['./listado-vinilos.component.css']
})
export class ListadoVinilosComponent implements OnInit {

  vinilos:Vinilo[] = [];

  constructor(private viniloService:ViniloService) { }

  ngOnInit(): void {
    this.vinilos = this.viniloService.getVinilos();
  }


}
