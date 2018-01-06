import * as React from "react"; 
import {RouteComponentProps}from "react-router"; 
import {Redirect}from "react-router"; 

interface IContactState {
    email:string;
    name:string;
    emailError:boolean;
    nameError:boolean;
    formError:boolean;
    hideForm:boolean;
    fireRedirect:boolean;
}

export class Contact extends React.Component<RouteComponentProps<{}>, IContactState> {
    constructor() {
        super(); 

        this.state =  {
            email:"", 
            name:"", 
            emailError:false, 
            nameError:false, 
            formError:true, 
            hideForm:false, 
            fireRedirect:false
        };

        // bind the this context to the handler function
        this.handler = this.handler.bind(this); 
        this.submitForm = this.submitForm.bind(this); 
    }

    showFormErrors() {
        const inputs:NodeListOf<HTMLInputElement> = 
            document.querySelectorAll("input")as NodeListOf<HTMLInputElement>; 
        var isFormValid = true; 

        for (var i = 0; i < inputs.length; i++) {
            const isInputValid = this.showInputError(inputs[i].name, inputs[i].value)

            if ( ! isInputValid && isFormValid) {
                isFormValid = false; 
            }
        }
        
        return isFormValid; 
      }
      
      
      showInputError(name:string, value:string):boolean {

            if (name === "email") {
                if ( !/(.+)@(.+){2,}\.(.+){2,}/.test(value)) {
                    this.setState( {emailError:true}); 
                    return false; 
                }
                if (value.length < 4) {
                    this.setState( {emailError:true});
                    return false;
                }
                this.setState( {emailError:false});
            }

            if (name === "name") {
                if (value.length < 4) {
                    this.setState( {nameError:true});
                    return false;
                }
                this.setState( {nameError:false});
            }

            return true;
       }

    submitForm(e:any) {
        e.preventDefault();
        this.setState( {fireRedirect:true });
    }

    handler(event:any) {
        const value:string = event.target.value;
        const name:string = event.target.name;

        this.setState( {
            [name as any]:value,
            formError: ! this.showFormErrors()
        });


        }

    public render() {
        const {fireRedirect } = this.state

             return <div className="row">
                <h1>Contact Us</h1>
                <div className= "col-sm-6">
                <Input name="email" placeholder="Enter email address" type="email"
                    action={this.handler} hasError={this.state.emailError}
                    value={this.state.email} />
                <Input name="name" placeholder="Enter name" type="text"
                    action={this.handler} hasError={this.state.nameError}
                    value={this.state.name} />
                <button onClick={this.submitForm} disabled={this.state.formError}
                    id="btnSubmit" type="submit" className="btn btn-primary">Send Enquiry</button>
                </div >  {fireRedirect && ( < Redirect to =  {"/thanks"}/> )} </div >
    }

}

interface InputState {
    placeholder:string;
    type:string;
    action:any;
    hasError:boolean;
    name:string;
    value:string
}

export class Input extends React.Component < InputState, any >  {

	constructor(props:any) {
        super(props);
    }


    render() {
        var btnClass = "form-group";
        if (this.props.hasError)
            btnClass += " has-error";

        return <div className =  {btnClass} >  < label className = "control-label" >  {this.props.placeholder} </label >  < div >  < input
                    name =  {this.props.name}
                    onChange =  {this.props.action}
                    value =  {this.props.value}
                    type =  {this.props.type}
                    placeholder =  {this.props.placeholder}
                    className = "form-control"/>  </div >  </div >

    }
}

