"use server"
export const createProject = async(payload:any)=>{
      const response = await fetch(`http://localhost:5000/api/project/create-project`, {
            method: "POST",
            body: payload,
        });
        return response.json();
}