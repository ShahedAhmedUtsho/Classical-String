import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

 const Error = () => {
  return (
    <div className="justify-center flex items-center min-h-screen min-w-screen">

   
    <div className=" ">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">404</h4>
        <p className="text-sm text-muted-foreground">
         Page not found
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        
        <Separator orientation="vertical" />
        <Link to="/">Home</Link>
      </div>

      </div>
    </div>
  )
}

export default Error