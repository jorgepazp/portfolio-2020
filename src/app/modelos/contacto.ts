
export class Contacto {
    name: string;
    email: string;
    message: string;

    setProperties(name:string,email:string,message:string){
        this.name=name;
        this.message=message;
        this.email=email; 
    }


    print(){
        console.log("name: "+this.name);
    console.log("email: "+this.email);
    console.log("message: "+this.message);
    }
}