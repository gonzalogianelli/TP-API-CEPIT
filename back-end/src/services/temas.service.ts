import * as fs from "fs";
import * as path from "path";

const datapath = path.join(__dirname, "../data/temas.json");

export class TemasService{
    get(){
        const data =  fs.readFileSync(datapath, "utf-8");
        return JSON.parse(data);
    }

    getById(id:number) {
        const data = fs.readFileSync(datapath, 'utf-8');
        const temas = JSON.parse(data);
        return temas.find((tema: any) => tema.id === id);

}
  getByQuery(artista: string) {
        const data = fs.readFileSync(datapath, 'utf-8');
        const temas = JSON.parse(data);
        return temas.filter((tema: any) => tema.artista.toLowerCase() === artista.toLowerCase());
    }

}