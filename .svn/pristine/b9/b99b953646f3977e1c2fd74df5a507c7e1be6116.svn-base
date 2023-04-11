//package com.seismic.crm.init;
//
//import java.util.Properties;
//
//import javax.annotation.Resource;
//import javax.sql.DataSource;
//
//import org.hibernate.ejb.HibernatePersistence;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.core.env.Environment;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//import org.springframework.web.servlet.view.JstlView;
//import org.springframework.web.servlet.view.UrlBasedViewResolver;
//
//
//@Configuration
//@EnableWebMvc
//@EnableTransactionManagement
//@ComponentScan("com.seismic.crm")
//@PropertySource("classpath:application.properties")
//@EnableJpaRepositories("com.seismic.crm.repository")
//public class WebAppConfig  extends WebMvcConfigurerAdapter{
//	
//    private static final String PROPERTY_NAME_DATABASE_DRIVER = "db.driver";
//    private static final String PROPERTY_NAME_DATABASE_PASSWORD = "db.password";
//    private static final String PROPERTY_NAME_DATABASE_URL = "db.url";
//    private static final String PROPERTY_NAME_DATABASE_USERNAME = "db.username";
//	
//    private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "hibernate.dialect";
//    private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";
//    private static final String PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN = "entitymanager.packages.to.scan";
//    
//	@Resource
//	private Environment env;
//	
//	@Bean
//	public DataSource dataSource() {
//		DriverManagerDataSource dataSource = new DriverManagerDataSource();
//		
//		dataSource.setDriverClassName(env.getRequiredProperty(PROPERTY_NAME_DATABASE_DRIVER));
//		dataSource.setUrl(env.getRequiredProperty(PROPERTY_NAME_DATABASE_URL));
//		dataSource.setUsername(env.getRequiredProperty(PROPERTY_NAME_DATABASE_USERNAME));
//		dataSource.setPassword(env.getRequiredProperty(PROPERTY_NAME_DATABASE_PASSWORD));
//		
//		return dataSource;
//	}
//	
//	/*@Bean
//	public LocalSessionFactoryBean sessionFactory() {
//		LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();
//		sessionFactoryBean.setDataSource(dataSource());
//		sessionFactoryBean.setPackagesToScan(env.getRequiredProperty(PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN));
//		sessionFactoryBean.setHibernateProperties(hibProperties());		 
//		return sessionFactoryBean;
//	}*/
//	
//	 @Bean  
//	    public LocalContainerEntityManagerFactoryBean entityManagerFactory() { 
//	        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();  
//	        entityManagerFactoryBean.setDataSource(dataSource());  
//	        entityManagerFactoryBean.setPersistenceProviderClass(HibernatePersistence.class);  
//	        entityManagerFactoryBean.setPackagesToScan(env.getRequiredProperty(PROPERTY_NAME_ENTITYMANAGER_PACKAGES_TO_SCAN));  
//	          
//	        entityManagerFactoryBean.setJpaProperties(hibProperties());  
//	          
//	        return entityManagerFactoryBean;  
//	    }  
//	
//	private Properties hibProperties() {
//		Properties properties = new Properties();
//		properties.put(PROPERTY_NAME_HIBERNATE_DIALECT, env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_DIALECT));
//		properties.put(PROPERTY_NAME_HIBERNATE_SHOW_SQL, env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_SHOW_SQL));
//		return properties;	
//	}
//	
//	@Bean  
//    public JpaTransactionManager transactionManager() {  
//        JpaTransactionManager transactionManager = new JpaTransactionManager();  
//        transactionManager.setEntityManagerFactory(entityManagerFactory().getObject());
//        return transactionManager;  
//    }  
//	/*
//	@Bean
//	public HibernateTransactionManager transactionManager() {
//		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
//		transactionManager.setSessionFactory(sessionFactory().getObject());
//		return transactionManager;
//	}*/
//	
//	@Bean
//	public UrlBasedViewResolver setupViewResolver() {
//		UrlBasedViewResolver resolver = new UrlBasedViewResolver();
//		resolver.setPrefix("/WEB-INF/pages/");
//		resolver.setSuffix(".jsp");
//		resolver.setViewClass(JstlView.class);
//		return resolver;
//	}
//	
//	/*@Bean
//	public ResourceBundleMessageSource messageSource() {
//		ResourceBundleMessageSource source = new ResourceBundleMessageSource();
//		source.setBasename(env.getRequiredProperty("message.source.basename"));
//		source.setUseCodeAsDefaultMessage(true);
//		return source;
//	}*/
//	
//	  /**
//	    *  Total customization - see below for explanation.
//	    */
////	  @Override
////	  public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
////	    configurer.favorPathExtension(false).
////	            favorParameter(true).
////	            parameterName("mediaType").
////	            ignoreAcceptHeader(true).
////	            useJaf(false).
////	            defaultContentType(MediaType.APPLICATION_JSON).
////	            mediaType("xml", MediaType.APPLICATION_XML).
////	            mediaType("json", MediaType.APPLICATION_JSON);
////	  }
//	  
////	@Bean(name = "jsonViewResolver")
////	public ViewResolver getJsonViewResolver() {
////		return new JsonViewResolver();
////	}
//
//	  @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/META-INF/resources/webjars/").setCachePeriod(31556926);
//        registry.addResourceHandler("/fonts/**").addResourceLocations("/resources/fonts/").setCachePeriod(31556926);
//        registry.addResourceHandler("/css/**").addResourceLocations("/resources/css/").setCachePeriod(31556926);
//        registry.addResourceHandler("/images/**").addResourceLocations("/resources/images/").setCachePeriod(31556926);
//        registry.addResourceHandler("/img/**").addResourceLocations("/resources/img/").setCachePeriod(31556926);
//        registry.addResourceHandler("/gridjs/**").addResourceLocations("/resources/gridjs/").setCachePeriod(31556926);
//        registry.addResourceHandler("/js/**").addResourceLocations("/resources/js/").setCachePeriod(31556926);
//        registry.addResourceHandler("/jqgrid/**").addResourceLocations("/resources/jqgrid/").setCachePeriod(31556926);
//        registry.addResourceHandler("/jqwidgets/**").addResourceLocations("/resources/jqwidgets/").setCachePeriod(31556926);
//        registry.addResourceHandler("/scripts/**").addResourceLocations("/resources/scripts/").setCachePeriod(31556926);
//        registry.addResourceHandler("/menujs/**").addResourceLocations("/resources/menujs/").setCachePeriod(31556926);
//        
//   }	
//
//}
