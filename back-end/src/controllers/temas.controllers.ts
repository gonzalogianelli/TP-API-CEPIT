import { Request, Response } from "express";
import {TemasService} from "../services/temas.service";
import * as fs from "fs";

export class TemasController{
    constructor(private temasService = new TemasService()){
    }

     get = (req:Request, res:Response) => {
            res.json(this.temasService.get());
        }

        getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // Convertimos el ID que llega como string
    const tema = this.temasService.getById(id); // Usamos el servicio

    if (tema) {
        res.json(tema); // Si lo encuentra, lo devuelve
    } else {
        res.status(404).json({ mensaje: "Tema no encontrado" }); // Si no, da error 404
    }
};
getByQuery = (req: Request, res: Response) => {
    const artista = req.query.artista;
    res.json(this.temasService.getByQuery(artista as string ))// Obtenemos el artista de la query

}


}