import { assetsArray } from "./assetsData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedAssets (){
  assetsArray.every(async (assetObj) => await prisma.asset.create({data: assetObj}) )
}

seedAssets().catch((error)=>{
  console.log(error);
  process.exit(1)
}).finally(()=> {
  prisma.$disconnect()
})