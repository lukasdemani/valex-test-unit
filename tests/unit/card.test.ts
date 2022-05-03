import * as cardService from "../../src/services/cardService";

describe("generate card data", () => {
	it("should create a new card", () => {
        const apiKey= "zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0";
        const employeeId= 1;
        const type="restaurants";
		
		const result = cardService.create(apiKey, employeeId, type);
		
		expect(result).toEqual(true);
	});
});

describe("activate card", () => {
	it("should activate the card", () => {
        const id= 1;
        const cvc="747";
        const password= "khdakh";
        
		
		const result = cardService.activate(id, cvc, password);
		
		expect(result).toEqual(true);
	});
});

describe("validate card", () => {
	it("should validate expiration date", () => {
        const expirationDate = "10/30";
        
		const result = cardService.validateExpirationDateOrFail(expirationDate);
		
		expect(result).toEqual(true);
	});
});

describe("get card by id", () => {
	it("should get a card", () => {
        const id = 2;
        
		const result = cardService.getById(id);
		
		expect(result).toEqual(true);
	});
});

describe("validate cvc", () => {
	it("should validate cvc number", () => {
        const cvc= '345'
        const cardCVC="345"
        
		const result = cardService.validateCVCOrFail(cvc, cardCVC);
		
		expect(result).toEqual(true);
	});
});

describe("validate cvc", () => {
	it("should validate cvc number", () => {
        const password= 'asd';
        const cardPassword= 'asd';
       
		const result = cardService.validateCVCOrFail(password, cardPassword);
		
		expect(result).toEqual(true);
	});
});
