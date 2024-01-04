
import React, { useCallback, useState } from 'react';
import { Button, Input, RTE, Select } from "./formData/index"
import { useForm } from 'react-hook-form';
import appwriteService from "../appwite/config"
import { useSelector, useDispatch } from "react-redux"
import { AddTechForm } from "./index"

const ProjectForm = ({ project }) => {
    const [ technology, setTechnology ] = useState([])
    const handleTechListUpdate = (newTechList) => {
        setTechnology(newTechList);
    }
    const curDate = new Date();
    const { register, handleSubmit, watch, setValue,control, getValues } = useForm({
        defaultValues: {
            title: project?.title || "",
            slug: project?.$id || "",
            shortDescription: project?.shortDescription || "",
            githubLink: project?.githubLink || "",
            demoLink: project?.demoLink || "",
            status: project?.status || "ongoing",
            longDescription: project?.longDescription || "",
            uploadDate: project?.uploadDate || curDate,
            updateDate: curDate,
        }
    })
    const submit = async(data) => {
        
        console.log("Test");
        console.log("Data ",data)
        const skillsMutate = technology.map(item => ({ technology: item.technology}))
        const mergeData = {...data, skills:skillsMutate};
        
        console.log("Form Data: ",mergeData);
        // const projectData = await appwriteService.getSingleProject("6587ffd2db691da42a1b")
        // console.log("Project Data ",projectData)
        // const projectCompleted = await appwriteService.getAllCompletedProject("completed")
        // console.log("Project Completed ",projectCompleted)
        //project is present
        if(project){
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
            if(file){
                appwriteService.deleteFile(post.profileImage);
            }
            const dbPost = await appwriteService.updateProject(project.$id, {
                ...mergeData,
                profileImage: file ? file.$id : undefined,
            })
            if(dbPost){
                console.log("Project data is updated successfully")
            }else{
                console.log("Project data is not updated")
            }
        }
        else{
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
            if(file){
                const fileId = file.$id;
                console.log("fileId ",fileId)
                data.profileImage = fileId
                console.log("data ",data);
                console.log("Technology ",technology);
               
                const dbProject = await appwriteService.addProject({
                    ...mergeData
                })
                if(dbProject){
                    console.log("Project data added into database successfully")
                }else{ 
                    console.log("Project is not added in database")
                }
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if(value && typeof value === "string")
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");
        return "";
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === "title"){
                setValue("slug", slugTransform(value.title), { shouldValidate: true})
            }
        })
        return () => subscription.unsubscribe();
    }, [ watch, slugTransform, setValue ])
    return (
        <>
        <form onSubmit={handleSubmit(submit)}>
        <section className="py-1 bg-gray-800">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-950 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-gray-950 text-xl font-bold">
                                Upload Project
                            </h6>
                            <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs
                            px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all
                            duration-150" type="submit">
                                Upload
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Project Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                        Title
                                    </label>
                                    <input 
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white rounded
                                    text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    {...register("title", { required: true })}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                        Slug
                                    </label>
                                    <input 
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white rounded
                                    text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    {...register("slug", { required: true })}
                                    onInput = { (e) => {
                                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true})
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                        Short Description
                                    </label>
                                    <input 
                                    type="text"
                                    className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white rounded
                                    text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    {...register("shortDescription", { required: true})}
                                    />
                                </div>
                            </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-gray-600"/>
                            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Link Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                            Github Link
                                        </label>
                                        <input 
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white
                                        rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        {...register("githubLink", { required: true })}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                            Demo Link
                                        </label>
                                        <input 
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder:text-gray-300 text-gray-600 bg-white
                                        rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        {...register("demoLink")}
                                        />
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <hr className="mt-6 border-b-1 border-gray-300"/>
                            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Select Type of project and profile for project
                            </h6>
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                        Status
                                    </label>
                                    <Select
                                        options={[ "ongoing", "completed", "archeive"]}
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                                        border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring text-xs"
                                        {...register("status", { required: true })}
                                    />
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                            Image
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg
                                                 className="mx-auto h-12 w-12 text-white"
                                                  stroke="currentColor"
                                                  fill="none"
                                                  viewBox="0 0 48 48"
                                                  aria-hidden="true"
                                                  >
                                                    <path 
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                                                     strokeWidth="2"
                                                     strokeLinecap="round" 
                                                     strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                    className="relative cursor-pointer bg-gray-900 rounded-md
                                                     font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none
                                                      focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span className="">Upload a file</span>
                                                        <input
                                                        type="file"
                                                        id='file-upload'
                                                        className="sr-only"
                                                        accept="image/png image/jpg image/jpeg image/gif"
                                                        {...register("image", { required: !project })}
                                                        />
                                                    </label>
                                                    <p className="pl-1 text-white"> or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-white">
                                                    PNG, JPG, GIF, JPEG upto 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-gray-300"/>
                            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Add Technology used in this project
                            </h6>
                            <AddTechForm  onTechListUpdate={handleTechListUpdate}/>
                            <hr className="mt-6 border-b-1 border-gray-300"/>
                            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Complete workflow of the project
                            </h6>
                            <div className="w-full px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-gray-600 text-xs font-bold mb-2">
                                        Content:
                                    </label>
                                     <RTE  name="content" control={control} defaultValue={getValues("content")}/>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        </section>
        </form>
        </>
    );
};



export default ProjectForm;