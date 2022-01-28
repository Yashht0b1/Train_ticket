package com.project.SpringBootRest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.SpringBootRest.entity.Customer;
import com.project.SpringBootRest.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;

	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	public Optional<Customer> getCustomer(String email, String password) {
		return customerRepository.findByEmailAndPassword(email, password);
	}

	public Optional<Customer> getCustomer(int id) {
		return customerRepository.findById(id);
	}

	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

}
