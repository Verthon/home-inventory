import * as React from 'react'
import { Link } from "react-router-dom";

export const BottomNavigation = () => {
  return <div>
    <Link to="/"><button>Home</button></Link>
    <Link to="/create"><button>Create</button></Link>
    <button>List</button>
  </div>
}