'use client'

import React, { useState } from 'react'
import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/validationSchemas'
import { z } from 'zod'

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {

    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    })
    const [error, setError] = useState('')

    return (
        <div className='max-w-xl'>
            {error && <Callout.Root color="red" role="alert" className='mb-5'>
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>}
            <form
                className='space-y-3'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/issues', data)
                        router.push('/issues')
                    } catch (error) {
                        setError('An unexpected error occured.')
                    }
                })}>
                <TextField.Root placeholder='Title' {...register('title')} />
                {errors.title && <Text color='red' as='p' size='1'>{errors.title.message}</Text>}
                <TextArea placeholder='Description' {...register('description')} />
                {errors.description && <Text color='red' as='p' size='1'>{errors.description.message}</Text>}
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage