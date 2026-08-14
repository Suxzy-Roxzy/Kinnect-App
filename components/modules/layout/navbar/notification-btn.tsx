"use client"
import { Button } from '@/components/ui/button'
import { Badge, BellIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NotificationBtn = () => {
    const [count, setCount] = useState(0)
    const router = useRouter()

    useEffect(()=>{
        const fetchNotificationCount=()=> {
            setCount(5)
        };
        fetchNotificationCount()
    }, []);

    const handleClick = () => {
        setCount(0)
    }

  return (
    <Button
    variant="outline"
    size="icon"
    className='relative'
    onClick={handleClick}
    aria-label='Notifications'
    >
        <BellIcon size={16} aria-hidden="true"/>
        {count > 0 && (
            <Badge className='absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1'>
                {count > 99 ? "99+" : count}
            </Badge>
        )}
    </Button>
  )
}

export default NotificationBtn