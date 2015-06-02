module pullme {

   export class User {
	public vicinity: Array<Store>;
	constructor(public id: number, public lat: number, public long: number, public  name: string,  public email: string) {    
	}
    }

    class Product {
	constructor(public id: number, public name: string, public isDiscount: boolean, public category: string, public price: number) {
	}
    }

    class Store {
	constructor(public id: number, public lat: number, public long: number, public name: string, public address: string, public phone: string, public products: Array<Product>) {
	}
    }

}