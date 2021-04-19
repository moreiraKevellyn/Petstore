import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;
  public EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public PHONE_REGEXP: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;


  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]],
      phone: ['', [Validators.required, Validators.pattern(this.PHONE_REGEXP)]],
      message: ['', [Validators.required]]
    });
  }

  durationInSeconds = 5;
  sendForm() {
    if (this.formGroup.valid) {
      // Apresentar mensagem de email enviado com sucesso
      // Deixar o formulário em branco
      this.openSnackBar("Mensagem enviada")
      console.log("Enviado")
      this.formGroup.reset();
      for (let control in this.formGroup.controls) {
        this.formGroup.controls[control].setErrors(null);
      }
    }
    else {
      this.openSnackBar("Mensagem não enviada")
      console.log("Não enviado")
    }
  }

  private openSnackBar(mensagem: string, ação: string = "") {
    this._snackBar.open(mensagem, ação, {
      duration: 2000,
    });
  }

};

