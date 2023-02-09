import { Component, OnInit } from '@angular/core';
import { TipoVinilo } from 'src/app/models/tipo_vinilo';
import { Velocidad } from 'src/app/models/velocidad';
import { Vinilo } from 'src/app/models/vinilo';
import { ViniloService } from 'src/app/services/vinilo.service';

@Component({
  selector: 'app-alta-vinilos',
  templateUrl: './alta-vinilos.component.html',
  styleUrls: ['./alta-vinilos.component.css']
})
export class AltaVinilosComponent implements OnInit {

  vinilo!:Vinilo;
  tipos:TipoVinilo[] = [];
  velocidades:Velocidad[] = [];

  constructor(private viniloService:ViniloService) { }

  ngOnInit(): void {
    this.vinilo = this.viniloService.nuevoVinilo();
    this.tipos = this.viniloService.getTipos();
    this.velocidades = this.viniloService.getVelocidades();
  }

  insertarVinilo():void {
    this.viniloService.agregarVinilo(this.vinilo);
    this.vinilo = this.viniloService.nuevoVinilo();
  }
}
