package com.example.demo.service;

import java.util.List;

import com.example.demo.Entity.Account;

public interface Accountservice {
	
	public Account createAccount(Account account);
	public Account getAccountDetailsByAccountNumber(Long accountNumber);
	public List<Account> getAllAccountDetails();
	public Account depositMoney(Long accountNumber,Double money);
	public Account withdrawAmount(Long accountNumber,Double money);
	public void closeAccount(Long accountNumber);
	
}
