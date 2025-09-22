import React from "react";


export default function header(){
    return(
      <div>
        <div className="flex justify-between bg-teal-500 px-10 py-6 text-teal-100 ">
            <h1 className="text-lg font-bold">Nahrungsergänzungsmittel</h1>
                <nav className="flex gap-6">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </nav>
        </div>


      </div>

    )
}