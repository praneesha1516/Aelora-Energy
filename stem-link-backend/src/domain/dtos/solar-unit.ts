import {z} from "zod";
 
export const CreateSolarUnitDto = z.object ({
    serialNumber: z.string().min(1),
    installationDate: z.string().min(1),
    capacity: z.number().min(0),
    status: z.enum(["ACTIVE", "INACTIVE" , "MAINTENANCE"]),
    userId: z.string().min(1),
    
    
});

