import { toast } from "react-toastify";
export const showToastLoading= async (asyncFunc,loadingMsg,succMsg,errMsg)=>{
const toastId=toast.loading(loadingMsg);
try{
    const result= await asyncFunc();
    toast.update(toastId,{
        render:succMsg,
        type:"success",
        isLoading:false,
        autoClose:3000,
        closeOnClick:true
    })
    return result
}
catch(error){
    toast.update(toastId,{
        render:errMsg||"Some Thing Went Worng",
        type:error,
        isLoading:false,
        autoClose:3000,
        closeOnClick:true
    })
    throw error
}
}