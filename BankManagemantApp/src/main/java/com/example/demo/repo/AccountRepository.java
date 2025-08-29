package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	void save(Double account_balance);

}
