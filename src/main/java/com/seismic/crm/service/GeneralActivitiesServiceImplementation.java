package com.seismic.crm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Contact;
import com.seismic.crm.model.GeneralActivities;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.GeneralActivityRepository;

@Service
public class GeneralActivitiesServiceImplementation implements
		GeneralActivitiesService {
	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private GeneralActivityRepository generalActivityRepository;

	@Override
	@Transactional
	public List<GeneralActivities> getGeneralActivitiesDetails(String moduleId) {
		return generalActivityRepository.getGeneralActivitiesDetails(moduleId);
	}

	@Override
	public GeneralActivities findById(Long generalActivityId) {
		return generalActivityRepository.findOne(generalActivityId);
	}

	@Override
	public GeneralActivities saveGeneralActivitiess(
			GeneralActivities generalActivities) {
		return generalActivityRepository.save(generalActivities);
	}

}
