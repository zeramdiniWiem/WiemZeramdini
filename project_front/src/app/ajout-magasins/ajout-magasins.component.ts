import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MagasinService } from '../services/magasins.service';
@Component({
  selector: 'app-ajout-magasins',
  templateUrl: './ajout-magasins.component.html',
  styleUrls: ['./ajout-magasins.component.css']
})
export class AjoutMagasinsComponent implements OnInit {
 formMagasins!: FormGroup;
 submitted: boolean=false;
 listShoes: any[]=[];
 listMagasins: any[]=[];

  constructor(private fb: FormBuilder, private route: Router, private magasinsService : MagasinService) { }

  ngOnInit(): void {
    this.formMagasins = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required]
    })
  }

  submit(): void{
    console.log(this.formMagasins)
    this.magasinsService.postMagasin(this.formMagasins.value).subscribe(data => {
    this.route.navigate(['liste']);
    //window.location.reload();
    console.log(this.formMagasins.value);},
    err =>{

    console.log(err)
    });
    }
}
