import conf from "../conf/conf"

import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service{
    // properties
    client = new Client();
    databases;
    buckets;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.buckets = new Storage(this.client);
    }

    // add project method
    async addTechs({ technology}){
        console.log("technology in config ",technology[0].technology)
        console.log("projects in config ",technology[0].projects)
        // console.log("projects in config ",projects)
        try {
            for(const tech of technology){
                const filters = [`technology=${tech.technology}`];
                console.log("filters ",filters);
                const existingTech = await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteSkillCollectionId,
                    filters
                )
                if(existingTech.documents.length>0){
                    const existingTechId = existingTech.documents[0].$id;
                    await this.databases.updateDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteSkillCollectionId,
                        existingTechId,
                        {
                            projects: [...existingTech.documents[0].projects, ...tech.projects]
                        }
                    )
                }else{
                    await this.databases.createDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteSkillCollectionId,
                        tech.id,
                        {
                            technology: tech.technology,
                           projects: tech.projects,
                        }
                    )
                }
                
            }
        return true;
        } catch (error) {
            console.log("Appwrite service :: addSkills :: error ",error)
            return false;
        }
    }
    async addProject({ 
        title,
        slug,
        profileImage,
        shortDescription,
        githubLink,
        demoLink,
        status,
        longDescription,
        uploadDate,
        updateDate
    }){
       console.log("title", title);
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    profileImage,
                    shortDescription,
                    githubLink,
                    demoLink,
                    status,
                    longDescription,
                    uploadDate,
                    updateDate
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createProjectPost :: error ",error);
        }
    }
    // edit project method
    async updateProject( slug, {
        title,
        profileImage,
        shortDescription,
        githubLink,
        demoLink,
        status,
        longDescription,
        uploadDate,
        updateDate
    }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    profileImage,
                    shortDescription,
                    githubLink,
                    demoLink,
                    status,
                    longDescription,
                    uploadDate,
                    updateDate,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updateProject :: error ",error);
        }
    }
    // delete project method
    async deleteProject( slug ){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteProject :: error ",error);
            return false;
        }
    }
    // get single project 
    async getSingleProject( slug ){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getSingleProject :: error ",error);
        }
    }
    //get all onGoing project
    async getAllOnGoingProject( queries = [ Query.equal("status", "ongoing")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getAllOnGoingProject :: error ",error);
        }
    }
    //get all completed project
    async getAllCompletedProject( queries = [ Query.equal("status", "completed")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getAllCompletedProject :: error ",error);
        }
    }
    //get all archieve project
    async getAllArcheiveProject( queries = [ Query.equal("status", "archeive")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getAllArcheiveProject :: error ",error);
        }
    }
    //upload image
    async uploadFile( file ){
        try {
            return await this.buckets.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ",error);
        }
    }
    //delete image
    async deleteFile( fileId ){
        try {
            await this.buckets.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ",error);
            return false
        }
    }
    // get image preview
    getFilePreview( fileId ){
        try {
            return this.buckets.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error ",error);
            return false
        }
    }

}

const service = new Service();
export default service;