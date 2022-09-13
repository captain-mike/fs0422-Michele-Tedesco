import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ngmodelgroup',
  templateUrl: './ngmodelgroup.component.html',
  styleUrls: ['./ngmodelgroup.component.scss']
})
export class NgmodelgroupComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  userForm:any = {
    name: '',
    lastname: '',
    street: '',
    city: '',
    zipcode: ''
  }

  submit(form:NgForm){
    console.log(form)

    this.form.reset()//resetta valori e status
  }

  riempi(){
    console.log(this.form)
    this.form.form.setValue({
      name: 'Rossana',
      lastname: 'Bianchi',
      userAddress:{
        street: 'Roma 54',
        city: 'Milano',
        zipcode: '63546'
      }
    })
  }

  aggiorna(){
    this.form.form.patchValue({
      userAddress:{
        street: 'Roma 54',
        city: 'Milano',
        zipcode: '63546'
      }
    })
  }

}
