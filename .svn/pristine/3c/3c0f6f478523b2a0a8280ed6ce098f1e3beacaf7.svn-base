package com.seismic.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.seismic.crm.model.GeneralAlerts;
import com.seismic.crm.repository.GeneralAlertsRepository;

@Controller
@RequestMapping(value = "commonAlert")
public class CommonAlertController {

	@Autowired
	private GeneralAlertsRepository generalAlertsRepository;
	
	/*@RequestMapping(value = "viewAlerts")
	public ModelAndView viewAlerts(){
		
		ModelAndView view = new ModelAndView("crm/opportunity");
		
		return view;
	}*/
	
	@RequestMapping(value = "getAlerts", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<GeneralAlerts> getAlerts(
			@RequestParam String moduleId,
			@RequestParam String moduleName) {
		
		List<GeneralAlerts> generalAlerts = generalAlertsRepository.findByModuleIdAndModuleName(moduleId,moduleName);
		
		return generalAlerts;
	}
	
}
