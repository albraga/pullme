module model {
	export class User {
            constructor(public id?: number, public lat?: number, public long?: number, public  name?: string,  public email?: string){}
	}

	export class Product {
	    constructor(public id?: number, public name?: string, public isDiscount?: boolean, public category?: string, public price?: number) {}
	}

	export class Store {
	    constructor(public id?: number, public lat?: number, public long?: number, public name?: string, public address?: string, public phone?: string, public products?: Array<Product>) {}
	}
}