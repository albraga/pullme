module Pullme {

    class User {

	constructor(public id: number, public lat: number, public long: number, public  name: string,  public email: string) {    
	}
    }

    class Product {
	constructor(public id: number, public isDiscount: boolean, public category: string, public price: number) {
	}
    }

    class Store {
	constructor(public id: number, public lat: number, public long: number, public name: string, public address: string, public phone: string) {
	}
    }

    class Vicinity {
	constructor(public id: number, public lat: number, public long: number, public radiusFromUser: number,  public stores: Array<Store>) {
	}
    }
    
}