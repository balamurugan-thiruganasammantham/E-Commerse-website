import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){

    const[keyword , setKeyword] = useState("");

    const Navigate = useNavigate()
    const searchHandler = () => {
        Navigate('/search?keyword='+keyword)
    }


    return   <div className="col-12 col-md-6 mt-2 mt-md-0">
                <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="form-control"
                    onBlur={searchHandler}
                    placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                    <button id="search_btn"
                     onClick={searchHandler}
                      className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                </div>
            </div>
}