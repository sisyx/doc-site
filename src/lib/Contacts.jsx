import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateContacts } from "../redux/core/contactsSlice";
import useGetData from "../hooks/useGetData";

function Contacts() {
    const dispatch = useDispatch();
    const { data, isPending, isError } = useGetData(["Get_Contacts"], "ContactUs.aspx");

    useEffect(() => {
        if (!isPending && !isError && !!data.length && !!data[0]?.address) {
            dispatch(updateContacts(data[0]));
        };

        console.log("data:")
        console.log(data)
    }, [data, isPending, isError]);

    return ( 
        <></>
     );
}

export default Contacts;