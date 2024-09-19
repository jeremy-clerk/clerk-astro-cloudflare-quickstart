import { useStore } from '@nanostores/react'
import { $userStore } from '@clerk/astro/client'

export default function UserInfo(){

    const user = useStore($userStore)

    if(!user) return null

    return (
        <div className={"text-5xl flex flex-col items-center justify-center gap-6"}>
            <span>Hey {user.firstName} {user.lastName}!</span>
            <div>
                <span>👋</span>
            </div>
        </div>
    )

}