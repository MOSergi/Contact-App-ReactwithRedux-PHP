import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//react redux imports
import { useDispatch, useSelector } from "react-redux";
import { logedIn } from "../reduxActions/actions";

export function useValidateRoutesProtected(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) =>  {
            if (data == "No Login"){
                navigate("/Login");
            } else {
                fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/getUserData/getName.php", {
                    credentials : "include"
                })
                .then(response => response.json())
                .then((data) => {
                    if (data != "No login"){
                        dispatch(logedIn);
                        dispatch({type : "setUsername", payload : data});
                    } 
                })
                .catch(error => console.log(error))
                dispatch(logedIn);
            }
        })
        .catch(error => console.log(error))
    }, []);

}


export function useValidateRoutesNoProtected(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) =>  {
            if (data == "LogedIn"){
                dispatch(logedIn);
                navigate("/Profile");
            }
        })
        .catch(error => console.log(error))
    }, []);
}



