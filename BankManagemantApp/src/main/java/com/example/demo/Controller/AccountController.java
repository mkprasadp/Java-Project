package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Account;
import com.example.demo.service.Accountservice;

@RestController
@RequestMapping("/account")
public class AccountController {
	
	@Autowired
	Accountservice service;
	
	@PostMapping("/Hello")
	public String great() {
		return "Hello From Bank";
	}
	
	//create account
	@PostMapping("/create")
	public ResponseEntity<Account> createaccount(@RequestBody Account account) {
		Account createAccount = service.createAccount(account);
		return ResponseEntity.status(HttpStatus.CREATED).body(createAccount);
	}
	
	@GetMapping("/{accountNumber}")
	public Account getAccountByAccountNumber(@PathVariable Long accountNumber) {
		Account account = service.getAccountDetailsByAccountNumber(accountNumber);
		return account;
	}
	
	@GetMapping("/getAllAcounts")
	public List<Account> getAllAcountDetails(){
		List<Account> allacountDetails = service.getAllAccountDetails();
		return allacountDetails;
	}
	
	@PutMapping("/deposit/{accountNumber}/{amount}")
	public Account depositMoney(@PathVariable Long accountNumber,@PathVariable double amount) {
		Account account = service.depositMoney(accountNumber, amount);
		return account;
	}
	
	@PutMapping("/withdraw/{accountNumber}/{amount}")
	public Account withdrawAmount(@PathVariable Long accountNumber, @PathVariable double amount) {
	    return service.withdrawAmount(accountNumber, amount);
	}
	
	
	@DeleteMapping("/delete/{accountNumber}")
	public ResponseEntity<String> deleteAccount(@PathVariable Long accountNumber) {
		service.closeAccount(accountNumber);
		return ResponseEntity.ok("Account closed");
	}

	
}
