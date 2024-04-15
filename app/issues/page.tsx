import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
    return (
        <div className='flex justify-center'>
            <Button size='3'>
                <Link href='/issues/new'>
                    Create New Issue
                </Link>
            </Button>
        </div>
    )
}

export default IssuesPage