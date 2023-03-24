import { leadProjectData } from "data";
export async function GET(req) {
    
    return Response.json(leadProjectData);
}