module Pullme {

    class User {
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

    class Vicinity {
	public stores: Array<Store>;
	constructor(public userLat: num, public userLong: num) {
	}
	function getStores(maxRange: number, productName: string, isDiscount: boolean = true) {
	    this.userLat 
	}
    }
    
}