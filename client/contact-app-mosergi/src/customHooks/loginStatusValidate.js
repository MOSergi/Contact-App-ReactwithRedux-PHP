import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useValidateRoutesProtected(){

    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) =>  {
            if (data == "No Login"){
                navigate("/Login");
            }
        })
        .catch(error => console.log(error))
    }, []);

}


export function useValidateRoutesNoProtected(){

    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) =>  {
            if (data == "LogedIn"){
                navigate("/Profile");
            }
        })
        .catch(error => console.log(error))
    }, []);
}



