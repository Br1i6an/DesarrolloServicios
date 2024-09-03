package com.usta.sales.services;

import com.usta.sales.models.BillModel;
import com.usta.sales.repositories.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public List<BillModel> listBills(){
        return billRepository.findAll();}
    public BillModel createBill(BillModel bill){
        return billRepository.save(bill);
    }
    public BillModel editBill(BillModel bill){
        return billRepository.save(bill);
    }
    public Optional<BillModel> findBill(Long id){
        return billRepository.findById(id);
    }
    public void deleteBill(Long id){
        billRepository.deleteById(id);
    }
}
