import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ShoesService} from '../services/shoes.service';
import { Router } from '@angular/router';
import { MagasinService } from '../services/magasins.service';
@Component({
  selector: 'app-ajout-shoes',
  templateUrl: './ajout-shoes.component.html',
  styleUrls: ['./ajout-shoes.component.css']
})
export class AjoutShoesComponent implements OnInit {
 formShoes!: FormGroup;
 submitted: boolean=false;
 listShoes: any[]=[];
 listMagasins: any[]=[];

  constructor(private shoesService: ShoesService, private fb: FormBuilder, private route: Router, private magasinsService : MagasinService) { }

  ngOnInit(): void {
    this.formShoes = this.fb.group({
      marque: ['', Validators.required],
      prix: ['', Validators.required],
      pointure: ['', Validators.required],
      couleur: ['', Validators.required],
      magasin: ['', Validators.required],
      image: ['', Validators.required]
    })
    this.loadListMagasins()
  }
//list magasin
  loadListMagasins(): void {
    this.magasinsService.getListMgasin().subscribe(data=>{
    this.listMagasins.push(...data);
    console.log(data)
  },

    err=>console.log(err));
  }
  submit(): void{
    console.log(this.formShoes)
    this.shoesService.postShoes(this.formShoes.value).subscribe(data => {
    this.route.navigate(['liste']);
    //window.location.reload();
    console.log(this.formShoes.value);},err =>{

    console.log(err)
    });
    }
}
