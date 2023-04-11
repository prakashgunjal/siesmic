package com.seismic.crm.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.acls.domain.BasePermission;
import org.springframework.security.acls.domain.ObjectIdentityImpl;
import org.springframework.security.acls.domain.PrincipalSid;
import org.springframework.security.acls.jdbc.JdbcMutableAclService;
import org.springframework.security.acls.model.MutableAcl;
import org.springframework.security.acls.model.NotFoundException;
import org.springframework.security.acls.model.ObjectIdentity;
import org.springframework.security.acls.model.Permission;
import org.springframework.security.acls.model.Sid;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.seismic.crm.model.SalesOrder;

/**
 * Support class for easy access to our custom {@link BookstoreUserDetails}
 * 
 * @author Marten Deinum
 * @author Koen Serneels
 * 
 */
@Service
public class SecurityContextUtil {

	@Autowired
	private JdbcMutableAclService aclService;

	public static String getUsername() {
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}

	public static List<String> getRoles() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		String username = auth.getName();
		List<String> roles = new ArrayList<String>(); 
		Iterator itr = auth.getAuthorities().iterator();
		while(itr.hasNext()){
			roles.add(((GrantedAuthority)itr.next()).getAuthority());
		}
		return roles;
	}

	public void saveACEPermissions(Class<?> clazz, Long objId, String subject, List<Permission> perms) {
		// Prepare the information we'd like in our access control entry (ACE)
		ObjectIdentity oi = new ObjectIdentityImpl(clazz, objId);

		// Create or update the relevant ACL for 
		MutableAcl acl = null;
		try {
		  acl = (MutableAcl) aclService.readAclById(oi);
		} catch (NotFoundException nfe) {
		  acl = aclService.createAcl(oi);
		}

		Sid sid = new PrincipalSid(subject);
		
		// Now grant some permissions via an access control entry (ACE)
		Iterator itr = perms.iterator();
		while(itr.hasNext()){
			acl.insertAce(acl.getEntries().size(), (Permission)itr.next(), sid, true);
			aclService.updateAcl(acl);
		}
	}
}
