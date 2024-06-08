import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function NoPage() {
  return (
    <div>
      <h1>Sorry nothing here!</h1>
      <NavLink to={'/'}>
            <div className=" mb-2">
                <Button
                    className='px-8 py-2'
                >
                    Back Home
                </Button>
            </div>
        </NavLink>
    </div>
  )
}

export default NoPage
