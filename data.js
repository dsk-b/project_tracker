import { v4 as uuid } from "uuid";

export const leadProjectData = [
    {
        "leadId": uuid(),
        "leadName": "Ram",
        "projects": [
            { "projectId": uuid(), "name": "project-A", "status": "completed","desc" : "description" },
            { "projectId": uuid(), "name": "project-B", "status": "not yet started","desc" : "description" },
            { "projectId": uuid(), "name": "project-C", "status": "pending","desc" : "description" }]
    },
    {
        "leadId": uuid(),
        "leadName": "Shya",
        "projects": [
            { "projectId": uuid(), "name": "project-C", "status": "completed","desc" : "description" },
            { "projectId": uuid(), "name": "project-D", "status": "not yet started","desc" : "description" },
            { "projectId": uuid(), "name": "project-E", "status": "pending","desc" : "description" }]
    },
    {
        "leadId": uuid(),
        "leadName": "John",
        "projects": [
            { "projectId": uuid(), "name": "project-F", "status": "completed","desc" : "description" },
            { "projectId": uuid(), "name": "project-G", "status": "not yet started","desc" : "description" },
            { "projectId": uuid(), "name": "project-H", "status": "pending","desc" : "description" }]
    },
];
