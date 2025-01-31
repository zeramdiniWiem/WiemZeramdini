import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoesService } from '../services/shoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MagasinService } from '../services/magasins.service';

@Component({
  selector: 'app-edit-shoes',
  templateUrl: './edit-shoes.component.html',
  styleUrls: ['./edit-shoes.component.css']
})
export class EditShoesComponent implements OnInit {

  formShoes!: FormGroup;
  submitted: boolean = false;
  shoesId!: string;
  listMagasins: any[]=[];

  constructor(private fb: FormBuilder, private shoesService: ShoesService, private route: ActivatedRoute, private router: Router, private magasinsService : MagasinService) { }

  ngOnInit(): void {
    this.formShoes = this.fb.group({
      marque: ['', Validators.required],
      prix: ['', Validators.required],
      pointure: ['', Validators.required],
      couleur: ['', Validators.required],
      magasin: ['', Validators.required],
      image: ['', Validators.required]
    });

    // get id shoes
    this.route.params.subscribe(params => {
      this.shoesId = params['id'];
      // fetch les details bil id
      this.shoesService.getShoes(this.shoesId).subscribe(
        shoes => {
          this.formShoes.patchValue({
            marque: shoes.marque,
            prix: shoes.prix,
            pointure: shoes.pointure,
            couleur: shoes.couleur,
            magasin: shoes.magasin,
            image: shoes.imageSrc,
          });
        },
        error => {
          console.error('Error fetching shoes details:', error);
        }
      );
    });
    this.loadListMagasins();
  }
  loadListMagasins(): void {
    this.magasinsService.getListMgasin().subscribe(data=>{
    this.listMagasins.push(...data);
    console.log(data)
  },

    err=>console.log(err));
  }

  submit(): void {
    this.submitted = true;
    if (this.formShoes.invalid) {
      return;
    }

    // tnadi il service bech t3ml il update
    this.shoesService.updateShoes(this.shoesId, this.formShoes.value).subscribe(
      data => {
        console.log('Shoes updated successfully:', data);
        this.router.navigate(['liste']); // tredirecty il lista b3d il successful update
      },
      error => {
        console.error('Error updating shoes:', error);
      }
    );
  }
}

