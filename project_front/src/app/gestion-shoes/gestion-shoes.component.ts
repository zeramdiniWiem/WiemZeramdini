import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoesService } from '../services/shoes.service';
import { MagasinService } from '../services/magasins.service';

import { Router } from '@angular/router';
//import { Observable, of } from 'rxjs';
//import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-gestion-shoes',
  templateUrl: './gestion-shoes.component.html',
})
export class GestionShoesComponent implements OnInit {

  shoes: any[]=[];
  magasins: any[]=[]; //wiem

  selectedShoes:any;
  showUpdateForm:boolean=false;
  form!:FormGroup;
  submitted:boolean=false;

  filteredChaussures: any[] = [] //wiem
  searchText: string =''//wiem
    constructor(private fb:FormBuilder,private shoesService:ShoesService,private router: Router, private magasinService: MagasinService) { }

  ngOnInit(): void {
    this.loadListMagasins();
    this.loadListShoes();
    console.log(this.shoes)
    this.form = this.fb.group({
    departmentName: ['', Validators.required]
    });
    }

    /*getMagasinName(magasinId: string) {
      if(!magasinId) return;
      return this.magasinService.getMagasin(magasinId).subscribe(
        magasins => {
          return magasins.nom
        }
      )
    }

    loadListShoes(): void {
      this.shoesService.getListShoes().subscribe(data=>{
      console.log(data);
      this.shoes.push(...data);},
      err=>console.log(err));
      }*/

      loadListShoes(): void {
        this.shoesService.getListShoes().subscribe(data=>{
        this.shoes.push(...data);
        this.shoes.forEach(shoes =>{
          this.magasinService.getMagasin(shoes.magasin).subscribe(
            magasin =>{
              shoes.nomMagasin = magasin.nom;
            },
          );
        });

      },
        err=>console.log(err));
        }

        loadListMagasins(): void {
          this.magasinService.getAllMagasins().subscribe(data=>{
          this.magasins.push(...data);},
          err=>console.log(err));
          }

      deleteShoes(shoes: any): void {
        if (confirm('Are you sure you want to delete this shoes?')) {
        this.shoesService.deleteShoes(shoes.id).subscribe(
        () => {
        console.log('shoes deleted successfully');
        const index = this.shoes.indexOf(shoes);
        if (index !== -1) {
        this.shoes.splice(index, 1);
        }
        },
        (err) => console.log(err)
        );
        }
        }

        onSubmit(): void {
        }

        editShoes(shoes: any): void {
          this.router.navigate(['/edit-shoes', shoes.id]);
        }

}
