
import React from 'react';
import { Button, Input, RTE, Select } from "./formData/index"
import { useForm } from 'react-hook-form';


const ProjectForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue,control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "onGoing",
        }
    })
    const submit = async(data) => {}
    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap m-5'>
            <div className='flex lg:flex-row flex-col gap-3 bg-gray-800 rounded-xl shadow-lg bg-gradient-to-t'>
                <div className='w-2/3 px-2 text-white p-8 ml-8'>
                    <Input 
                        label="Title: "
                        placeholder="Title"
                        className="mb-4"
                    />
                    <Input 
                        label="Slug: "
                        placeholder="Slug"
                        className="mb-4"
                    />
                     <Input 
                        label="Short Description: "
                        placeholder="Short Description"
                        className="mb-4"
                    />
                    <RTE label="Content: " name="content" control={control} defaultValue={getValues("content")}/>
                </div>
                <div className='w-1/3 px-2 text-white p-3 mr-8 mt-6'>
                    <Input 
                        label="Project Image: "
                        type="file"
                        className="mb-4"
                        accept="image/png image/jpg image/jpeg image/gif"
                    />
                    <Select
                        options={[ "onGoing", "completed", "archieve"]}
                        label="Status"
                        className="mb-4"
                    />
                    <Input 
                    type="text"
                    label="Enter Github link: "
                    placeholder="Enter Github link"
                    className="mb-4"
                    />
                    <Input 
                    type="text"
                    placeholder="Enter Demo link"
                    label="Enter Demo link: "
                    className="mb-4"
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