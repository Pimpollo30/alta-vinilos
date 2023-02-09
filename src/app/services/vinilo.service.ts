import { Injectable } from '@angular/core';
import { TipoVinilo } from '../models/tipo_vinilo';
import { Velocidad } from '../models/velocidad';
import { Vinilo } from '../models/vinilo';

@Injectable({
  providedIn: 'root'
})
export class ViniloService {
  private vinilos:Vinilo[];
  private tiposVinilos:TipoVinilo[];
  private velocidades:Velocidad[];

  constructor() {
    this.vinilos = [];
    this.tiposVinilos = [
      {
        id:0,
        descripcion:'Single'
      },
      {
        id:1,
        descripcion:'EP (Extended Play)'
      },
      {
        id:2,
        descripcion:'LP (Long Play) / Álbum'
      }
    ];
    this.velocidades = [
      {id:0,velocidad:'33 ⅓ RPM'}, 
      {id:1,velocidad:'45 RPM'}, 
   ];
  }

  getVinilos() {
    return this.vinilos;
  }

  getTipos() {
    return this.tiposVinilos;
  }

  getVelocidades() {
    return this.velocidades;
  }

  agregarVinilo(vinilo:Vinilo) {
    this.vinilos.push(vinilo);
  }

  nuevoVinilo():Vinilo {
    return {
      id:this.vinilos.length+1,
      nombre:'',
      artista:'',
      year:'',
      selloDiscografico:'',
      tipoVinilo: 0,
      velocidad: 0
    }
  }
  
}
