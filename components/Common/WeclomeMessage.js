import {Message,Icon, Divider} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
export const HeaderMessage =()=>{
    const router = useRouter()
    const sinupRoute=router.pathname==="/signup"
    return (
        <Message
         attached 
        color='teal'
        header={sinupRoute ?"get started":"welcome back"} 
        icon={sinupRoute ?"settings":"privacy"}
        content={sinupRoute ?"create new account":"login with Email and password"}
        />
    )
}
export const FooterMessage =()=>{
    const router = useRouter()
    const sinupRoute=router.pathname==="/signup"
    return (
        <>
        {sinupRoute ?<>
        <Message attached="bottom" warning>
            <Icon name="help" />
            Existing user? {" "}
            <Link href="/login">
            Login here instead
            </Link>
        </Message>
        <Divider hidden/>
        
        
        </>
        
        :<>

        <Message attached="bottom" info>
            <Icon name="lock" />
            Existing user? {" "}
            <Link href="/reset">
            forget password
            </Link>
        </Message>

        <Message attached="bottom" warning>
            <Icon name="help" />
            new user ?
            <Link href="/signup">
            signup here           </Link> instead{" "}
        </Message>
        </>
        
        }
        
        
        
        
        
      </>
    )

}