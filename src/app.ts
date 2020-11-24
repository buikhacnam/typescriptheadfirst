//interfaces
export interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
}
  
const me: IsPerson = {
    name: 'shaun',
    //age: 30,
    speak(text: string): void {
      console.log(text);
    },
    spend(amount: number): number {
      console.log('I spent ', amount);
      return amount;
    },
};

const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
}
  
greetPerson(me);
  //greetPerson({name: 'shaun'})


//class
// class Invoice {
//     private client: string;
//     readonly details: string;
//     public amount: number;
//     // pass values as c, d, a and assign them as client, details and amount
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
// }
import { Invoice } from './classes/Invoice.js';
 // class Invoice {
//     constructor(
//       readonly client: string, 
//       private details: string, 
//       public amount: number
//     ){}
  
//     format() {
//       return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
//   }

const invOne = new Invoice('mario', 'work on the mario', 250);
const invTwo = new Invoice('gomez', 'work on the gomez', 350);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})


// need a "!" in the end because anchor might be Null, so we declare that "!" to say that it's not Null
const anchor = document.querySelector('a')!;

//console.log(anchor.href);


//grab the Form

//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement;


//input
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
});
