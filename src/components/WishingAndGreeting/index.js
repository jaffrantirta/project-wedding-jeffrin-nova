import React from 'react'
import { API } from 'aws-amplify'

export default function WishingAndGreeting() {
    const addComment = async () => {
        try {
            const response = await API.post('api', '/comments', { body: 'hai' });
            console.log('Comment created:', response);
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    }
    return (
        <section>
            <button onClick={() => addComment()}>add</button>
        </section>
    )
}
