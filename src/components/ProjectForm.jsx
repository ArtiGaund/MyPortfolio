
import React, { useCallback } from 'react';
import { Button, Input, RTE, Select } from "./formData/index"
import { useForm } from 'react-hook-form';
import appwriteService from "../appwite/config"
import { useSelector, useDispatch } from "react-redux"
import { AddTechForm } from "./index"

const ProjectForm = ({ project }) => {
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
        console.log("Data ",data)
        //project is present
        if(project){
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null
            if(file){
                appwriteService.deleteFile(post.profileImage);
            }
            const dbPost = await appwriteService.updateProject(project.$id, {
                ...data,
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
                const dbProject = await appwriteService.addProject({
                    ...data
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
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap m-5'>
            <div className='flex lg:flex-row flex-col gap-3 bg-gray-800 rounded-xl shadow-lg bg-gradient-to-t'>
                <div className='w-2/3 px-2 text-white p-8 ml-8'>
                    <Input 
                        label="Title: "
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <Input 
                        label="Slug: "
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput = { (e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true})
                        }}
                    />
                     <Input 
                        label="Short Description: "
                        placeholder="Short Description"
                        className="mb-4"
                        {...register("shortDescription", { required: true})}
                    />
                    <AddTechForm />
                    <RTE label="Content: " name="content" control={control} defaultValue={getValues("content")}/>
                </div>
                <div className='w-1/3 px-2 text-white p-3 mr-8 mt-6'>
                    <Input 
                        label="Project Image: "
                        type="file"
                        className="mb-4"
                        accept="image/png image/jpg image/jpeg image/gif"
                        {...register("image", { required: !project })}
                    />
                    <Select
                        options={[ "ongoing", "completed", "archeive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status", { required: true })}
                    />
                    <Input 
                    type="text"
                    label="Enter Github link: "
                    placeholder="Enter Github link"
                    className="mb-4"
                    {...register("githubLink", { required: true })}
                    />
                    <Input 
                    type="text"
                    placeholder="Enter Demo link"
                    label="Enter Demo link: "
                    className="mb-4"
                    {...register("demoLink")}
                    />
                    <Button
                    type='submit'
                    bgColor="bg-green-500"
                    className='w-full'
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </form>
    );
};



export default ProjectForm;