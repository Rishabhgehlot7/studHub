import { Link } from "react-router-dom";

function TestCard(props) {
    return (
        <Link className=" w-[250] bg-white shadow-xl text-black rounded-lg m-5" to={`/test/${props.title}`} >
            <div className=" w-full h-auto">
                <img src={props.img_add} alt="" className=" rounded-lg w-full h-[220px]" />
            </div>
            <div className=" p-3 w-full">
                <Link className="font-medium text-xl " to={`/test/${props.title}`} >
                    {`${props.title} Test`}
                </Link>
            </div>

        </Link>
    );
}
export default TestCard;

