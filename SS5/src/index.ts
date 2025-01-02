// abstract class Rikkei {
//   private _taxCode: string;
//   private _stakeholders: any[];
//   constructor(taxCode: string) {
//     this._taxCode = taxCode;
//     this._stakeholders = [
//       {
//         name: "Stakeholders",
//         shares: "100%",
//       },
//     ];
//   }

//   protected showTaxCode(): void {
//     console.log(`Rikkei Tax Code is ${this._taxCode}`);
//   }

//   abstract payTaxes(): void;
// }

// class RikkeiEducation extends Rikkei {
//   private _bod: string[];
//   constructor(bod: string[]) {
//     super("1234567");
//     this._bod = bod;
//   }

//   override payTaxes(): void {
//     console.log("Paying taxes for RikkeiEducation");
//   }
// }

// let rikkeiEducation = new RikkeiEducation(["Duc Thanh", "Duc Thanh"]);
// console.log(rikkeiEducation);
// console.log(rikkeiEducation.payTaxes());

// abstract class Human {
//   private _gene: string;
//   constructor(gene: string) {
//     this._gene = gene;
//   }

//   abstract reproduce(): void;
// }

// abstract class Person extends Human {
//   private _gender: boolean;
//   constructor(gender: boolean, gene: string) {
//     super(gene);
//     this._gender = gender;
//   }

//   abstract hunt(): void;
// }

// class Student extends Person {
//   private _name: string;
//   constructor(name: string, gender: boolean, gene: string) {
//     super(gender, gene);
//     this._name = name;
//   }

//   override reproduce(): void {
//     console.log(this._name);
//   }

//   override hunt(): void {
//     console.log(`${this._name} is hunting.`);
//   }

//   study(): void {
//     console.log(`Work work work!!`);
//   }
// }

// interface Sales {
//   name: string;
//   sale(): void;
// }

// interface Marketing {
//   name: string;
//   marketing(): void;
// }

// class RK implements Sales, Marketing {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   sale(): void {
//     console.log("Doing sales");
//   }
//   marketing(): void {
//     console.log("Doing Marketing");
//   }
// }

// interface MKT {
//   marketing(): void;
// }

// interface DigitalMKT extends MKT {
//   doingMKT(): void;
// }

// class EnglishCenter implements DigitalMKT {
//   public _name: string;
//   constructor(_name: string) {
//     this._name = _name;
//   }

//   marketing(): void {
//     console.log("Doing Marketing");
//   }

//   doingMKT(): void {
//     console.log("Doing digital MKT");
//   }
// }

 
