import { Component, OnInit } from "@angular/core";
import { 
    FormControl, 
    FormGroup, 
    Validators,
    FormBuilder } from '@angular/forms';
import { SigninService } from "./signin.service";
import { Router } from "@angular/router";
@Component({
    selector:'signin',
    templateUrl:'./signin.component.html',
    providers:[SigninService]
})
export class SigninComponent implements OnInit{

    private signinForm:FormGroup;


    /**
     * 
     * Invoke Reactive Formbuilder components to create
     * Angular form
     */
    constructor( private fb:FormBuilder,
    private signinSrv:SigninService,
    private router:Router 
    ){

    }

    /**
     * Create getter in order to reduce lengthy definition for the 
     * object
     * and 
     * Encapsulate the signinForm object
     */
    public get email(){return this.signinForm.get('email');}
    public get password(){return this.signinForm.get('password');}
    
    
    ngOnInit(){
        this.createForm();
    }

    private createForm(){
        this.signinForm = this.fb.group ({
            email: new FormControl('',[
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            password: new FormControl('',[
                Validators.required,
                Validators.minLength(5)
            ])
        })
    }


    private onLogin(){

        if(this.signinForm.valid){
            let authData = this.signinForm.value;

            let self = this;
            this.signinSrv.sendLoginReq(authData).subscribe((data)=>{
               self.router.navigate['/secure/dashboard'];
            })
        }
    }
} 