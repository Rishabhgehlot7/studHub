// import Image from 'next/image';

import { Link } from "react-router-dom";

function TestCard(props) {
    return (
        <Link className=" w-[250] bg-white shadow-xl text-black rounded-lg m-5" to={props.link} >
            <div className=" w-full h-auto">
                <iframe className=" rounded-lg w-full h-[220px]" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className=" p-3 w-full">
                <h className="font-medium text-xl">
                    {props.title}
                </h>
            </div>

        </Link>
    );
}
export default TestCard;