/**
 * 
 */
package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Opportunity;


/**
 * @author sumang
 *
 */
public interface OpportunityRepository extends JpaRepository<Opportunity, Long> {
	@Query("select o.opportunityId as key,o.opportunityNumber as value from Opportunity o")
	List<KeyValueMap> getOpportunityDetails();
	@Query("select o from Opportunity o join o.contactByContactId oc where oc.contactId = :contactId")
	List<com.seismic.crm.model.Opportunity> getContactOpportunityReport(@Param ("contactId")
			Long contactId);
	
	/*@Query(value="select m from Opportunity m join m.listValuesByOpportunityPriorityId op where"
			+ " op.listValueDescription like :opportunityPriority ", countQuery="select count(m) from Opportunity m")*/
	/*@Query(value="select m from Opportunity m where m.opportunityNumber like ?1% ", 
			countQuery="select count(m) from Opportunity m")
	Page<Opportunity> getOpportunityView(String opportunityNumber, Pageable pageable);*/

	
}
