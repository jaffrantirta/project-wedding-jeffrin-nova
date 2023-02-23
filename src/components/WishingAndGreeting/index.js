import React, { useEffect, useRef, useState } from 'react'
import { API, Amplify } from 'aws-amplify'
import config from './../../aws-exports'
import InputRounded from '../InputRounded'
import Button from '../Button'
import ProfilePicture from '../ProfilePicture'

Amplify.configure(config)

export default function WishingAndGreeting() {
    const projectName = 'wedding'
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [attend, setAttend] = useState(true)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [commentsToShow, setCommentsToShow] = useState(5)
    const addComment = async () => {
        setIsLoading(true)
        try {
            await API.post(projectName, '/comment', {
                body: {
                    name: name,
                    comment: comment,
                    attend: attend
                }
            }).then(() => {
                setName('')
                setComment('')
                setComments([{ name: name, comment: comment, attend: attend }, ...comments])
                setIsLoading(false)
            })
        } catch (error) {
            setIsLoading(false)
            console.error('Error creating comment:', error);
        }
    }
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        let node = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (node) {
            observer.observe(node);
        }

        API.get(projectName, '/comment/name').then(response => {
            setComments(response)
        }).catch(error => {
            console.error('error : ' + error);
        })

        return () => {
            if (node) {
                observer.unobserve(node);
                node = null;
            }
        };
    }, [sectionRef])

    const handleLoadMore = () => {
        setCommentsToShow(commentsToShow + 5)
    }

    const getInitials = (name) => {
        const nameArray = name.split(" ");
        let initials = "";
        for (let i = 0; i < nameArray.length && initials.length < 2; i++) {
            initials += nameArray[i].charAt(0).toUpperCase()
        }
        return initials
    }

    const buttonMore = () => {
        return <Button text={`Load more...`} customStyle={`bg-slate-200 text-slate-700 mx-10 md:mx-96 my-5`} onClick={() => handleLoadMore()} />
    }


    return (
        <section ref={sectionRef} className='h-fit p-5 md:px-52 font-primary text-primary'>
            <h1 className={`font-third text-5xl text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>Ucapan dan Doa</h1>
            <div className={`rounded-3xl border-2 border-primary p-10 flex flex-col justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                <p className={`text-center text-lg font-bold mb-7 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>{comments.length} Comments</p>
                <hr className='mb-7'></hr>
                <InputRounded placeholder={`Nama*`} value={name} onChange={e => setName(e.target.value)} customStyle={`md:mx-10 mb-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <InputRounded isTextArea={true} placeholder={`Ucapan*`} value={comment} onChange={e => setComment(e.target.value)} customStyle={`md:mx-10 mb-5 rounded-3xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <select onChange={e => setAttend(e.target.value)} className={`rounded-full border-2 border-primary px-5 py-2 md:mx-10 mb-5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
                    <option value={true}>Hadir</option>
                    <option value={false}>Tidak Hadir</option>
                </select>
                <Button disabled={isLoading} text={`${isLoading ? "Mengirim..." : "Kirim"}`} onClick={() => addComment()} customStyle={`md:mx-10 md:mx-96 mb-5 ${isLoading ? "bg-gray-400 cursor-not-allowed" : ""} transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`} />
                <div>
                    {comments.map((item, index) => {
                        if (index < commentsToShow) {
                            return (
                                <div key={index} className='flex w-full border-b-2 p-2'>
                                    <ProfilePicture initials={getInitials(item.name)} size="medium" />
                                    <div className='ml-2'>
                                        <p className='font-bold mb-3'>{item.name}</p>
                                        <p className='text-sm text-slate-700'>{item.comment}</p>
                                        <p className='text-sm text-slate-400'>~ {item.attend === true ? 'Hadir' : 'Tidak Hadir'}</p>
                                    </div>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
                {comments.length > commentsToShow ? buttonMore() : <></>}
            </div>
        </section >
    )
}
