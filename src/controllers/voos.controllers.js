export async function escolherPassagem(req, res) {
    try {
        const { saida, destino, partida, chegada, preco } = req.body;
        await createPassagemDB(saida, destino, partida, chegada, preco );

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}
