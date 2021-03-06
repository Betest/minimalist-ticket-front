import { signOut, useSession } from "next-auth/react"
import { LoadingIcon } from "./LoadingIcon"
import { LoginButton } from "./LogingButton"

export function NavUserOulet() {
    const {data: session, status } = useSession()

    if (status == "loading") return <LoadingIcon />
    if (status == "unauthenticated") return <LoginButton />

    return(
        <>
           Signed in as {session?.user?.email} <br />
           <button onClick={()=>signOut()}>Sign out</button>
        </>
    )
}