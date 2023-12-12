import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';


export default function RTE({ name,control, label, defaultValue = "" }){
    return(
        <div className='w-full'>
            {label && <label className='mb-1 inline-block pl-1 text-white'>{label}</label>}
            <Controller
            name = { name || "content"}
            control={control}
            render={({ field: { onChange }}) => (
                <Editor
                initialValue = {defaultValue}
                apiKey='2rbg9v99pgm8iuay0z48rjsb41a46oelv0ld45rub1l3ffa1'
                init={{
                    plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                onEditorChange={onChange}
                >

                </Editor>
            )}
            ></Controller>
        </div>
    )
}


