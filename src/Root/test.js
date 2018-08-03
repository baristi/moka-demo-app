var coffee = await Coffee.getById(3);
response.send(`The coffee with id ${coffee.id} is named "${coffee.name}".<br>
There are ${(await coffee.countries).length} countries basically only growing that coffee.<br>
There are ${(await coffee.coffees).length} other countries also growing that coffee.`);
