/**
 * 
 */
package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seismic.crm.model.Opportunity;
import com.seismic.crm.model.OpportunityProductDetail;

/**
 * @author sumang
 *
 */
public interface OpportunityProductDetailRepository extends JpaRepository<OpportunityProductDetail, String>{


	List<OpportunityProductDetail> findByOpportunity(Opportunity opportunity);

}
