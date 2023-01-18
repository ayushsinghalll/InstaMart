import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  updateProduct: any;
  addProduct: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { product: ProductModel; button: string }
  ) {}

  ngOnInit(): void {

    if(this.data.product){
      this.initUpdateForm()
    }
    }
  initUpdateForm() {
    this.updateProduct = this.fb.group({
      name: new FormControl(this.data.product?.name, Validators.required),
      price: new FormControl(this.data.product?.price, Validators.required),
      category: new FormControl(
        this.data.product?.category,
        Validators.required
      ),
      description: new FormControl(this.data.product?.description, Validators.required),
      img: new FormControl(this.data.product?.imageURL, Validators.required),
    });
  }
  update() {
    if (this.updateProduct.get('display')) {
      let res: ProductModel = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        description:this.updateProduct.get('description').value,
        imageURL:this.updateProduct.get('img').value
      };
      this.dialogRef.close(res);
    } else {
      let res: ProductModel = {
        id: this.data.product.id,
        name: this.updateProduct.get('name').value,
        price: this.updateProduct.get('price').value,
        category: this.updateProduct.get('category').value,
        description:this.updateProduct.get('description').value,
        imageURL:this.updateProduct.get('img').value

      };
      this.dialogRef.close(res);
    }
  }
  onNoClick(res: boolean): void {
    this.dialogRef.close(res);
  }
}
