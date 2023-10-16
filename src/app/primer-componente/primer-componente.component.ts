import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.scss']
})
export class PrimerComponenteComponent implements OnInit {
  status = " No se ha enviado el formulario";
  edad = 20;
  colorTexto:string= " ";
  nombrePorDefecto = "Ninguno"
  user = ""; //prueba para ngModel.Debemos importarlo en app.module primero
  
  ngOnInit(): void {
    
    this.actualizarColor();
  }
  
  enviarFormulario(nombre: any){
    console.log(nombre.value)
    this.status="Se ha enviado el formulario";
    this.nombrePorDefecto = " Vicente"
    console.log(this.status)
}
sumarEdad(){
  this.edad ++;
  this.actualizarColor();
  
  
}
restarEdad(){
  this.edad --;
  this.actualizarColor();
  
  
}
private actualizarColor(){
  this.colorTexto = this.edad > 18 ? 'green' : 'red';

}


}
