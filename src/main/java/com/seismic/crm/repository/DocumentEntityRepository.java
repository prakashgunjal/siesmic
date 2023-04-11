package com.seismic.crm.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.seismic.crm.model.DocumentEntity;

public interface DocumentEntityRepository extends MongoRepository<DocumentEntity, String> {

}
