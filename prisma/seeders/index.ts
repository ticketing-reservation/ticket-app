import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clear() {

}

async function main(){
    await clear();
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (error: any) =>{
    console.error(error);

    await prisma.$disconnect();

    process.exit(1);
})
