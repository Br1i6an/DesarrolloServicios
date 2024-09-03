package com.usta.springproject.repositories;

import com.usta.springproject.models.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<CustomerModel, Long> {
    @Query("SELECT COUNT(cus) FROM CustomerModel cus")
    public Integer countCustomerModel();

    @Query(value = "SELECT c.customerName, c.customerLastname, l.lendId, l.description" +
            "    FROM CustomerModel c " +
            "    INNER JOIN LendModel l ON c.customerId = l.customerModel.customerId" +
            "    WHERE l.lendId = :id")
    public String customerByLendId(Long id);
}
