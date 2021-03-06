const me = {
    name: 'shaun',
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
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
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', "plumbing work", 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
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
// const invOne = new Invoice('mario', 'work on the mario', 250);
// const invTwo = new Invoice('gomez', 'work on the gomez', 350);
//console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach(inv => {
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
// })
// need a "!" in the end because anchor might be Null, so we declare that "!" to say that it's not Null
const anchor = document.querySelector('a');
//console.log(anchor.href);
//grab the Form
//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
