async function tempo(request,response){
    const apiSecretEx = process.env.POKEMON_SECRET_API;

    const dynamicDate = new Date();


    const subscribersResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiSecretEx}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const pokemon = subscribersResponseJson.name;

    response.json({
        date: dynamicDate.toGMTString(),
        pokemon: pokemon,
    });
}

export default tempo;