package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Account;
import com.example.demo.repo.AccountRepository;

@Service
public class AccountServiceImpl implements Accountservice{
	
	@Autowired
	AccountRepository repo;

	@Override
	public Account createAccount(Account account) {
		Account account_saved = repo.save(account);
		return account_saved;
	}

	@Override
	public Account getAccountDetailsByAccountNumber(Long accountNumber) {
		// TODO Auto-generated method stub
		Optional	<Account> account = repo.findById(accountNumber);
		if(account.isEmpty()) {
			throw new RuntimeException("Account is not Present");
		}
		Account account_found = account.get();
		return account_found;
	}

	@Override
	public List<Account> getAllAccountDetails() {
		// TODO Auto-generated method stub
		List<Account> listofAccount =  repo.findAll();
		return listofAccount;
	}

	@Override
	public Account depositMoney(Long accountNumber, Double money) {
		// TODO Auto-generated method stub
		Optional<Account> account = repo.findById(accountNumber);
		if(account.isEmpty()) {
			throw new RuntimeException("Account is not Present");
		}
		Account accountPresent = account.get();
		Double totalBalance = accountPresent.getAccount_balance() + money;
		accountPresent.setAccount_balance(totalBalance);
		repo.save(accountPresent);
		return accountPresent;
	}

	@Override
	public Account withdrawAmount(Long accountNumber, Double money) {
	    Optional<Account> account = repo.findById(accountNumber);

	    if (account.isEmpty()) {
	        throw new RuntimeException("Account is not Present");
	    }

	    Account accountPresent = account.get();

	    if (accountPresent.getAccount_balance() < money) {
	        throw new RuntimeException("Insufficient Balance");
	    }

	    Double updatedBalance = accountPresent.getAccount_balance() - money;
	    accountPresent.setAccount_balance(updatedBalance);

	    repo.save(accountPresent); // ✅ save updated entity
	    return accountPresent;
	}


	@Override
	public void closeAccount(Long accountNumber) {
		// TODO Auto-generated method stub
		getAccountDetailsByAccountNumber(accountNumber);
		repo.deleteById(accountNumber);
		
	}

}
