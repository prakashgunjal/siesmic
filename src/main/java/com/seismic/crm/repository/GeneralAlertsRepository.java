package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seismic.crm.model.GeneralAlerts;

public interface GeneralAlertsRepository extends JpaRepository<GeneralAlerts, String> {

	List<GeneralAlerts> findByModuleIdAndModuleName(String moduleId,
			String moduleName);

}
